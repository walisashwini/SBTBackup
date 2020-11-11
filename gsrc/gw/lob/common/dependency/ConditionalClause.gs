package gw.lob.common.dependency

uses java.lang.StringBuffer
uses java.util.Objects
uses java.util.Set

/**
 * Data model for dependency conditional clause
 *
 * Conditional clause has 2 types
 *    simple: (path == value)
 *    complex: (simple clause OR complex clause OR more clauses...)
 *
 * Note that one complex clause can use AND or OR, but not both. Create two different clauses if two conjunctions are needed
 */
class ConditionalClause {

  var _isSimple: boolean as readonly Simple

  // variable for simple clause
  var _typeInfo: PropertyTypeInfo as readonly TypeInfo
  var _operator: OperatorType as readonly Operator
  var _value: Object
  var _valueRef: PropertyTypeInfo as readonly ValueRef
  var _func: FunctionType as readonly Function
  var _classPath: String as readonly ClassPath

  // variable for complex clause
  var _conditions: Set<ConditionalClause> as readonly Clauses
  var _conjunction: ConjunctionType as readonly Conjunction

  enum FunctionType { exist, notExist }

  enum ConjunctionType { AND, OR }

  enum OperatorType {
    EQ ("="), NE ("!="), LT("<"), GT(">"), LE("<="), GE(">="), CONTAINS("contains"), STARTS_WITH("starts-with"), ENDS_WITH("ends-with")

    private var _op : String

    private construct(op : String){
      _op = op
    }

    static function getOperatorType(op: String) : OperatorType {
      var matchedOperatorType = OperatorType.AllValues.firstWhere( \operatorType -> operatorType._op == op )

      if(matchedOperatorType == null) {
        throw "Unsupported comparison operator ${op} used"
      }

      return matchedOperatorType
    }
  }

  /**
   * constructor for simple clause
   */
  construct(func: String, path: String, operator: String, value: Object, valuePath: String) {
    _typeInfo = new PropertyTypeInfo(path)
    _operator = operator == null ? null : OperatorType.getOperatorType(operator)
    _func = func == null ? null : FunctionType.valueOf(func)
    _value = value
    _valueRef = valuePath == null ? null : new PropertyTypeInfo(valuePath)
    if (_operator != null) {
      if (_value != null && _valueRef != null) {
        throw "Only one of [Value] and [ValuePath] can be defined in a conditional clause"
      }
      if (_value == null && _valueRef == null) {
        throw "Target comparing [Value]/[ValuePath] is missing"
      }
    } else {
      if (_value != null || _valueRef != null) {
        throw "Operator not found, no target [Value]/[ValuePath] should be defined"
      }
    }
    _isSimple = true
  }

  construct(classPath : String) {
    _classPath = classPath
    _isSimple = true
  }

  construct(classPath: String, operator: String, value: Object, valuePath: String) {
    this(null, classPath, operator, value, valuePath)
  }

  /**
   * constructor for complex clause
   */
  construct(clauses: Set<ConditionalClause>, conjunction: ConjunctionType) {
    _conditions = clauses
    _conjunction = conjunction
    _isSimple = false
  }

  /**
   * Return null if backing value used is an empty String. This allows definition of comparisons to use empty ""
   * as an indication of unset value.
   */
  property get Value() : Object {
    if(_value typeis String) {
      return _value.Empty ? null : _value
    }
    return _value
  }

  override function equals(obj: Object): boolean {
    if (obj == null) return false

    var clause = obj as ConditionalClause

    if (_func != null ? !_func.equals(clause._func) : clause._func != null) return false
    if (_typeInfo != null ? !_typeInfo.equals(clause._typeInfo) : clause._typeInfo != null) return false
    if (_operator != null ? !_operator.equals(clause._operator) : clause._operator != null) return false
    if (_value != null ? !_value.equals(clause._value) : clause._value != null) return false
    if (_valueRef != null ? !_valueRef.equals(clause._valueRef) : clause._valueRef != null) return false
    if (_conditions != null ? !_conditions.equals(clause._conditions) : clause._conditions != null) return false
    if (_conjunction != null ? !_conjunction.equals(clause._conjunction) : clause._conjunction != null) return false
    if (_classPath != null ? !_classPath.equals(clause._classPath) : clause._classPath != null) return false

    return true
  }

  override function hashCode(): int {
    var result = Objects.hashCode(_func)
    result = 31 * result + Objects.hashCode(_typeInfo)
    result = 31 * result + Objects.hashCode(_operator)
    result = 31 * result + Objects.hashCode(_value)
    result = 31 * result + Objects.hashCode(_valueRef)
    result = 31 * result + Objects.hashCode(_conditions)
    result = 31 * result + Objects.hashCode(_conjunction)
    result = 31 * result + Objects.hashCode(_classPath)

    return result
  }

  override function toString(): String {
    if (_isSimple) {
      return "${_func} ${_typeInfo.Name} ${_operator} ${_value} ${_valueRef} ${_classPath}"
    } else {
      var buffer = new StringBuffer("Complex condition with '${_conjunction}': \n")
      _conditions.each( \ condition -> buffer.append("${condition.toString()}\n"))
      return buffer.toString()
    }
  }
}