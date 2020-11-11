package gw.lob.common.util

uses gw.lob.common.dependency.EffectiveJurisdictionCriteria

class StateProperty<T>{
  static final var COUNTRY_WIDE = "CW"

  var _jurisdictionToStateProperties = new HashMap<String, List<InternalStateProperty<T>>>()

  function addStateValue(value: T, jurisdiction: String = COUNTRY_WIDE, effDate: Date = null, expDate: Date = null, available: boolean = true) {
    var properties = _jurisdictionToStateProperties.get(jurisdiction)
    if (properties == null) {
      properties = {}
      _jurisdictionToStateProperties.put(jurisdiction, properties)
    }

    properties.add(new InternalStateProperty<T>(value, jurisdiction, effDate, expDate, available))
  }

  function hasStateValue(criteria: EffectiveJurisdictionCriteria) : boolean {
    var stateValue = findStateProperty(criteria)
    return stateValue != null && stateValue.isAvailable()
  }

  function getStateOrCWValue(criteria: EffectiveJurisdictionCriteria) : T {
    var stateProperty = findStateProperty(criteria) ?: findStateProperty(new EffectiveJurisdictionCriteria (COUNTRY_WIDE, criteria.Date))
    return stateProperty?.isAvailable() ? stateProperty.Value : null;
  }

  function getStateAndCWValue(criteria: EffectiveJurisdictionCriteria) : List<T> {
    var results = new ArrayList<T>()

    if (hasStateValue(criteria)) {
      results.add(findStateProperty(criteria).Value)
    }

    var cwCriteria = new EffectiveJurisdictionCriteria (COUNTRY_WIDE, criteria.Date)
    if (hasStateValue(cwCriteria)) {
      results.add(findStateProperty(cwCriteria).Value)
    }

    return results
  }

  function isPropertyDefined(criteria : EffectiveJurisdictionCriteria) : boolean {
    return _jurisdictionToStateProperties.get(criteria.Jurisdiction).HasElements
      or _jurisdictionToStateProperties.get(COUNTRY_WIDE).HasElements
  }

  private function findStateProperty(criteria : EffectiveJurisdictionCriteria) : InternalStateProperty<T> {
    var stateProperties = _jurisdictionToStateProperties.get(criteria.Jurisdiction)

    return stateProperties?.where(\stateProperty -> stateProperty.isValid(criteria))?.sortByDescending(\stateProperty -> stateProperty._effDate)?.first()
  }

  /**
   * Internal data structure to store state property
   */
  static class InternalStateProperty<S>{
    var _value: S as readonly Value
    var _jurisdiction: String
    var _effDate: Date
    var _expDate: Date
    var _available: boolean

    construct(value: S, jurisdiction: String, effDate: Date = null, expDate: Date = null, available: boolean = true) {
      _value = value
      _jurisdiction = jurisdiction
      _effDate = effDate?.trimToMidnight()
      _expDate = expDate?.trimToMidnight()
      _available = available

    }

    function isValid(filter: EffectiveJurisdictionCriteria): boolean {
      return _jurisdiction == filter.Jurisdiction && (filter.Date == null || filter.Date.isBetweenDates(_effDate, _expDate))
    }

    function isAvailable(): boolean {
      return _available
    }
  }
}