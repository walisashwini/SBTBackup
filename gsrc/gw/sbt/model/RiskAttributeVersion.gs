package gw.sbt.model

class RiskAttributeVersion {
  var _jurisdiction : String as Jurisdiction
  var _available : boolean as Available
  var _effectiveDate : Date as EffectiveDate
  var _expiryDate : Date as ExpiryDate

  var _instructions : DecisionAndInstructions as DecisionAndInstructions

  var _availableProp : RiskAttributeProperty as AvailableProperty
  var _labelProp : RiskAttributeProperty as LabelProperty
  var _widgetProp : RiskAttributeProperty as WidgetTypeProperty
  var _priorityProp : RiskAttributeProperty as PriorityProperty
  var _visibleProp : RiskAttributeProperty as VisibleProperty
  var _editableProp : RiskAttributeProperty as EditableProperty
  var _requiredProp : RiskAttributeProperty as RequiredProperty
  var _defaultValueProp: RiskAttributeProperty as DefaultValueProperty
  var _defaultPathProp: RiskAttributeProperty as DefaultPathProperty
  var _maxProp: RiskAttributeProperty as MaxProperty
  var _minProp: RiskAttributeProperty as MinProperty

  construct() {
    _instructions = new DecisionAndInstructions()
  }

  //note: the orders of properties are used in the comparison detail page.
  property get PropertyList() : List<RiskAttributeProperty> {
    return {AvailableProperty, LabelProperty, WidgetTypeProperty,
        PriorityProperty, VisibleProperty, EditableProperty, RequiredProperty,
        DefaultValueProperty, DefaultPathProperty, MaxProperty, MinProperty}
  }
}