package gw.lob.common.dependency

class SystemTableQueryData {
  var _paramMap : HashMap<String, String>as readonly ParamMap
  var _jurisdiction : typekey.Jurisdiction as readonly Jurisdiction
  var _referenceDate : Date as readonly ReferenceDate
  var _valueColumnNames : List<String>as readonly ValueColumns

  construct(paramMap : HashMap<String, String>, jurisdiction : typekey.Jurisdiction, referenceDate : Date, valueColumnNames : List<String> = {"Value"}) {
    _paramMap = paramMap
    _jurisdiction = jurisdiction
    _referenceDate = referenceDate
    _valueColumnNames = valueColumnNames
  }

  static function make(currentProperty : PropertyInstanceInfo, dep : PropertyValueDependency, fullRange : boolean = false, scheduledItem : ScheduledItem = null) : SystemTableQueryData {
    var jurisdiction = currentProperty.Jurisdiction
    var paramMap = new HashMap<String, String>()
    var dependsOnMap = dep.getSystemTableDependency(currentProperty.EffectiveJurisdictionCriteria).DependsOn
    if (not fullRange and dependsOnMap != null) {
      dependsOnMap.eachKeyAndValue(\key, depOn -> {
        paramMap.put(key, getKeyValue(currentProperty, depOn, scheduledItem))
      })
    }

    var effectiveDate = currentProperty.EffectiveJurisdictionCriteria.Date
    var valueColumn = dep.getSystemTableDependency(currentProperty.EffectiveJurisdictionCriteria).ValueColumn

    return valueColumn != null ? new (paramMap, jurisdiction, effectiveDate, {valueColumn}) : new (paramMap, jurisdiction, effectiveDate)
  }

  // Get the value the current property depends on
  private static function getKeyValue(currentProperty : PropertyInstanceInfo, depOn : PropertyTypeInfo, scheduledItem : ScheduledItem = null) : String {
    if (depOn.IsCalculated) {
      var valueObject = depOn.ContextType.TypeInfo.getConstructor({}).Constructor.newInstance({}) as CalculatedValue
      return valueObject.calculate(currentProperty.ContextCoverable) as String
    }
    return PropertyPathResolver.getValue(currentProperty, depOn, scheduledItem) as String
  }

  override function equals(obj : Object) : boolean {
    return obj typeis SystemTableQueryData
        and obj._referenceDate == _referenceDate
        and obj._jurisdiction == _jurisdiction
        and obj._valueColumnNames == _valueColumnNames
        and obj._paramMap == _paramMap
  }

  override function hashCode() : int {
    return Objects.hash({_referenceDate, _jurisdiction, _valueColumnNames, _paramMap})
  }
}
