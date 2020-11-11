package gw.lob.gl7.financials

uses entity.GL7Cost
uses gw.api.domain.Clause
uses gw.lob.gl7.presenters.GL7PresenterUtil
uses gw.pl.currency.MonetaryAmount
uses gw.pl.persistence.core.Key
uses gw.util.AutoMap
uses typekey.Currency

class GL7TxDisplayUtil {
  var _line : entity.GL7GeneralLiabilityLine
  var _trxnsByCbl : Map<Coverable, List<GL7Transaction>> = {}
  var _cblKeyToCblMap : Map<Key, entity.Coverable> = {}
  var _cblsWithTrxnsByType : Map<gw.lang.reflect.IType, List<Coverable>> = {}

  var _lineTrxns : List<GL7Transaction> = {}
  var _trxnsBySublineType : Map<GL7SublineType, List<GL7Transaction>> = {}
  var _trxnsBySubline : Map<GL7Subline, List<GL7Transaction>> = {}
  var _trxnsByLocation : Map<GL7Location, List<GL7Transaction>> = {}
  var _trxnsByExposure : Map<GL7Exposure, List<GL7Transaction>> = {}
  var _trxnsByUnmannedAircraft: Map<GL7UnmannedAircraft, List<GL7Transaction>> = {}
  var _trxnsBySchedule : Map<ScheduledItem, List<GL7Transaction>> = {}

  var _locationsByJurisdiction : Map<Jurisdiction, List<GL7Location>> = {}
  var _sublinesByJurisdiction : Map<Jurisdiction, List<GL7Subline>> = {}
  var _exposuresByLocation : Map<GL7Location, List<GL7Exposure>> = {}
  var _schedulesByCoverable : Map<Coverable, List<ScheduledItem>> = {}

  construct(line : entity.GL7GeneralLiabilityLine) {
    _line = line
    initTransactions()
  }

  private function initTransactions() {
    _cblsWithTrxnsByType = new AutoMap<gw.lang.reflect.IType, List<Coverable>> (\key -> {return {}})
    _trxnsBySublineType = new AutoMap<GL7SublineType, List<GL7Transaction>> (\key -> {return {}})
    _trxnsBySubline = new AutoMap<GL7Subline, List<GL7Transaction>> (\key -> {return {}})
    _trxnsByLocation = new AutoMap<GL7Location, List<GL7Transaction>> (\key -> {return {}})
    _trxnsByExposure = new AutoMap<GL7Exposure, List<GL7Transaction>> (\key -> {return {}})
    _trxnsByUnmannedAircraft = new AutoMap<GL7UnmannedAircraft, List<GL7Transaction>> (\key -> {return {}})
    _trxnsBySchedule = new AutoMap<ScheduledItem, List<GL7Transaction>> (\key -> {return {}})

    _locationsByJurisdiction = new AutoMap<Jurisdiction, List<GL7Location>> (\key -> {return {}})
    _sublinesByJurisdiction = new AutoMap<Jurisdiction, List<GL7Subline>> (\key -> {return {}})
    _exposuresByLocation = new AutoMap<GL7Location, List<GL7Exposure>> (\key -> {return {}})
    _schedulesByCoverable = new AutoMap<Coverable, List<ScheduledItem>> (\key -> {return {}})

    var allTrxns = _line.Transactions
    // The next part is tricky because offset Transactions will point to costs in a prior version of the policy and thus to a different
    // version of the Coverable, too.  We need to get all of the Transactions that point to the same Coverable across branches (i.e. by Fixed ID)
    // and group them together linked to the latest version of that Coverable.
    _cblKeyToCblMap = allTrxns.map(\ trxn -> {
      // Map from Transaction to Coverable
      var cost = trxn.Cost as GL7Cost
      return cost.getSlice(cost.EffDate).OwningCoverable
    })
        // Group all the Coverables by Fixed ID
        .partition(\ cbl -> cbl.FixedId)
        // We want to sort the list in reverse so that the latest branch is first, and within each
        // branch, the latest version by eff date is first.  Then we'll use the first in that sorted list.
        // - when cbl1 is from a later branch than than cbl2, sort it first
        // - when cbl1 is from an earlier branch than than cbl2, sort it after
        // - when they are from the same branch, so sort based on effective date
        .mapValues( \ list -> list.orderByDescending(\ cbl -> cbl.BranchUntyped.CreateTime)
                                  .thenByDescending(\ cbl -> cbl.EffectiveDate)
                                  .first())

    // The result of all this is a map of FixedIDs to the version of the Coverable that should be used for all those with that Fixed ID.

    // Now map all the transactions to coverables using the FixedID --> representing Coverable map we just created
    allTrxns.toList()
        .partition<Coverable>(\ trxn -> {
          var cost = trxn.Cost as GL7Cost
          return _cblKeyToCblMap.get(cost.getSlice(cost.EffDate).OwningCoverable.FixedId)
        })
        .eachKeyAndValue( \ cbl, trxns -> {
          cbl = cbl.getSliceUntyped(cbl.EffectiveDate) as Coverable
          switch(true) {
            case cbl typeis GL7GeneralLiabilityLine:
              _lineTrxns = trxns.cast(GL7Transaction)
              break
            case cbl typeis GL7SublineType:
              _trxnsBySublineType.put(cbl as GL7SublineType, trxns.cast(GL7Transaction))
              break
            case cbl typeis GL7Subline:
                _trxnsBySubline.put(cbl as GL7Subline, trxns.cast(GL7Transaction))
                mapSublineToSublineType(cbl as GL7Subline)
                break
            case cbl typeis GL7Location:
                _trxnsByLocation.put(cbl as GL7Location, trxns.cast(GL7Transaction))
                mapLocationToSublineType(cbl as GL7Location)
                mapLocationToSubline(cbl as GL7Location)
                break
            case cbl typeis GL7Exposure:
                _trxnsByExposure.put(cbl as GL7Exposure, trxns.cast(GL7Transaction))
                var locationVersion = mapExposureItemToLocation(cbl as GL7Exposure)
                mapLocationToSublineType(locationVersion)
                mapLocationToSubline(locationVersion)
                break
            case cbl typeis GL7UnmannedAircraft:
                _trxnsByUnmannedAircraft.put(cbl as GL7UnmannedAircraft, trxns.cast(GL7Transaction))
                break
            case cbl typeis ScheduledItem:
                _trxnsBySchedule.put((cbl as ScheduledItem), trxns.cast(GL7Transaction))
                mapScheduledItemToCoverable(cbl as ScheduledItem)
                break
            default:
              break
          }
        })

    // Partition coverables by type, making unique set of them first
    var cblsWithTrxnsByType = _cblKeyToCblMap.Values.toSet().toList().partition(\ cbl -> (typeof cbl))
    cblsWithTrxnsByType.eachKeyAndValue( \ k, val -> _cblsWithTrxnsByType.put(k, val))

    var locationsByJurisdiction = _cblsWithTrxnsByType.get(GL7Location).cast(GL7Location).partition<Jurisdiction>( \ loc -> loc.Jurisdiction)
    locationsByJurisdiction.eachKeyAndValue( \ k, val -> _locationsByJurisdiction.put(k, val))

    var sublinesByJurisdiction = _cblsWithTrxnsByType.get(GL7Subline).cast(GL7Subline).partition<Jurisdiction>( \ subl -> subl.Jurisdiction)
    sublinesByJurisdiction.eachKeyAndValue( \ jur, sublines -> {
      var sortedSublines = GL7PresenterUtil.orderBySubline(sublines, \sub -> sub.SublineTypeName)
      _sublinesByJurisdiction.put(jur, sortedSublines)})

    var exposuresByLocation = _cblsWithTrxnsByType.get(GL7Exposure).cast(GL7Exposure).partition<GL7Location>( \ exp -> _cblKeyToCblMap.get(exp.GL7Location.FixedId) as GL7Location)
    exposuresByLocation.eachKeyAndValue( \ k, val -> _exposuresByLocation.put(k, val))
  }

  /**
   * UTILITY FUNCTIONS TO BUILD COVERABLE HIERARCHY FOR DISPLAY
   */

  /**
   * Maps source exposure to its parent location in a unified location version domain used in the Display Util. If
   * the location does not yet exist in the domain, its last version is added for next references.
   * @param exposure source exposure coverable
   * @return unified location version
   */
  function mapExposureItemToLocation(exposure: GL7Exposure): GL7Location {
    if(_cblKeyToCblMap.containsKey(exposure.GL7Location.FixedId)) {
      return _cblKeyToCblMap.get(exposure.GL7Location.FixedId) as GL7Location
    } else {
      var lastVersion = exposure.GL7Location.VersionList.AllVersions.last();
      lastVersion = lastVersion.getSlice(lastVersion.EffectiveDate)
      _cblKeyToCblMap.put(exposure.GL7Location.FixedId, lastVersion)
      return lastVersion
    }
  }

  /**
   * Maps source subline to its parent subline type in a unified subline type version domain used in the Display Util. If
   * the subline type does not yet exist in the domain, its last version is added for next references.
   * @param subline source subline coverable
   * @return unified subline type version
   */
  function mapSublineToSublineType(subline: GL7Subline): GL7SublineType {
    if(_cblKeyToCblMap.containsKey(subline.SublineType.FixedId)) {
      return _cblKeyToCblMap.get(subline.SublineType.FixedId) as GL7SublineType
    } else {
      var lastVersion = subline.SublineType.VersionList.AllVersions.last()
      lastVersion = lastVersion.getSlice(lastVersion.EffectiveDate)
      _cblKeyToCblMap.put(subline.SublineType.FixedId, lastVersion)
      return lastVersion
    }
  }

  /**
   * Maps source location to its parent subline type in a unified subline type version domain used in the Display Util. If
   * the subline type does not yet exist in the domain, its last version is added for next references.
   * @param location source location coverable
   * @return unified subline type version
   */
  function mapLocationToSublineType(location: GL7Location): GL7SublineType {
    if(_cblKeyToCblMap.containsKey(location.SublineType.FixedId)) {
      return _cblKeyToCblMap.get(location.SublineType.FixedId) as GL7SublineType
    } else {
      var lastVersion = location.SublineType.VersionList.AllVersions.last()
      lastVersion = lastVersion.getSlice(lastVersion.EffectiveDate)
      _cblKeyToCblMap.put(location.SublineType.FixedId, lastVersion)
      return lastVersion
    }
  }

  /**
   * Maps source location to the matching subline coverable in a unified subline version domain used in the Display Util. If
   * the subline does not yet exist in the domain, its last version is added for next references.
   * @param location source location coverable
   * @return unified subline version
   */
  function mapLocationToSubline(location: GL7Location): GL7Subline {
    var subline = location.SublineType.VersionList.Sublines.allVersionsFlat<GL7Subline>().firstWhere( \ sl -> sl.Jurisdiction == location.Jurisdiction and sl.SublineType.FixedId == location.SublineType.FixedId)
    if(subline != null) {
      if(_cblKeyToCblMap.containsKey(subline.FixedId)) {
        return _cblKeyToCblMap.get(subline.FixedId) as GL7Subline
      } else {
        var lastVersion = subline.VersionList.AllVersions.last()
        lastVersion = lastVersion.getSlice(lastVersion.EffectiveDate)
        _cblKeyToCblMap.put(subline.FixedId, lastVersion)
        return lastVersion
      }
    }
    return null;
  }

  /**
   * TODO: describe hierarchy mapping
   * @param
   * @return
   */
  function mapScheduledItemToCoverable(schedItem: ScheduledItem) {
    var cbl: Coverable
    var scheduledItemCoverable: Coverable
    if(schedItem.ScheduleParent typeis Clause) {
      scheduledItemCoverable = schedItem.ScheduleParent.OwningCoverable
    } else {
      // cannot determine schedule's owning coverable, leave schedule item without mapped parent
      return
    }

    // Schedule's parent coverable has no transaction on its own, let's add it to the map
    if(_cblKeyToCblMap.containsKey(scheduledItemCoverable.FixedId)) {
      cbl = _cblKeyToCblMap.get(scheduledItemCoverable.FixedId)
    } else {
      var lastVersion = scheduledItemCoverable.VersionListUntyped.AllVersionsUntyped.last() as Coverable
      _cblKeyToCblMap.put(scheduledItemCoverable.FixedId, lastVersion)
      cbl = lastVersion
    }
    if(_schedulesByCoverable.containsKey(cbl)) {
      _schedulesByCoverable.get(cbl).add(schedItem)
    } else {
      _schedulesByCoverable.put(cbl, { schedItem })
    }
    if(cbl typeis GL7Exposure) {
      var locationVersion = mapExposureItemToLocation(cbl)
      mapLocationToSublineType(locationVersion)
      mapLocationToSubline(locationVersion)
    } else if (cbl typeis GL7Location) {
      mapLocationToSublineType(cbl)
      mapLocationToSubline(cbl)
    } else if (cbl typeis GL7Subline) {
      mapSublineToSublineType(cbl)
    }
  }

  /**
   * UTILITY FUNCTIONS TO BUILD COVERABLE HIERARCHY FOR DISPLAY
   */

  /**
   * @return subline types to display
   */
  property get SublineTypes() : List<GL7SublineType> {
    return _cblsWithTrxnsByType.get(GL7SublineType).cast(GL7SublineType)
  }

  property get JurisdictionsWithLocations() : List<Jurisdiction> {
    return _locationsByJurisdiction.Keys.toList()
  }

  property get HasCostChangeDetails() : boolean {
    return _cblsWithTrxnsByType.entrySet().hasMatch( \ e -> e.Value.HasElements)
  }

  property get HasSublineTypeTrxns() : boolean {
    return _trxnsBySublineType.entrySet().hasMatch( \ entry -> entry.Value.HasElements)
  }

  property get HasSublineTrxns() : boolean {
    return _trxnsBySubline.entrySet().hasMatch( \ entry -> entry.Value.HasElements)
  }

  function sublineTrxnsForJurisdiction(jurisdiction: Jurisdiction) : boolean {
    return _trxnsBySubline.entrySet().hasMatch( \ entry -> entry.Key.Jurisdiction == jurisdiction and entry.Value.HasElements)
  }

  property get HasExposureTrxns() : boolean {
    return _trxnsByExposure.entrySet().hasMatch( \ entry -> entry.Value.HasElements)
  }

  function getLocationsByJurisdictionAndSubline(jurisdiction: Jurisdiction, subline: String) : List<GL7Location> {
    return _locationsByJurisdiction.get(jurisdiction).sortBy(\ loc -> loc.DisplayName)
        .where( \ location -> location.SublineType.Subline == subline)
        .sortBy(\ location -> location.Location.LocationNum)
  }

  function getSublinesByJurisdiction(jurisdiction : Jurisdiction) : List<GL7Subline> {
    return _sublinesByJurisdiction.get(jurisdiction)
  }

  function getExposuresByLocation(location: GL7Location) : List<GL7Exposure> {
    return _exposuresByLocation.get(location)?.sortBy(\ exp -> exp.DomainModel.ClassCode)
  }

  property get HasUnmannedAircraftTrxns() : boolean {
    return _trxnsByUnmannedAircraft.entrySet().hasMatch( \ entry -> entry.Value.HasElements)
  }

  property get LocationsFromUnmannedAircrafts() : List<GL7Location> {
    if (!HasUnmannedAircraftTrxns) return {}
    var locations : List<GL7Location> = {}
    _trxnsByUnmannedAircraft.Keys.each(\unmannedAircraft -> {
      var location = unmannedAircraft.Exposure.GL7Location
      if (!locations*.FixedId.contains(location.FixedId)) {
        locations.add(location)
      }
    })
    return locations.sortBy(\location -> location.Location.LocationNum)
  }

  function getUnmannedAircraftsByLocation(location : GL7Location) : List<GL7UnmannedAircraft> {
    if (!HasUnmannedAircraftTrxns) return {}
    return _trxnsByUnmannedAircraft.Keys.where(\unmannedAircraft -> unmannedAircraft.Exposure.GL7Location.FixedId == location.FixedId)
        .sortBy(\unmannedaircraft -> unmannedaircraft.UnmannedAircraftNumber)
  }

  function getLineLevelTrxns() : List<GL7Transaction> {
    return _lineTrxns
  }

  function getCoverablesWithTrxnsByType() : Map<gw.lang.reflect.IType, List<Coverable>> {
    return _cblsWithTrxnsByType
  }

  function getJurisdictions() : List<Jurisdiction> {
    return _locationsByJurisdiction.Keys
        .toList()
        .orderBy( \ j -> j.DisplayName)
  }

  function getTransactionByExposure(exposure : GL7Exposure) : List<GL7Transaction> {
    return _trxnsByExposure.get(exposure).sortBy(\ trx -> (trx.Cost as GL7Cost).Priority)
  }

  function getScheduledItemsForCoverable(cbl: Coverable): List<ScheduledItem> {
    return _schedulesByCoverable.get(cbl)
  }

  function getSortedTransactionsBySublineType(sublineType: GL7SublineType) : List<GL7Transaction> {
    return _trxnsBySublineType.get(sublineType)
                             ?.orderBy( \ t -> (t.Cost as GL7Cost).Description)
                             ?.thenBy( \ t -> t.EffDate)
                             ?.thenBy( \ t -> t.Proration < 0 ? 1 : 2)
                             ?.thenBy( \ t -> t.ExpDate)
  }

  function getSortedTransactionsBySubline(subline: GL7Subline) : List<GL7Transaction> {
    return _trxnsBySubline.get(subline)
                         ?.orderBy( \ t -> (t.Cost as GL7Cost).Description)
                         ?.thenBy( \ t -> t.EffDate)
                         ?.thenBy( \ t -> t.Proration < 0 ? 1 : 2)
                         ?.thenBy( \ t -> t.ExpDate)
  }

  function getSortedTransactionsByLocation(location: GL7Location) : List<GL7Transaction> {
    return _trxnsByLocation.get(location)
                         ?.orderBy( \ t -> (t.Cost as GL7Cost).Description)
                         ?.thenBy( \ t -> t.EffDate)
                         ?.thenBy( \ t -> t.Proration < 0 ? 1 : 2)
                         ?.thenBy( \ t -> t.ExpDate)
  }

  function getSortedTransactionsByExposure(exposure: GL7Exposure) : List<GL7Transaction> {
    return _trxnsByExposure.get(exposure)
                          ?.orderBy( \ t -> (t.Cost as GL7Cost).Description)
                          ?.thenBy( \ t -> t.EffDate)
                          ?.thenBy( \ t -> t.Proration < 0 ? 1 : 2)
                          ?.thenBy( \ t -> t.ExpDate)
  }

  function getSortedTransactionsByUnmannedAircraft(unmannedAircraft: GL7UnmannedAircraft) : List<GL7Transaction> {
    return _trxnsByUnmannedAircraft.get(unmannedAircraft)
        ?.orderBy( \ t -> (t.Cost as GL7Cost).Description)
        ?.thenBy( \ t -> t.EffDate)
        ?.thenBy( \ t -> t.Proration < 0 ? 1 : 2)
        ?.thenBy( \ t -> t.ExpDate)
  }

  function getSortedTransactionsByScheduledItem(schedItem: ScheduledItem) : List<GL7Transaction> {
    return _trxnsBySchedule.get(schedItem)
        ?.orderBy( \ t -> (t.Cost as GL7Cost).Description)
        ?.thenBy( \ t -> t.EffDate)
        ?.thenBy( \ t -> t.Proration < 0 ? 1 : 2)
        ?.thenBy( \ t -> t.ExpDate)
  }

  function getClassCode(cost : GL7Cost) : String {
    var costSlice = cost.getSlice(cost.EffectiveDate)
    if (costSlice.OwningCoverable typeis GL7Exposure) {
      return costSlice.OwningCoverable.DomainModel.ClassCode
    } else if (costSlice.OwningCoverable typeis GL7UnmannedAircraft) {
      return costSlice.OwningCoverable.Exposure.DomainModel.ClassCode
    } else if (costSlice.OwningCoverable typeis ScheduledItem and costSlice.OwningCoverable.ScheduleParent typeis Clause) {
      var parentCoverable = costSlice.OwningCoverable.ScheduleParent.OwningCoverable
      if(parentCoverable typeis GL7Exposure) {
        return parentCoverable.DomainModel.ClassCode
      }
    }
    return null
  }

  function getClassDescription(cost : GL7Cost) : String {
    var costSlice = cost.getSlice(cost.EffectiveDate)
    if (costSlice.OwningCoverable typeis GL7Exposure) {
      return costSlice.OwningCoverable.DomainModel.ClassDescription
    } else if (costSlice.OwningCoverable typeis GL7UnmannedAircraft) {
      return costSlice.OwningCoverable.Exposure.DomainModel.ClassDescription
    } else if (costSlice.OwningCoverable typeis ScheduledItem and costSlice.OwningCoverable.ScheduleParent typeis Clause) {
      var parentCoverable = costSlice.OwningCoverable.ScheduleParent.OwningCoverable
      if(parentCoverable typeis GL7Exposure) {
        return parentCoverable.DomainModel.ClassDescription
      }
    }
    return null
  }

  static function CostDisplayName(cost : GL7Cost) : String {
    var costSlice = cost.getSlice(cost.EffectiveDate)
    if (costSlice.Description?.HasContent) {
      return costSlice.Description
    }

    var cov = cost.Coverage
    if (cov != null) {
      return cov.Pattern.DisplayName
    } else {
      return cost.Subtype.DisplayName
    }
  }

  /**
   * UTILITY FUNCTIONS TO CALCULATE SUBTOTALS
   */

  /**
   * @param jurisdiction jurisdiction
   * @return subtotal of cost change for given jurisdiction
   */
  function sumTxForJurisdiction(jurisdiction: Jurisdiction) : MonetaryAmount {
    var stateAmount = 0BD.ofCurrency(SettlementCurrency)
    for(location in _locationsByJurisdiction.get(jurisdiction)) {
      stateAmount += _trxnsByLocation.get(location).AmountSum(SettlementCurrency)
      for(schedItem in _schedulesByCoverable.get(location)) {
        var itemTrxns = _trxnsBySchedule.get(schedItem)
        stateAmount += itemTrxns.AmountSum(SettlementCurrency)
      }
      for(exp in _exposuresByLocation.get(location)) {
        stateAmount += _trxnsByExposure.get(exp).AmountSum(SettlementCurrency)
        for(schedItem in _schedulesByCoverable.get(exp)) {
          var itemTrxns = _trxnsBySchedule.get(schedItem)
          stateAmount += itemTrxns.AmountSum(SettlementCurrency)
        }
      }
    }
    return stateAmount
  }

  function sumTxForSublines() : MonetaryAmount {
    var sublineTypeTxnsAmount = _trxnsBySublineType.Values.flatten().AmountSum(SettlementCurrency)
    var sublineTxnsAmount = _trxnsBySubline.Values.flatten().AmountSum(SettlementCurrency)
    var scheduledItemsTxnsAmount = 0BD.ofCurrency(SettlementCurrency)

    var cbls = _trxnsBySublineType.Keys.cast(Coverable)
        .union(_trxnsBySubline.Keys.cast(Coverable))

    for(cbl in cbls) {
      for(schedItem in _schedulesByCoverable.get(cbl)) {
        scheduledItemsTxnsAmount += _trxnsBySchedule.get(schedItem).AmountSum(SettlementCurrency)
      }
    }

    return sublineTypeTxnsAmount + sublineTxnsAmount + scheduledItemsTxnsAmount
  }

  function getTransactionSum(trxns: List<GL7Transaction>): MonetaryAmount {
    return trxns.AmountSum(SettlementCurrency) ?: 0BD.ofCurrency(SettlementCurrency)
  }

  function getScheduledItemTrxnsSum(schedItems: List<ScheduledItem>) : MonetaryAmount {
    var scheduledItemTrxnsSum = 0BD.ofCurrency(SettlementCurrency)

    for(schedItem in schedItems) {
      var itemTrxns = _trxnsBySchedule.get(schedItem)
      scheduledItemTrxnsSum += itemTrxns.AmountSum(SettlementCurrency)
    }

    return scheduledItemTrxnsSum
  }

  function getSubtotal(trxns: List<GL7Transaction>, schedItems: List<ScheduledItem>) : MonetaryAmount {
    return getTransactionSum(trxns) + getScheduledItemTrxnsSum(schedItems)
  }

  property get SettlementCurrency(): Currency {
    return _line.Branch.PreferredSettlementCurrency
  }

  function shouldDisplaySubtotal(trxns: List<GL7Transaction>, schedItems: List<ScheduledItem>): boolean {
    return getTransactionSum(trxns).toNumber() != 0 or getScheduledItemTrxnsSum(schedItems).toNumber() != 0
  }

}
