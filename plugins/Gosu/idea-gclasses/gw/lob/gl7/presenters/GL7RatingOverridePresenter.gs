package gw.lob.gl7.presenters

uses entity.GL7Cost
uses entity.GL7ExposureSchedCondItem
uses entity.GL7ExposureSchedCovItem
uses entity.GL7ExposureSchedExclItem
uses entity.GL7LocationSchedCondItem
uses entity.GL7LocationSchedCovItem
uses entity.GL7LocationSchedExclItem
uses entity.GL7SublineSchedCondItem
uses entity.GL7SublineSchedCovItem
uses entity.GL7SublineSchedExclItem
uses entity.GL7SublineTypeSchCondItem
uses entity.GL7SublineTypeSchCovItem
uses entity.GL7SublineTypeSchExclItem
uses gw.lob.gl7.GL7Category
uses gw.lob.gl7.financials.GL7QuoteDisplayUtil
uses typekey.Currency

class GL7RatingOverridePresenter {

  var _period : PolicyPeriod
  var _line : GL7Line
  var _util : GL7QuoteDisplayUtil

  construct(period : PolicyPeriod){
    _period = period
    _line = period.GL7Line
    _util = new GL7QuoteDisplayUtil(period.GL7Line)
  }

  function isCostEditable(cost : GL7Cost) : boolean {
    return !(_util.willRateThisSliceForward() and cost.EffDate < _period.EditEffectiveDate)
  }

  property get SublineTypeCosts() : List<GL7Cost> {
    var sublineTypeCosts : List<GL7Cost> = {}
    var sortedSublineTypes = _util.SortedSublineTypes
    sortedSublineTypes.each( \ sublineType -> {
      sublineTypeCosts.addAll(_util.getSortedCostsBySublineType(sublineType))
      sublineTypeCosts.addAll(_util.scheduleCostsForCoverable(sublineType))
    })
    return sublineTypeCosts
  }

  property get SublineCosts() : List<GL7Cost> {
    var sublineCosts : List<GL7Cost> = {}
    var jurisdictions = _util.LocationsByJurisdiction.Keys.toList()
    jurisdictions.each( \ jurisdiction -> {
      _util.getSublinesByJurisdiction(jurisdiction).each( \ subline -> {
          sublineCosts.addAll(_util.getSortedCostsBySubline(subline))
          sublineCosts.addAll(_util.scheduleCostsForCoverable(subline))
      })
    })

    return sublineCosts
  }

  property get LocationCosts() : List<GL7Cost> {
    var locationCosts : List<GL7Cost> = {}
    _util.LocationsByJurisdiction.eachValue( \ locations -> {
        locations.each( \ location -> {
          locationCosts.addAll(_util.getSortedCostsByLocation(location))
          locationCosts.addAll(_util.scheduleCostsForCoverable(location))
        })
    })
    return locationCosts
  }

  property get ExposureCosts() : List<GL7Cost> {
    var exposuresForLocation : List<GL7Exposure> = {}
    _util.LocationsByJurisdiction.eachValue( \ locations -> {
      locations.each( \ location -> exposuresForLocation.addAll(_util.getExposuresByLocation(location)))
    })

    Collections.sort(exposuresForLocation, GL7PresenterUtil.exposureComparatorChain())

    var exposureCosts : List<GL7Cost> = {}
    exposuresForLocation.each( \ exp -> {
      exposureCosts.addAll(_util.getSortedCostsByExposure(exp))
      exposureCosts.addAll(_util.scheduleCostsForCoverable(exp))
    })

    return exposureCosts
  }

  property get UnmannedAircraftCosts() : List<GL7Cost> {
    var unmannedAircrafts = _util.AllUnmannedAircrafts

    var unmannedAircraftCosts : List<GL7Cost> = {}

    Collections.sort(unmannedAircrafts, new UnmannedAircraftComparator())

    unmannedAircrafts.each(\unmannedAircraft -> {
      unmannedAircraftCosts.addAll(_util.getSortedCostsByUnmannedAircraft(unmannedAircraft))
    })

    return unmannedAircraftCosts
  }

  private class UnmannedAircraftComparator implements Comparator<GL7UnmannedAircraft> {
    override function compare(unmannedAircraft1 : GL7UnmannedAircraft, unmannedAircraft2 : GL7UnmannedAircraft) : int {
      return GL7UnmannedAircraftPresenter.getUnmannedAircraftDescription(unmannedAircraft1)
          .compareTo(GL7UnmannedAircraftPresenter.getUnmannedAircraftDescription(unmannedAircraft2))
    }
  }


  function locationOrStateOrAircraftFor(cost : GL7Cost) : String {
    if(SublineCoverables.contains(typeof cost.OwningCoverable))
      return sublineJurisdictionFor(cost.OwningCoverable)

    if(LocationCoverables.contains(typeof cost.OwningCoverable))
      return locationFor(cost.OwningCoverable)

    if(ExposureCoverables.contains(typeof cost.OwningCoverable))
      return exposureLocationFor(cost.OwningCoverable)

    if(UnmannedAircraftCoverables.contains(typeof cost.OwningCoverable))
      return unmannedAircraftDisplayFor(cost.OwningCoverable)

    return null
  }

  private function sublineJurisdictionFor(coverable: Coverable) : String {
    switch (typeof coverable) {
      case GL7Subline:
          return coverable.Jurisdiction.DisplayName
      case GL7SublineSchedCovItem:
          return coverable.ScheduleCoverage.GL7Subline.Jurisdiction.DisplayName
      case GL7SublineSchedCondItem:
          return coverable.ScheduleCondition.GL7Subline.Jurisdiction.DisplayName
      case GL7SublineSchedExclItem:
          return coverable.ScheduleExclusion.GL7Subline.Jurisdiction.DisplayName
        default:
        return null
    }
  }

  private function locationFor(coverable: Coverable) : String {
    switch (typeof coverable) {
      case GL7Location:
          return coverable.Location.DisplayName
      case GL7LocationSchedCovItem:
          return coverable.ScheduleCoverage.GL7Location.Location.DisplayName
      case GL7LocationSchedCondItem:
          return coverable.ScheduleCondition.GL7Location.Location.DisplayName
      case GL7LocationSchedExclItem:
          return coverable.ScheduleExclusion.GL7Location.Location.DisplayName
        default:
        return null
    }
  }

  private function exposureLocationFor(coverable: Coverable) : String {
    switch(typeof coverable){
      case GL7Exposure:
          return coverable.GL7Location.Location.DisplayName
      case GL7ExposureSchedCovItem:
          return coverable.ScheduleCoverage.GL7Exposure.GL7Location.Location.DisplayName
      case GL7ExposureSchedCondItem:
          return coverable.ScheduleCondition.GL7Exposure.GL7Location.Location.DisplayName
      case GL7ExposureSchedExclItem:
          return coverable.ScheduleExclusion.GL7Exposure.GL7Location.Location.DisplayName
        default:
        return null
    }
  }

  function classCodeFor(cost : GL7Cost) : String {
    if(ExposureCoverables.contains(typeof cost.OwningCoverable))
      return exposureClassCodeFor(cost.OwningCoverable)

    if(UnmannedAircraftCoverables.contains(typeof cost.OwningCoverable))
      return unmannedAircraftClassCodeFor(cost.OwningCoverable)

    return null
  }

  private function exposureClassCodeFor(coverable: Coverable) : String {
    switch(typeof coverable){
      case GL7Exposure:
          return coverable.DomainModel.ClassCode
      case GL7ExposureSchedCovItem:
          return coverable.ScheduleCoverage.GL7Exposure.DomainModel.ClassCode
      case GL7ExposureSchedCondItem:
          return coverable.ScheduleCondition.GL7Exposure.DomainModel.ClassCode
      case GL7ExposureSchedExclItem:
          return coverable.ScheduleExclusion.GL7Exposure.DomainModel.ClassCode
        default:
        return null
    }
  }

  private function unmannedAircraftClassCodeFor(coverable: Coverable) : String {
    switch(typeof coverable){
      case GL7UnmannedAircraft:
        return coverable.Exposure.DomainModel.ClassCode
      default:
        return null
    }
  }

  private function unmannedAircraftDisplayFor(coverable: Coverable) : String {
    switch(typeof coverable){
      case GL7UnmannedAircraft:
        return GL7UnmannedAircraftPresenter.getUnmannedAircraftDescription(coverable)
      default:
        return null
    }
  }

  function sublineTypeNameFor(cost : GL7Cost) : String {
    if(SublineTypeCoverables.contains(typeof cost.OwningCoverable))
      return sublineTypeFor(cost.OwningCoverable)

    if(SublineCoverables.contains(typeof cost.OwningCoverable))
      return sublineSublineTypeFor(cost.OwningCoverable)

    if(LocationCoverables.contains(typeof cost.OwningCoverable))
      return locationSublineTypeFor(cost.OwningCoverable)

    if(ExposureCoverables.contains(typeof cost.OwningCoverable))
      return exposureSublineTypeFor(cost.OwningCoverable)

    if(UnmannedAircraftCoverables.contains(typeof cost.OwningCoverable))
      return unmannedAircraftSublineTypeFor(cost.OwningCoverable)

    return null
  }

  private function sublineTypeFor(coverable: Coverable) : String {
    switch(typeof coverable ){
      case GL7SublineType:
        return coverable.SublineTypeName
      case GL7SublineTypeSchCovItem:
        return coverable.ScheduleCoverage.GL7SublineType.SublineTypeName
      case GL7SublineTypeSchCondItem:
        return coverable.ScheduleCondition.GL7SublineType.SublineTypeName
      case GL7SublineTypeSchExclItem:
        return coverable.ScheduleExclusion.GL7SublineType.SublineTypeName
      default:
        return null
    }
  }

  private function sublineSublineTypeFor(coverable: Coverable) : String {
    switch(typeof coverable ){
      case GL7Subline:
        return coverable.SublineTypeName
      case GL7SublineSchedCovItem:
        return coverable.ScheduleCoverage.GL7Subline.SublineTypeName
      case GL7SublineSchedCondItem:
        return coverable.ScheduleCondition.GL7Subline.SublineTypeName
      case GL7SublineSchedExclItem:
        return coverable.ScheduleExclusion.GL7Subline.SublineTypeName
      default:
        return null
    }
  }

  private function locationSublineTypeFor(coverable: Coverable) : String {
    switch(typeof coverable ){
      case GL7Location:
        return coverable.SublineTypeName
      case GL7LocationSchedCovItem:
        return coverable.ScheduleCoverage.GL7Location.SublineTypeName
      case GL7LocationSchedCondItem:
        return coverable.ScheduleCondition.GL7Location.SublineTypeName
      case GL7LocationSchedExclItem:
        return coverable.ScheduleExclusion.GL7Location.SublineTypeName
      default:
        return null
    }
  }

  private function exposureSublineTypeFor(coverable: Coverable) : String {
    switch(typeof coverable ){
      case GL7Exposure:
        return coverable.SublineTypeName
      case GL7ExposureSchedCovItem:
        return coverable.ScheduleCoverage.GL7Exposure.SublineTypeName
      case GL7ExposureSchedCondItem:
        return coverable.ScheduleCondition.GL7Exposure.SublineTypeName
      case GL7ExposureSchedExclItem:
        return coverable.ScheduleExclusion.GL7Exposure.SublineTypeName
      default:
        return null
    }
  }

  private function unmannedAircraftSublineTypeFor(coverable: Coverable) : String {
    switch(typeof coverable ){
      case GL7UnmannedAircraft:
        return coverable.Exposure.SublineTypeName
      default:
        return null
    }
  }

  private property get SublineTypeCoverables() : java.util.ArrayList {
    return {
        GL7SublineType,
        GL7SublineTypeSchCovItem,
        GL7SublineTypeSchCondItem,
        GL7SublineTypeSchExclItem
    }
  }

  private property get SublineCoverables() : java.util.ArrayList {
    return {
        GL7Subline,
        GL7SublineSchedCovItem,
        GL7SublineSchedCondItem,
        GL7SublineSchedExclItem
    }
  }

  private property get LocationCoverables() : java.util.ArrayList {
    return {
        GL7Location,
        GL7LocationSchedCovItem,
        GL7LocationSchedCondItem,
        GL7LocationSchedExclItem
    }
  }  

  private property get ExposureCoverables() : java.util.ArrayList {
    return {
        GL7Exposure,
        GL7ExposureSchedCovItem,
        GL7ExposureSchedCondItem,
        GL7ExposureSchedExclItem
    }
  }

  private property get UnmannedAircraftCoverables() : java.util.ArrayList {
    return {
        GL7UnmannedAircraft
    }
  }

  function costDisplayName(cost : GL7Cost) : String {
    return _util.CostDisplayName(cost)
  }

  property get PreferredCurrency() : Currency {
    return _period.PreferredSettlementCurrency
  }

  function hasDisplayableCosts(costs: List<GL7Cost>) : boolean {
    var typesOfCosts = costs.map( \ cost -> typeof cost)
    return !(_period.Job typeis Audit) or
        (_period.Job typeis Audit and typesOfCosts.contains(GL7ExposureCovCost))
  }

  function isCostVisible(cost: GL7Cost) : boolean {
    return !(_period.Job typeis Audit) or
        (_period.Job typeis Audit and cost typeis GL7ExposureCovCost and cost.CoverageCategory == GL7Category.EXPOSURE_STANDARD_COVERAGE.PublicID)
  }
}