package gw.lob.common.displayable

uses gw.api.diff.DiffProperty
uses gw.api.domain.Clause
uses gw.api.productmodel.ScheduleAutoNumberPropertyInfo
uses gw.api.productmodel.ScheduleForeignKeyWithOptionLabelsPropertyInfo
uses gw.api.productmodel.SchedulePropertyInfo
uses gw.api.productmodel.SchedulePropertyValueProvider
uses gw.api.web.job.JobWizardHelper
uses gw.lang.reflect.IPropertyInfo
uses gw.lob.common.LobPropertyService
uses gw.lob.common.dependency.FieldDependency
uses gw.lob.common.sbt.schedules.ScheduleItemPropertyUtil
uses gw.validation.PCValidationContext
uses gw.web.productmodel.ProductModelSyncIssuesHandler
uses java.lang.Integer
uses java.util.List
uses gw.api.locale.DisplayKey

class ScheduledItemPropertyInfoDisplayableV2<T> implements Displayable<T> {

  protected var _clause: Clause as readonly Clause
  var _scheduledItem : ScheduledItem as Entity
  protected var _propertyInfo : SchedulePropertyInfo
  var _displayableAdapter : SchedulePropertyInfoDisplayableAdapter
  var _lobPropertyService : LobPropertyService

  protected var _valueProvider : SchedulePropertyValueProvider

  protected construct(clause: Clause, scheduledItem : ScheduledItem, propertyInfo : SchedulePropertyInfo, displayableAdapter : SchedulePropertyInfoDisplayableAdapter) {
    _clause = clause
    _scheduledItem = scheduledItem as ScheduledItem
    _propertyInfo = propertyInfo
    _displayableAdapter = displayableAdapter
    _lobPropertyService = LobPropertyService.Instance

    _valueProvider = PropertyValueProvider as SchedulePropertyValueProvider<T>
    if (not(_propertyInfo typeis ScheduleAutoNumberPropertyInfo)
        and _valueProvider.Value == null) {
      (scheduledItem as Object)[propertyInfo.PropertyInfo.getColumnName()] = ScheduleItemPropertyUtil.getDefaultValue(propertyInfo)
    }
  }

  override property get Visible(): boolean {
    return _displayableAdapter.isVisible(_scheduledItem, _propertyInfo) and Available
  }

  override property get Required(): boolean {
    return _propertyInfo.Required
  }

  override property get ForceRefresh(): boolean {
    return false
  }

  override property get Label(): String {
    return _propertyInfo.Label
  }

  override property get Editable(): boolean {
    return _displayableAdapter.isEditable(_scheduledItem, _propertyInfo)
  }

  override property get Available() : boolean {
    var isAvailable = _lobPropertyService.isScheduledItemPropertyAvailable(_scheduledItem, _propertyInfo)
    return isAvailable
  }

  override property get ValueRange() : List<T> {
    return _displayableAdapter.getValueRange<T>(_scheduledItem, _propertyInfo as SchedulePropertyInfo<T>)
  }

  override function getOptionGroupLabel(obj: T): String {
    if (_propertyInfo typeis ScheduleForeignKeyWithOptionLabelsPropertyInfo){
      return _propertyInfo.getOptionGroupLabel(obj as KeyableBean)
    }
    return null
  }

  override property get Value(): T {
    return _valueProvider.Value as T
  }

  override property set Value(newValue: T) {
    (_scheduledItem as Object)[_propertyInfo.PropertyInfo.getColumnName()] = newValue
  }

  override property get ValidValue(): T {
    return _displayableAdapter.getValidValue<T>(_scheduledItem, _propertyInfo as SchedulePropertyInfo<T>, Value)
  }

  override property get ShowConfirmMessage(): boolean {
    return false
  }

  override property get ConfirmMessage(): String {
    return null
  }

  override property get ValidateExpression(): String {
    return null
  }

  override function update() {
    Value = ValidValue
    if(not _displayableAdapter.isVisible(_scheduledItem, _propertyInfo)) {
      Value = null
    }
  }

  override function validate(valContext: PCValidationContext) {
    if (Value != ValidValue) {
      if (Editable) {
        addDependentValueError(valContext)
      } else {
        update()
      }
    }
  }

  override function onChange(wizard: JobWizardHelper) {
    if (Entity typeis FieldDependency) {
      Entity.updateDependentFields(null, wizard)
    }
    _lobPropertyService.updateScheduledItemPropertyDependentProperties(_propertyInfo, _clause, wizard)
    if (Entity typeis Coverable) {
      ProductModelSyncIssuesHandler.syncCoverages({Entity}, wizard)
    }
  }

  protected property get PropertyValueRange() : List<T> {
    return _propertyInfo.ValueRange as List<T>
  }

  protected property get PropertyValueProvider() : SchedulePropertyValueProvider {
    return _propertyInfo.createValueProvider(_scheduledItem)
  }

  protected function addDependentValueError(valContext: PCValidationContext) {
    valContext.Result.addFieldError(
        Entity,
            PropertyInfo.Name,
            valContext.Level,
            DisplayKey.get("Web.Policy.Validation.Schedule.InvalidDependentValue", Label, Value, Entity.ScheduleParent, Entity),
            null
    )
  }

  override property get IntegerValue(): Integer {
    return Value as Integer
  }

  override property set IntegerValue(newValue: Integer) {
    Value = newValue as T
  }

  property get SchedulePropertyInfo(): SchedulePropertyInfo {
    return _propertyInfo
  }

  override function shouldSuppressOOSConflict(diffItem: DiffProperty): boolean {
    // TODO: fix behaviour for schedule items
    return false
  }

  override property get PropertyInfo(): IPropertyInfo {
    return null
  }
}