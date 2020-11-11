package gw.lob.gl7.rating

uses gw.api.domain.financials.PCFinancialsLogger
uses gw.lang.reflect.interval.DateInterval
uses gw.rating.AbstractRatingEngine
uses gw.rating.CostData

uses java.lang.Iterable
uses java.util.ArrayList
uses java.util.Date
uses java.math.RoundingMode
uses gw.financials.Prorater
uses java.lang.Integer

class GL7SysTableRatingEngine extends AbstractRatingEngine<GL7Line> {

  construct(line: GL7Line) {
    super(line)
  }

  /*
   *  GL7 is rated on a 365-day term
   */
  override protected property get NumDaysInCoverageRatedTerm(): int {
    return 365
  }

  protected override function rateSlice(lineVersion : GL7Line) {
    if (not lineVersion.Branch.isCanceledSlice()) {
      var logMsg = "Rating " + lineVersion + " " + lineVersion.SliceDate + " version..."
      PCFinancialsLogger.logInfo( logMsg  )

      var dateInterval = lineVersion.SliceDate..getNextSliceDateAfter(lineVersion.SliceDate)

      lineVersion.GL7SublineTypes.each( \ sublineType -> rateSublineType(sublineType, dateInterval))
      lineVersion.GL7SublineTypes*.Sublines.each( \ subline -> rateSubline(subline, dateInterval))
      lineVersion.GL7SublineTypes*.Locations.each( \ location -> rateLocation(location, dateInterval))
      lineVersion.GL7SublineTypes*.Locations*.GL7Exposures.each( \ exposure -> rateExposure(exposure, dateInterval))

      PCFinancialsLogger.logInfo( logMsg + " done" )
    }
  }

  private function rateSublineType(sublineType : GL7SublineType, sliceToRate : DateInterval) {
    sublineType.Coverages.each( \ cov -> rateBasic(sublineType, new GL7SublineTypeCovCostData(sliceToRate.LeftEndpoint, sliceToRate.RightEndpoint, cov, RateCache), 1000))
  }

  private function rateSubline(subline : GL7Subline, sliceToRate : DateInterval) {
    subline.Coverages.each( \ cov -> rateBasic(subline, new GL7SublineCovCostData(sliceToRate.LeftEndpoint, sliceToRate.RightEndpoint, cov, RateCache), 1000))
  }

  private function rateLocation(location : GL7Location, sliceToRate : DateInterval) {
    location.Coverages.each( \ cov -> rateBasic(location, new GL7LocationCovCostData(sliceToRate.LeftEndpoint, sliceToRate.RightEndpoint, cov, RateCache), 1000))
  }

  private function rateExposure(exposure : GL7Exposure, sliceToRate : DateInterval) {
    if(!exposure.IsBasisScalable) {
      exposure.Exclusions.each( \ excl -> rateBasic(exposure, new GL7ExposureExclCostData(sliceToRate.LeftEndpoint, sliceToRate.RightEndpoint, excl, RateCache, exposure.IsBasisScalable), 1000))
    }
  }

  private function rateBasic(coverable: Coverable, cost : GL7CostData, givenBasis: Integer, tempCosts: List<GL7CostData> = null) {
    cost.Basis = givenBasis ?: 1000
    if(coverable typeis GL7Exposure and cost.MergeAsBasisScalable) {
      cost.Basis = prorateAmount(cost.EffectiveDate, cost.ExpirationDate, coverable, cost.Basis.intValue())
    }
    cost.StandardBaseRate = 0.025
    cost.StandardAdjRate = 0.025
    cost.StandardTermAmount = cost.Basis * cost.StandardAdjRate
    cost.NumDaysInRatedTerm = NumDaysInCoverageRatedTerm
    cost.copyStandardColumnsToActualColumns()
    if(cost.MergeAsBasisScalable) {
      cost.ActualAmount = cost.ActualTermAmount
    }
    if(tempCosts == null) {
      addCost(cost)
    } else {
      tempCosts.add(cost)
    }
  }

  override protected function rateWindow(lineVersion : GL7Line) {
    rateBasisScalableExposures()
  }

  override protected function createCostDataForCost(c : Cost) : CostData {
    switch(typeof c) {
      case GL7SublineTypeCovCost: return new GL7SublineTypeCovCostData(c, RateCache)
      case GL7SublineTypeCondCost: return new GL7SublineTypeCondCostData(c, RateCache)
      case GL7SublineTypeExclCost: return new GL7SublineTypeExclCostData(c, RateCache)
      case GL7SublineCovCost: return new GL7SublineCovCostData(c, RateCache)
      case GL7SublineCondCost: return new GL7SublineCondCostData(c, RateCache)
      case GL7SublineExclCost: return new GL7SublineExclCostData(c, RateCache)
      case GL7LocationCovCost: return new GL7LocationCovCostData(c, RateCache)
      case GL7LocationCondCost: return new GL7LocationCondCostData(c, RateCache)
      case GL7LocationExclCost: return new GL7LocationExclCostData(c, RateCache)
      case GL7ExposureCovCost: return new GL7ExposureCovCostData(c, RateCache)
      case GL7ExposureCondCost: return new GL7ExposureCondCostData(c, RateCache)
      case GL7ExposureExclCost: return new GL7ExposureExclCostData(c, RateCache)
        default: throw "Unexpected cost type ${c.DisplayName}"
    }
  }

  override protected function existingSliceModeCosts() : Iterable<Cost> {
    return PolicyLine.Costs
  }

  private function rateBasisScalableExposures() {
    for (exp in PolicyLine.VersionList.GL7SublineTypes*.Locations*.GL7Exposures.flatMap( \ exp -> exp)) {
      if (exp.AllVersions.first().IsBasisScalable) {
        rateExposureAcrossSlices(exp)
      }
    }
  }

  // For basis-scalable exposures, we rate them by finding all versions and rating across them.  At each point in
  // time, we check to see if the cost has changed to what we've been accumulating.  If so, we emit the old cost
  // and store the new one.  If not, we merge it in and keep going.
  private function rateExposureAcrossSlices(expVL : entity.windowed.GL7ExposureVersionList) {
    var previousCosts : List<GL7CostData> = {}

    for (startDate in AllEffectiveDates index i) {
      var exp = expVL.AsOf(startDate)
      if (exp != null and not PolicyLine.Branch.getSlice(startDate).isCanceledSlice()) {
        var endDate = i < (AllEffectiveDates.size() - 1) ? AllEffectiveDates[i + 1] : PolicyLine.Branch.PeriodEnd
        exp = exp.getSlice(startDate)
        for(excl in exp.Exclusions) {
          var tempCosts = new ArrayList<GL7CostData>()
          rateBasisScalableExposureExclusion(excl, exp, startDate, endDate, tempCosts)
          accumulateAndEmitCosts(exp, previousCosts, tempCosts)
        }
      } else {
        // Emit any costs we've accumulated; if there was a gap and the exposure becomes effective again
        // at a later date, we'll start over accumulating costs
        addCosts(previousCosts)
        previousCosts.clear()
      }
    }

    // Emit anything left that hasn't yet been emitted
    addCosts(previousCosts)
    previousCosts.clear()
  }

  // Given the set of pre-existing costs and newly-calculated costs, either merge them in with the existing list of
  // costs or just add them in, and if necessary emit any previous costs
  private function accumulateAndEmitCosts(exp : GL7Exposure, previousCosts : List<GL7CostData>, tempCosts : List<GL7CostData>) {
    for (tempCost in tempCosts) {
      var previousCost = previousCosts.firstWhere(\previousCost -> previousCost.Key == tempCost.Key)
      if (previousCost == null) {
        // Just add it to the buffer
        previousCosts.add(tempCost)
      } else if (previousCost.mergeAsBasisScalableIfCostEqual(tempCost)) {
        // Merge successful, so recalculate the term and actual amounts
        previousCost.ActualTermAmount = (previousCost.Basis * previousCost.ActualAdjRate)
            .setScale( RoundingLevel, RoundingMode )
        previousCost.ActualAmount = previousCost.ActualTermAmount
      } else {
        // Merge failed, so emit the previous cost, then add in the new one to our buffer in its place
        addCost(previousCost)
        previousCosts.remove(previousCost)
        previousCosts.add(tempCost)
      }
    }
  }


  private function rateBasisScalableExposureExclusion(excl: GL7ExposureExcl, exp: GL7Exposure, start: Date, end: Date, costDatas : List<GL7CostData>) {
    rateBasic(exp, new GL7ExposureExclCostData(start, end, excl, RateCache, true), exp.DomainModel.ExposureAmount as Integer, costDatas)
  }

  private property get RoundingLevel() : int {
    return PolicyLine.Branch.Policy.Product.QuoteRoundingLevel
  }

  private property get RoundingMode() : RoundingMode {
    return PolicyLine.Branch.Policy.Product.QuoteRoundingMode
  }

  private function prorateAmount(startDate : Date, endDate : Date, exposure : GL7Exposure, amount : int) : int {
    var expirationDate = exposure.LatestExpirationDate
    //Jira PC-15315
    //Jira PC-16001
    //If we are doing an Audit for a cancelled policy then basis should not be prorated further
    // - the audited amount corresponds to an estimated amount that was already prorated to account for the cancellation
    if((exposure.Branch.Job typeis Audit) and (exposure.EndOfCoverageDate < expirationDate)){
      expirationDate = exposure.EndOfCoverageDate
    }
    return Prorater.forRounding(0, RoundingMode, TC_PRORATABYDAYS).prorate( exposure.EarliestEffectiveDate, expirationDate, startDate, endDate, amount).intValue()
  }
  
}