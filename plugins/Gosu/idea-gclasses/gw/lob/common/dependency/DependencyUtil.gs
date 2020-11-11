package gw.lob.common.dependency

uses gw.api.productmodel.CovTermOpt
uses gw.lang.reflect.IType
uses gw.lang.reflect.TypeSystem
uses gw.lob.common.LobCoverable
uses gw.lob.common.dependency.ConditionalClause.OperatorType
uses gw.util.LRUCache
uses org.slf4j.LoggerFactory
uses org.slf4j.MarkerFactory
uses java.text.SimpleDateFormat

uses java.math.BigDecimal
uses java.text.SimpleDateFormat

class DependencyUtil {

  static var _typeCache = Collections.synchronizedMap(new LRUCache<String, IType>(1000))
  static var _invalidTypes = new ArrayList<String>()

  /**
   * Check if the given condition is valid
   */
  static function isConditionValid(value : Object, target : Object, operator : OperatorType) : boolean {
    // for numeric comparison, empty value implies invalid condition
    var isNumExpected = {OperatorType.GT, OperatorType.GE, OperatorType.LT, OperatorType.LE}.contains(operator)
    var isOperandEmpty = value == null or value.toString().Empty or target == null or target.toString().Empty
    if (isNumExpected and isOperandEmpty) {
      return false
    }

    // for string comparison, empty string and null value is equivalent
    if (!isNumExpected) {
      value = value?:""
      target = target?:""
    }

    var numericValue : BigDecimal
    var numericTarget : BigDecimal
    // try to cast the value to number, if it is not, use the value as string
    try {
      numericValue = value?.toString()?.toBigDecimal()
      numericTarget = target?.toString()?.toBigDecimal()
    } catch (e : NumberFormatException) {
      // do nothing
    }

    switch (operator) {
      case OperatorType.EQ:
        return (numericValue != null && numericTarget != null) ? numericValue == numericTarget : value == target
      case OperatorType.NE:
        return (numericValue != null && numericTarget != null) ? numericValue != numericTarget : value != target
      case OperatorType.GT:
        return (value as BigDecimal) > target as BigDecimal
      case OperatorType.GE:
        return (value as BigDecimal) >= target as BigDecimal
      case OperatorType.LT:
        return (value as BigDecimal) < target as BigDecimal
      case OperatorType.LE:
        return (value as BigDecimal) <= target as BigDecimal
      case OperatorType.CONTAINS:
        return (value as String).contains(target as String)
      case OperatorType.STARTS_WITH:
        return (value as String).startsWith(target as String)
      case OperatorType.ENDS_WITH:
        return (value as String).endsWith(target as String)
      default:
        LoggerFactory.getLogger("DEPENDENCY").warn(MarkerFactory.getMarker(DependencyUtil.Type.Name), DependencyUtil.Type.Name + ": Operand '${operator}' is current not supported")
        return true
    }
  }

  /**
   * validate the given condition
   */
  static function validateCondition(coverable : Coverable, orClause : ConditionalClause) : boolean {
    return orClause.Clauses.hasMatch(\andClause -> {
      return andClause.Clauses.allMatch(\condition -> {
        if (condition.Function != null) {
          var values = PropertyPathResolver.getValues(coverable, condition.TypeInfo)
          return isFunctionConditionValid(values, condition)
        } else if (condition.ValueRef != null) {
          return isConditionValid(getValueByTypeInfo(coverable, condition.TypeInfo), getValueByTypeInfo(coverable, condition.ValueRef), condition.Operator)
        } else {
          return isConditionValid(getValueByTypeInfo(coverable, condition.TypeInfo), condition.Value, condition.Operator)
        }
      })
    })
  }

  static function getContainerName(propInstanceInfo : PropertyInstanceInfo) : String {
    return propInstanceInfo.ContextCoverable.IntrinsicType.TypeInfo.Name
  }

  static function getPropertyName(propInstanceInfo : PropertyInstanceInfo) : String {
    return propInstanceInfo.TypeInfo.Name
  }

  static function getValueByTypeInfo(coverable : Coverable, typeInfo : PropertyTypeInfo) : Object {
    return PropertyPathResolver.getValue(coverable, typeInfo)
  }

  static function getJurisdiction(coverable : Coverable) : String {
    return coverable.CoverableState?.Code?:coverable.PolicyLine.BaseState.Code
  }

  static function getJurisdiction(modifier: Modifier) : String {
    return modifier.State.Code
  }

  static function getCoverableReferenceDate(coverable : Coverable) : Date {
    return RequestScopedCache.getCoverableRefDate(coverable)
  }

  static function getClauseReferenceDate(coverable : Coverable, clauseCode : String) : Date {
    var referenceDate = RequestScopedCache.getClausePatternRefDate(coverable, clauseCode)
    if (referenceDate == null) {
      //this might happen if clauseCode is invalid (ie. in some test cases),
      //if happens, keep the previous behavior to get the coverable's reference date.
      return getCoverableReferenceDate(coverable)
    } else {
      return referenceDate
    }
  }

  static function getGraphTraversalConstraint(coverable : Coverable) : GraphTraversalConstraint {
    return coverable typeis LobCoverable ?
        coverable.Constraint : RequestScopedCache.getCoverableCriteria(coverable, gw.lob.common.dependency.JurisdictionGraphTraversalConstraint)
  }

  static function getOptionValue(covTermOpt : CovTermOpt, entityType : IType, valueColumnName : String) : Object {
    var value : Object
    var valueType = entityType.TypeInfo.getProperty(valueColumnName).FeatureType
    if (valueType == Integer) {
      value = covTermOpt.Value as Integer
    } else {
      value = covTermOpt.DisplayName
    }

    return value
  }

  static function getTypeByRelativeName(typeName : String) : IType {
    var type = _typeCache.get(typeName)

    if (type == null and not _invalidTypes.contains(typeName)) {
      try {
        type = TypeSystem.getByRelativeName(typeName)
        _typeCache.put(typeName, type)
      } catch (ex : ClassNotFoundException) {
        _invalidTypes.add(typeName)
      }
    }

    return type
  }

  private static function isFunctionConditionValid(values : List<GWNode>, condition : ConditionalClause) : boolean {
    switch (condition.Function) {
      case exist:
      case notExist:
        if (values.Empty) {
          return condition.Function == notExist
        } else if (condition.Operator == null) {
          return condition.Function == exist
        }

        for (value in values) {
          if (isConditionValid(value.Value, condition.Value, condition.Operator)) {
            return condition.Function == exist
          }
        }

        return condition.Function == notExist
      default:
        throw new RuntimeException("Unsupported function " + condition.Function)
    }
  }

  public static function convertStringToDate(strValue : String) : Date {
    if (strValue != null && !strValue.equals("")) {
      var sdfDateOnly = new SimpleDateFormat("EEE MMM d HH:mm:ss Z yyyy", Locale.US)
      sdfDateOnly.setCalendar(Calendar.getInstance())
      var d = sdfDateOnly.parse(strValue)
      return d
    } else {
      return null
    }
  }

  public static function convertSimpleStringFormatToDate(strValue : String) : Date {
    if (strValue != null && !strValue.equals("")) {
      var sdfDateOnly = new SimpleDateFormat("MM/dd/yy", Locale.US)
      sdfDateOnly.setCalendar(Calendar.getInstance())
      var d = sdfDateOnly.parse(strValue)
      return d
    } else {
      return null
    }
  }

}
