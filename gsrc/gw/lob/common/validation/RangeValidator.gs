package gw.lob.common.validation

uses com.google.common.base.Objects
uses gw.api.locale.DisplayKey
uses gw.lang.reflect.features.BoundPropertyReference
uses gw.lob.common.LobCoverable
uses gw.lob.common.dependency.DependencySystemTableQuery
uses gw.lob.common.dependency.DependencyUtil
uses gw.lob.common.dependency.PropertyInstanceInfo
uses gw.lob.common.dependency.PropertyPathResolver
uses gw.lob.common.dependency.PropertyTypeInfo
uses gw.lob.common.dependency.SystemTableQueryData
uses gw.validation.PCValidationResult

uses java.math.BigDecimal

class RangeValidator extends BaseValidator {
  private var _table : String as Table
  private var _depends : Map<String, String> as Depends

  construct(quoteTime : boolean, table : String, depends : Map<String, String>) {
    _quoteTime = quoteTime
    _table = table
    _depends = depends
  }

  override function equals(other : Object) : boolean {
    if (this === other) {
      return true
    }
    if (other typeis RangeValidator) {
      return _table == other._table &&
          _depends.equals(other._depends) &&
          super.equals(other)

    }
    return false
  }

  override function hashCode() : int {
    return Objects.hashCode({_quoteTime, _table, _depends});
  }

  override function validateProperty(entity : KeyableBean, propName : String, pcValidationResult : PCValidationResult, validationLevel : ValidationLevel) {
    if (!_quoteTime || validationLevel == ValidationLevel.TC_QUOTABLE) {
      var propValue : BigDecimal
      var propDisplayName : String
      var coverableDisplayName : String
      if (entity typeis Coverable) {
        coverableDisplayName = entity typeis LobCoverable ? entity.DisplayReference : entity.DisplayName
        propValue = new PropertyInstanceInfo(new BoundPropertyReference(entity.IntrinsicType, entity, propName)).Value?.toString()?.toBigDecimal()
        propDisplayName = entity.getPropertyLabel(propName) != null ? entity.getPropertyLabel(propName) : propName
      } else if (entity typeis Clause) {
        coverableDisplayName = entity.OwningCoverable typeis LobCoverable ? entity.OwningCoverable.DisplayReference : entity.OwningCoverable.DisplayName
        var covTerm = entity.getCovTermByCodeIdentifier(propName)
        propValue = covTerm.getValueAsString()?.toBigDecimal()
        propDisplayName = covTerm.DisplayName != null ? covTerm.DisplayName : propName
      }
      if (propValue != null) {
        var ranges = queryPropertyRange(entity)
        ranges?.each(\result -> {
          var minValue = result.get("MinValue").toBigDecimal()
          var maxValue = result.get("MaxValue").toBigDecimal()
          if (propValue < minValue || propValue > maxValue) {
            pcValidationResult.addError(entity, validationLevel, DisplayKey.get("Web.Policy.Validation.ValueOutOfRange", coverableDisplayName, propDisplayName, entity.DisplayName, propValue, minValue, maxValue))
          }
        })
      }
    }
  }

  public function getSingleValueRange(entity : KeyableBean) : String {
    var ranges = queryPropertyRange(entity)
    var range = ranges?.first()
    if (range != null) {
      var minValue = range.get("MinValue")
      var maxValue = range.get("MaxValue")
      if (minValue == maxValue)
        return minValue
    }
    return null
  }

  private function queryPropertyRange(entity : KeyableBean) : List<Map<String, String>> {
    var coverable : Coverable
    if (entity typeis Coverable) {
      coverable = entity
    } else if (entity typeis Clause) {
      coverable = entity.OwningCoverable
    }
    var paramMap = new HashMap<String, String>()
    _depends.eachKeyAndValue(\keyColumn, path -> {
      var dependsOnTypeInfo = new PropertyTypeInfo(path)
      var dependsOnValue = PropertyPathResolver.getValue(coverable, dependsOnTypeInfo)?.toString()
      paramMap.put(keyColumn, dependsOnValue)
    })
    var params = new SystemTableQueryData(paramMap, Jurisdiction.get(DependencyUtil.getJurisdiction(coverable)), DependencyUtil.getCoverableReferenceDate(coverable), {"MinValue", "MaxValue"})
    return DependencySystemTableQuery.querySystemTable(_table, params)
  }
}