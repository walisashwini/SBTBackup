package gw.sbt.model.clause

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.Intent
uses gw.sbt.model.ProductModelAvailability
uses gw.sbt.model.ProductModelObject
uses java.lang.Integer
uses java.math.BigDecimal
uses java.util.List

class CovTerm implements ProductModelObject {

  var _pid : String as PublicId
  var _intent : Intent
  var _effectiveAvailability : ProductModelAvailability
  var _dataType: DataType as DataType
  var _availabilities: List<ProductModelAvailability> as Availabilities = {}
  var _covTermOptions : List<CovTermOption> as CovTermOptions = {}

  var _descriptionAttribute : ClauseAttribute<String> as readonly DescriptionAttribute
  var _requiredAttribute : ClauseAttribute<Boolean> as readonly RequiredAttribute
  var _valueTypeAttribute : ClauseAttribute<String> as readonly ValueTypeAttribute
  var _defaultValueAttribute : ClauseAttribute<String> as readonly DefaultValueAttribute
  var _minValueAttribute : ClauseAttribute<BigDecimal> as readonly MinValueAttribute
  var _maxValueAttribute : ClauseAttribute<BigDecimal> as readonly MaxValueAttribute
  var _priorityAttribute : ClauseAttribute<Integer> as readonly PriorityAttribute

  var _decisionAndInstructions : DecisionAndInstructions as DecisionAndInstructions = new DecisionAndInstructions()

  override property get Intent() : Intent {
    return _intent
  }

  override property set Intent(intent : Intent) {
    _intent = intent
  }

  override property set EffectiveAvailability(availability : ProductModelAvailability) {
    _effectiveAvailability = availability
  }

  override property get EffectiveAvailability() : ProductModelAvailability {
    return _effectiveAvailability
  }

  property get Description() : String {
    return DescriptionAttribute.Value
  }

  property set Description(value : String) {
    _descriptionAttribute = attribute("Description", value)
  }

  property get Required() : boolean {
    return RequiredAttribute.Value
  }

  property set Required(value : boolean) {
    _requiredAttribute = attribute("Required", value)
  }

  property get ValueType() : String {
    return ValueTypeAttribute.Value
  }

  property set ValueType(value : String) {
    _valueTypeAttribute = attribute("ValueType", value)
  }

  property get DefaultValue() : String {
    return DefaultValueAttribute.Value
  }

  property set DefaultValue(value : String) {
    _defaultValueAttribute = attribute("DefaultValue", value)
  }

  property get MinValue() : BigDecimal {
    return MinValueAttribute.Value
  }

  property set MinValue(value : BigDecimal) {
    _minValueAttribute = attribute("MinValue", value)
  }

  property get MaxValue() : BigDecimal {
    return MaxValueAttribute.Value
  }

  property set MaxValue(value : BigDecimal) {
    _maxValueAttribute = attribute("MaxValue", value)
  }

  property get Priority() : int {
    return PriorityAttribute.Value
  }

  property set Priority(value : int) {
    _priorityAttribute = attribute("Priority", value)
  }

  reified private function attribute<T>(name : String, value : T) : ClauseAttribute<T> {
    return value == null ? null : ClauseAttribute.with(name, value, Intent)
  }

  override property get ChildrenWithAvailability() : List<ProductModelObject> {
    return CovTermOptions
  }
}