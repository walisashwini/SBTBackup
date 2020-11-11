package gw.lob.gl7.financials

uses entity.GL7Cost
uses entity.GL7StatRecord
uses gw.api.domain.Schedule
uses gw.lob.gl7.presenters.GL7PresenterHelpers
uses gw.lob.gl7.presenters.GL7PresenterUtil
uses gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter
uses gw.pl.persistence.core.Key
uses gw.util.AutoMap
uses gw.util.Pair

uses java.math.BigDecimal

class GL7QuoteDisplayUtil implements GL7PresenterHelpers {
  var _line : entity.GL7GeneralLiabilityLine
  var _costsByCbl : Map<Coverable, List<GL7Cost>> as CostByCoverable
  var _cblsWithCostsByType : Map<gw.lang.reflect.IType, List<Coverable>> as CoverablesWithCostsByType    // Window mode entities: Last version of each coverable and all costs

  var _costsBySublineType : Map<GL7SublineType, List<GL7Cost>>
  var _costsBySubline : Map<GL7Subline, List<GL7Cost>>
  var _costsByLocation : Map<GL7Location, List<GL7Cost>>
  var _costsByExposure : Map<GL7Exposure, List<GL7Cost>>
  var _costsByUnmannedAircraftCoverage : Map<String, BigDecimal>

  var _allCostsBySublineType : Map<GL7SublineType, List<GL7Cost>>
  var _allCostsBySubline : Map<GL7Subline, List<GL7Cost>>
  var _allCostsByLocation : Map<GL7Location, List<GL7Cost>>
  var _allCostsByExposure : Map<GL7Exposure, List<GL7Cost>>
  var _allCostsBySchedule : Map<Schedule, List<GL7Cost>>

  var _allCostsByUnmannedAircraft : Map<GL7UnmannedAircraft, List<GL7Cost>>
  var _allUnmannedAircrafts: List<GL7UnmannedAircraft> as AllUnmannedAircrafts
  var _unmannedAircraftByLocation: Map<PolicyLocation, List<GL7UnmannedAircraft>>

  var _schedulesByCbl : Map<Coverable, Set<Schedule>>
  var _allSortedSublineTypes : List<entity.GL7SublineType> as SortedSublineTypes

  var _exposuresByLocation : Map<GL7Location, List<GL7Exposure>>
  var _locationsByJurisdiction : Map<Jurisdiction, List<GL7Location>> as LocationsByJurisdiction

  construct(line : entity.GL7GeneralLiabilityLine) {
    _line = line
    initCosts()
  }

  private function initCosts() {
    var allCosts = _line.VersionList.GL7Costs.allVersionsFlat<GL7Cost>()
    var unmannedAircraftToLocationMap = new AutoMap<GL7UnmannedAircraft, PolicyLocation>(\key -> null)
    _costsByCbl = allCosts.partition<Coverable>(\ cost -> cost.getSlice(cost.EffDate).OwningCoverable
        .VersionListUntyped.AllVersionsUntyped.last() as Coverable )
    _cblsWithCostsByType = _costsByCbl.Keys.toList().partition(\cbl -> (typeof cbl))

    _costsBySublineType = {}
    _costsBySubline = {}
    _costsByLocation = {}
    _costsByExposure = {}
    _costsByUnmannedAircraftCoverage = {}

    _allCostsBySublineType = new AutoMap<GL7SublineType, List<GL7Cost>>(\key -> {return {}})
    _allCostsBySubline = new AutoMap<GL7Subline, List<GL7Cost>>(\key -> {return {}})
    _allCostsByExposure = new AutoMap<GL7Exposure, List<GL7Cost>>(\key -> {return {}})
    _allCostsByLocation = new AutoMap<GL7Location, List<GL7Cost>>(\key -> {return {}})
    _allCostsBySchedule = new AutoMap<Schedule, List<GL7Cost>>(\key -> {return {}})
    _allCostsByUnmannedAircraft = new AutoMap<GL7UnmannedAircraft, List<GL7Cost>>(\key -> {return {}})
    _schedulesByCbl = new AutoMap<Coverable, Set<Schedule>>(\key -> {return {}})
    _allSortedSublineTypes = GL7PresenterUtil.sortSublineTypes(_line.VersionList.GL7SublineTypes.allVersionsFlat<GL7SublineType>().toList())
    _allUnmannedAircrafts = {}

    _line.GL7SublineTypes.each(\sublineType -> {
      _costsBySublineType.put(sublineType, sublineType.Coverages*.Costs.toList())
      _costsBySublineType.get(sublineType).addAll(sublineType.Conditions*.Costs.toList())
      _costsBySublineType.get(sublineType).addAll(sublineType.Exclusions*.Costs.toList())
    })
    _costsByCbl.filterByKeys( \ k -> k typeis GL7SublineType).eachKeyAndValue(\k, val -> _allCostsBySublineType.put(k as GL7SublineType, val))

    _line.GL7SublineTypes*.Sublines.each(\subline -> {
      _costsBySubline.put(subline, subline.Coverages*.Costs.toList())
      _costsBySubline.get(subline).addAll(subline.Conditions*.Costs.toList())
      _costsBySubline.get(subline).addAll(subline.Exclusions*.Costs.toList())
    })
    _costsByCbl.filterByKeys( \ k -> k typeis GL7Subline).eachKeyAndValue(\k, val -> _allCostsBySubline.put(k as GL7Subline, val))

    _line.GL7SublineTypes*.Locations.each(\location -> {
      _costsByLocation.put(location, location.Coverages*.Costs.toList())
      _costsByLocation.get(location).addAll(location.Conditions*.Costs.toList())
      _costsByLocation.get(location).addAll(location.Exclusions*.Costs.toList())
    })
    _costsByCbl.filterByKeys( \ k -> k typeis GL7Location).eachKeyAndValue(\k, val -> _allCostsByLocation.put(k as GL7Location, val))

    _line.GL7SublineTypes*.Locations*.GL7Exposures.each(\exposure -> {
      _costsByExposure.put(exposure, exposure.Coverages*.Costs.toList())
      _costsByExposure.get(exposure).addAll(exposure.Conditions*.Costs.toList())
      _costsByExposure.get(exposure).addAll(exposure.Exclusions*.Costs.toList())
    })
    _costsByCbl.filterByKeys( \ k -> k typeis GL7Exposure).eachKeyAndValue(\k, val -> _allCostsByExposure.put(k as GL7Exposure, val))

    _exposuresByLocation = _allCostsByExposure.Keys.toList().partition<GL7Location>(\ exp -> exp.GL7Location)
    _locationsByJurisdiction = _exposuresByLocation.Keys.toList().partition<Jurisdiction>(\ location -> location.CoverableState)

    _costsByCbl.Keys.whereTypeIs(ScheduledItem).each(\schedItem -> {
      buildSchedCosts(schedItem)
    })

    // need to do this as the GL7Location/PolicyLocation property on UnmannedAircraft is null if deleted regardless of
    // Window mode
    _allCostsByExposure.Keys.each(\exposure -> {
      if (exposure.UnmannedAircrafts.HasElements) {
        exposure.UnmannedAircrafts.each(\unmannedAircraft -> {
          unmannedAircraftToLocationMap.put(unmannedAircraft, exposure.GL7Location.PolicyLocation)
        })
      }
    })

    _allUnmannedAircrafts = _line.GL7UnmannedAircraftsWM.toList()

    var costsByUnmannedAircrafts = _costsByCbl.filterByKeys(\k -> k typeis GL7UnmannedAircraft and _allUnmannedAircrafts*.FixedId.contains(k.FixedId))
    costsByUnmannedAircrafts.eachKeyAndValue(\k, costs -> {
      _allCostsByUnmannedAircraft.put(k as GL7UnmannedAircraft, costs)
      costs.each(\cost -> {
        var covName = cost.Coverage.DisplayName
        _costsByUnmannedAircraftCoverage.put(covName, _costsByUnmannedAircraftCoverage.getOrDefault(covName, 0) + cost.ActualAmount.Amount)
      })
    })
    _unmannedAircraftByLocation = _allCostsByUnmannedAircraft.Keys.toList().partition<PolicyLocation>(\unmannedAircraft -> {
      return unmannedAircraft?.Exposure?.GL7Location.PolicyLocation != null? unmannedAircraft.Exposure.GL7Location.PolicyLocation: unmannedAircraftToLocationMap.get(unmannedAircraft)
    })
  }

  private function buildSchedCosts(schedItem : ScheduledItem) {
    var effDatedSchedItem = schedItem as EffDated
    var sched = (effDatedSchedItem.getSliceUntyped(effDatedSchedItem.EffectiveDate) as ScheduledItem).ScheduleParent

    var schedAsClause = sched as Clause
    schedAsClause = schedAsClause.getSliceUntyped(schedAsClause.EffectiveDate) as Clause

    var schedulesByCbl = _schedulesByCbl.get(schedAsClause.OwningCoverable)
    schedulesByCbl.add(sched)

    var allCostList = _allCostsBySchedule.get(sched)
    var schedItemCosts = _costsByCbl.get(schedItem)
    if (schedItemCosts.HasElements) {
      allCostList.addAll(schedItemCosts)
    }
  }

  function sumCostForSublines() : BigDecimal {
    var amount : BigDecimal = 0
    amount += _allCostsBySublineType.Values.flatten().sum(\ cost -> cost.ActualAmount.Amount)
    _allCostsBySublineType.Keys.each(\ sublnType -> {
      amount += getCostsForSchedules(getSchedules(sublnType)).sum(\cost -> cost.ActualAmount.Amount)
    })

    amount += _allCostsBySubline.Values.flatten().sum(\ cost -> cost.ActualAmount.Amount)
    _allCostsBySubline.Keys.each(\ subline -> {
      amount += getCostsForSchedules(getSchedules(subline)).sum(\ cost -> cost.ActualAmount.Amount)
    })
    return amount
  }

  function sumCostForJurisdiction(jurisdiction : Jurisdiction) : BigDecimal {
    var stateAmount : BigDecimal = 0
    _locationsByJurisdiction.get(jurisdiction).each(\ location -> {
      stateAmount += _allCostsByLocation.get(location).sum(\ cost -> cost.ActualAmount.Amount)
      stateAmount += getCostsForSchedules(getSchedules(location)).sum(\ cost -> cost.ActualAmount.Amount)
      stateAmount += sumExposureCostsForLocation(location)
    })
    return stateAmount
  }

  function sumExposureCostsForLocation(location: GL7Location) : BigDecimal {
    var expAmount = BigDecimal.ZERO
    _exposuresByLocation.get(location).each(\ exp -> {
      var exposureCosts = _allCostsByExposure.get(exp)
      expAmount += exposureCosts.sum(\ cost -> cost.ActualAmount.Amount)
      expAmount += getCostsForSchedules(getSchedules(exp)).sum(\ cost -> cost.ActualAmount.Amount)
    })
    return expAmount
  }

  property get JurisdictionsWithLocations () : List<Jurisdiction> {
    return _locationsByJurisdiction.Keys.toList()
  }

  property get HasSublineCosts() : boolean {
    return _allCostsBySubline.entrySet().hasMatch(\entry -> entry.Value.HasElements)
        or _costsByCbl.keySet().hasMatch(\key -> key typeis GL7SublineSchedExclItem)
  }

  function getSublinesByJurisdiction(jurisdiction : Jurisdiction) : List<GL7Subline> {
    var sublines = AllSublines.toList().where( \ subline -> subline.Jurisdiction == jurisdiction)
    return GL7PresenterUtil.orderBySubline(sublines, \subline -> subline.SublineTypeName)
  }

  private property get AllSublines() : GL7Subline[] {
    var retMap = new HashMap<Key, GL7Subline>()

    _allSortedSublineTypes.each( \ sType -> {
      sType.VersionList.Sublines.allVersionsFlat<GL7Subline>().each( \ sLine -> {
        retMap.put(sLine.FixedId, sLine)
      })
    })

    return retMap.Values.toTypedArray()
  }

  function getLocationsByJurisdictionAndSubline(jurisdiction: Jurisdiction, subline: String) : List<GL7Location> {
    return _locationsByJurisdiction.get(jurisdiction).sortBy(\ loc -> loc.DisplayName)
        .where( \ location -> location.SublineType.Subline == subline)
        .sortBy(\ location -> location.Location.LocationNum)
  }

  function getExposuresByLocation(location: GL7Location) : List<GL7Exposure> {
    return _exposuresByLocation.get(location)?.sortBy(\ exp -> exp.DomainModel.ClassCode)
  }

  property get hasUnmannedAircraft() : boolean {
    return _allUnmannedAircrafts.HasElements
  }

  function getUnmannedAircraftsByLocation(location : PolicyLocation) : List<GL7UnmannedAircraft> {
    if(!hasUnmannedAircraft) return {}
    return _unmannedAircraftByLocation.get(location)?.sortBy(\unmannedAircraft -> unmannedAircraft.UnmannedAircraftNumber)
  }

  property get LocationsFromUnmannedAircrafts() : List<PolicyLocation> {
    if(!hasUnmannedAircraft) return {}
    return _unmannedAircraftByLocation.Keys.toList()
        .sortBy(\location -> location.LocationNum)
  }

  function getUnmannedAircraftDescription(unmannedAircraft : GL7UnmannedAircraft) : String {
    return GL7UnmannedAircraftPresenter.getUnmannedAircraftDescription(unmannedAircraft)
  }

  property get SumUnmannedAircraftCosts() : BigDecimal {
    var amount = BigDecimal.ZERO
    _allCostsByUnmannedAircraft.Values.each(\costs -> {
      amount += costs.sum(\cost -> cost.ActualAmount.Amount)
    })
    return amount
  }

  function isBefore(c1 : GL7Cost, c2 : GL7Cost) : Boolean {
    if (c1.Description == c2.Description) {
      if (c1.EffectiveDate == c2.EffectiveDate) {
        if (c1.ExpDate == c2.ExpDate) {
          return false
        } else {
          return c1.ExpDate.before(c2.ExpDate)
        }
      } else {
        return c1.EffectiveDate.before(c2.EffectiveDate)
      }
    } else {
      return c1.Description < c2.Description
    }
  }

  function getSortedCostsBySublineType(sublineType : GL7SublineType) : List<GL7Cost> {
    return _allCostsBySublineType.get(sublineType)?.sort(\ c1, c2 -> isBefore(c1, c2))
  }

  function getSortedCostsBySubline(subline : GL7Subline) : List<GL7Cost> {
    return _allCostsBySubline.get(subline)?.sort(\ c1, c2 -> isBefore(c1, c2))
  }

  function getSortedCostsByLocation(location : GL7Location) : List<GL7Cost> {
    return _allCostsByLocation.get(location)?.sort(\ c1, c2 -> isBefore(c1, c2))
  }

  function getSortedCostsByExposure(exposure : GL7Exposure) : List<GL7Cost> {
    return _allCostsByExposure.get(exposure)?.sort(\ c1, c2 -> isBefore(c1, c2))
  }

  function getSortedCostsByUnmannedAircraft(unmannedAircraft: GL7UnmannedAircraft) : List<GL7Cost> {
    return _allCostsByUnmannedAircraft.get(unmannedAircraft)?.sort(\ c1, c2 -> isBefore(c1, c2))
  }

  property get UnmannedAircraftCostByCoverage() : List<Pair<String, BigDecimal>> {
    var costByCoverage : List<Pair<String, BigDecimal>> = {}
    _costsByUnmannedAircraftCoverage.Keys.each(\covName -> {
      costByCoverage.add(new Pair(covName, _costsByUnmannedAircraftCoverage.get(covName)))
    })
    return costByCoverage?.where(\pair -> pair.Second != 0).sortBy(\pair -> pair.First)
  }

  function getClassDescription(cost : GL7Cost) : String {
    var slicedCost = cost.getSlice(cost.EffectiveDate)
    if (slicedCost.OwningCoverable typeis GL7Exposure) {
      return slicedCost.OwningCoverable.DomainModel.ClassDescription
    } else if (slicedCost.OwningCoverable typeis GL7UnmannedAircraft) {
      return slicedCost.OwningCoverable.Exposure.DomainModel.ClassDescription
    }else if (slicedCost.OwningCoverable typeis ScheduledItem) {
      return getClassDescription(slicedCost.OwningCoverable.ScheduleParent)
    }
    return null
  }

  function getClassDescription(sched : Schedule) : String {
    if (sched typeis Clause) {
      var covrbl = sched.OwningCoverable
      if (covrbl typeis GL7Exposure) {
        return covrbl.DomainModel.ClassDescription
      }
    }
    return null
  }

  function scheduleCostsForCoverable(coverable: Coverable) : List<GL7Cost> {
    var scheduleCosts: List<GL7Cost> = {}
    getSchedules(coverable).each( \ schedule -> scheduleCosts.addAll(getScheduleCosts(schedule)))
    return scheduleCosts
  }

  static function CostDisplayName(cost : GL7Cost) : String {
    if (cost.Description?.HasContent) {
      return cost.Description
    }

    var cov = cost.Coverage
    if (cov != null) {
      return cov.Pattern.DisplayName
    } else {
      return cost.Subtype.DisplayName
    }
  }

  // For most policy lines, rating will only rerate from the effective date of change forward.  If so, we don't want to allow changes to
  // premium overrides that would affect dates earlier than the effective date of the policy transactions because these would not be
  // properly rerated.  If this policy line is always fully rerated (even for a mid-term change) then you can change this to return false.
  function willRateThisSliceForward() : boolean {
    return true
  }

  function getSchedules(coverable: Coverable) : List<Schedule> {
    var scheduleSet = _schedulesByCbl.get(coverable)
    return scheduleSet.toList().sortBy(\schedule -> schedule.ScheduleName).toList()
  }

  function getScheduleCosts(schedule : Schedule) : List<GL7Cost> {
    var scheduleCosts = _allCostsBySchedule.get(schedule)
    return scheduleCosts.sort(\c1, c2 -> isBefore(c1, c2))
  }

  function getCostsForSchedules(schedules : List<Schedule>) : List<GL7Cost> {
    var costs : List<GL7Cost> = {}
    schedules.each( \ sched -> {
      var schedCosts = getScheduleCosts(sched)
      if (schedCosts.HasElements) {
        costs.addAll(schedCosts)
      }
    })
    return costs.sortBy(\cost -> cost.Description)
  }

  static function combineCosts(schedCost : List<GL7Cost>, costs : List<GL7Cost>) : List<GL7Cost> {
    var retList = new LinkedList<GL7Cost>()
    if (schedCost.HasElements) {
      retList.addAll(schedCost)
    }
    if (costs.HasElements) {
      retList.addAll(costs)
    }
    return retList
  }

  function hasAnyCosts(sublnType : GL7SublineType) : boolean {
    var sublineTypeCosts = getSortedCostsBySublineType(sublnType)
    var hasSublineTypeScheduleCosts = getSchedules(sublnType).map(\sched -> getScheduleCosts(sched).HasElements).fold( \ elt1, elt2 -> elt1 && elt2)
    return sublineTypeCosts.HasElements || hasSublineTypeScheduleCosts
  }

  function costsForClause(clause: Clause): List<GL7Cost> {
    var costs = getClausePropertyByName(clause, "Costs") ?: {}
    return costs as List<GL7Cost>
  }

  function statRecordForClause(clause: Clause) : GL7StatRecord {
    return getClausePropertyByName(clause, "StatRecord") as GL7StatRecord
  }

  private function getClausePropertyByName(clause: Clause, name: String): Object {
    return clause.IntrinsicType.TypeInfo.getProperty(name).Accessor.getValue(clause)
  }

  function sublineHasExposureCosts(sublineTypeName : String) : boolean {
    return _allCostsByExposure.Keys.hasMatch(\exp -> exp.GL7Location.SublineTypeName == sublineTypeName)
  }

}
