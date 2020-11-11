package gw.lob.gl7.presenters

uses gw.lob.gl7.GL7Category
uses gw.lob.gl7.financials.GL7QuoteDisplayUtil
uses gw.pl.currency.MonetaryAmount
uses gw.pl.persistence.core.Key
uses entity.GL7Cost
uses typekey.Currency

class GL7AuditPremiumDetailsPresenter implements GL7PresenterHelpers {

  static class AuditPremiumInformation {
    private var _order: int as readonly Order
    private var _estimatedAmt: MonetaryAmount as readonly EstimatedAmount
    private var _auditedAmt: MonetaryAmount as readonly AuditedAmount
    private var _currency: Currency

    private construct(order: int, auditedAmt: MonetaryAmount, estimatedAmt: MonetaryAmount, currency: Currency) {
      _order = order
      _estimatedAmt = estimatedAmt
      _auditedAmt = auditedAmt
      _currency = currency
    }

    public static function make(order: int, auditedAmt: MonetaryAmount, estimatedAmt: MonetaryAmount, currency: Currency): AuditPremiumInformation {
      return new AuditPremiumInformation(order, auditedAmt, estimatedAmt, currency)
    }


    property get CostChange(): MonetaryAmount {
      return _auditedAmt - EstimatedAmount
    }

    property get EstimatedAmount(): MonetaryAmount {
      return _estimatedAmt ?: 0BD.ofCurrency(_currency)
    }

    property get EstimatedAmountMissing(): boolean {
      return _estimatedAmt == null
    }
  }

  var _period : PolicyPeriod
  var _util : GL7QuoteDisplayUtil

  construct(period : PolicyPeriod){
    _period = period
    _util = new GL7QuoteDisplayUtil(period.GL7Line)
  }

  property get GLCosts() : Set<Cost> {
   return _period.GL7Line.Costs
  }

  property get Jurisdictions() : Jurisdiction[] {
    return _util.LocationsByJurisdiction.Keys.toTypedArray()
  }

  /**
   * Maps a cost to current vs prior cost amount information
   */
  function costVersionsForDisplay(jurisdiction: Jurisdiction) : Map<GL7Cost, AuditPremiumInformation> {
    var amountMap = new HashMap<GL7Cost, AuditPremiumInformation>();
    var costsToDisplay = exposureCostsForJurisdiction(jurisdiction)

    /**
     * First handle all costs that have been merged prior to audit and became sliced as a result of the audit.
     * In order to avoid recalculating amounts, assign the sum to the version that matches BasedOn's effective date.
     */
    var costsWithMultipleVersionsPerBasedOn = costsToDisplay.partition( \ c -> c.BasedOn)
    var currentCostsMatchingBasedOnEffDate = new HashMap<Key, GL7Cost>()
    costsWithMultipleVersionsPerBasedOn.eachKeyAndValue( \ basedOn, currentCosts -> {
      // Leave a cost that has the same effective date as the BasedOn
      var currentCost = currentCosts.firstWhere( \ c -> c.EffectiveDate == basedOn.EffectiveDate)
      if(currentCost != null) {
        currentCostsMatchingBasedOnEffDate.put(currentCost.ID, currentCost)
      }
    })

    // Now iterate over current costs to display to determine how current and prior amounts should be displayed
    for(cost in costsToDisplay index order) {
      // Handle instances of costs that have been split in the audit
      if(currentCostsMatchingBasedOnEffDate.get(cost.ID) == cost) {
        /**
         * Handle all remaining cases, such as where current version is 1-1 with BasedOn version OR there are multiple
         * BasedOn versions effective in current cost's effective date range. Summing up BasedOn version amounts will
         * work in both cases.
         */
        var basedOnVersions = cost.BasedOn.VersionList.AllVersions
            .where( \ costV -> costV.EffectiveDate.isBetweenDates(cost.EffectiveDate, cost.ExpirationDate, :inclusiveFrom = true, :inclusiveTo = false))
        var sumBasedOnVersions = basedOnVersions.AmountSum(cost.SettlementCurrency)
        // Put the amount for comparison with the matching BasedOn version
        amountMap.put(cost, AuditPremiumInformation.make(order, cost.ActualAmount, sumBasedOnVersions, _period.PreferredSettlementCurrency))
      } else {
        // Put the amount and compare against missing amount (no version at current cost's date existed before the Audit)
        amountMap.put(cost, AuditPremiumInformation.make(order, cost.ActualAmount, null, _period.PreferredSettlementCurrency))
      }
    }

    return amountMap
  }

  function exposureCostsForJurisdiction(jurisdiction: Jurisdiction) : List<GL7Cost> {
    var locationsForJurisdiction = _util.LocationsByJurisdiction.get(jurisdiction)
    if(locationsForJurisdiction == null) {
      return {}
    }

    var exposuresForLocation : List<GL7Exposure> = {}
    locationsForJurisdiction.orderBy( \ loc -> loc.Location.LocationNum)
        .each( \ loc -> {exposuresForLocation.addAll(_util.getExposuresByLocation(loc))
    })

    Collections.sort(exposuresForLocation, GL7PresenterUtil.exposureComparatorChain())

    var exposureCosts : List<GL7Cost> = {}
    exposuresForLocation.each( \ exp -> exposureCosts.addAll(_util.getSortedCostsByExposure(exp)))

    return exposureCosts.where( \ cost -> cost typeis GL7ExposureCovCost and cost.CoverageCategory == GL7Category.EXPOSURE_STANDARD_COVERAGE.PublicID)
  }

  function locationForExposureCost(cost : GL7Cost) : GL7Location {
    var owningCoverable = cost.getSlice(cost.EffectiveDate).OwningCoverable
    return owningCoverable typeis GL7Exposure ? owningCoverable.GL7Location : null
  }

  function sublineForCost(cost : GL7Cost) : String {
    var owningCoverable = cost.getSlice(cost.EffectiveDate).OwningCoverable
    return owningCoverable typeis GL7Exposure ? owningCoverable.SublineTypeName : ""
  }

  function blankIfRateOne(cost : GL7Cost) : String {
    return cost.ActualAdjRate != java.math.BigDecimal.ONE ? cost.ActualAdjRate as String : ""
  }

  function blankIfBasisZero(cost : GL7Cost) : String {
    return cost.Basis.IsZero ? "" : cost.Basis as String
  }
}