package gw.lob.common.displayable

uses gw.api.locale.DisplayKey
uses gw.api.upgrade.Coercions
uses gw.api.web.job.JobWizardHelper
uses gw.lang.reflect.IPropertyInfo
uses gw.lob.common.LobPropertyReference
uses gw.lob.common.LobPropertyService
uses gw.lob.common.productmodel.sync.ProductModelSyncIssuesDisplayAll
uses gw.lob.common.productmodel.sync.ProductModelSyncIssuesDisplayBase
uses gw.lob.common.productmodel.sync.ProductModelSyncIssuesDisplayErrors
uses gw.lob.common.synchronizer.SyncPropertyMetaSupport

uses java.math.BigDecimal

class LobDisplayable {

  private static final var ENTITY = 'Entity'
  private static final var FIELD = 'Field'
  final static var SEARCHABLE_RANGE = "searchablerange"
  protected var _jobWizardHelper: JobWizardHelper as readonly JobWizardHelper

  var _propRef: LobPropertyReference as readonly PropertyRef
  var _isScreenEditable: boolean as ScreenEditable

  construct(propRef: LobPropertyReference, jobWizardHelper: JobWizardHelper, isScreenEditable: boolean) {
    _propRef = propRef
    _jobWizardHelper = jobWizardHelper
    _isScreenEditable = isScreenEditable
  }

  construct(entity: KeyableBean, propertyName: String, jobWizardHelper: JobWizardHelper, isScreenEditable: boolean) {
    this(new LobPropertyReference(entity, propertyName), jobWizardHelper, isScreenEditable)
  }

  property get PropertyInfo(): IPropertyInfo {
    return _propRef.PropertyInfo
  }

  property get FieldMeta(): LobFieldMeta {
    return LobFieldMetaSupport.Instance.findFieldMeta(_propRef)
  }

  property get Visible(): boolean {
    return FieldMeta.Visible and Available
  }

  property get Required(): boolean {
    return LobPropertyService.Instance.isEntityColumnRequired(_propRef, FieldMeta)
  }

  property get ForceRefresh(): boolean {
    return FieldMeta.ForceRefresh
  }

  property get Label(): String {
    return DisplayKey.get(FieldMeta.Label)
  }

  property get Editable(): boolean {
    return _isScreenEditable and FieldMeta.Editable and not isReadOnlyRangeType() and not isReadOnlyPropertyWithRangeValue()
  }

  property get Available(): boolean {
    return LobPropertyService.Instance.isEntityColumnAvailable(_propRef, FieldMeta)
  }

  property get ValueRange(): List<String> {
    return LobPropertyService.Instance.getPropertyValueRange(_propRef)
  }

  property get Value(): Object {
    return _propRef.Value
  }

  property set Value(value: Object) {
    _propRef.Value = value
  }

  property get IntegerValue(): Integer {
    return Coercions.makeIntFrom(Value)
  }

  property set IntegerValue(value: Integer) {
    Value = value
  }

  property get DecimalValue(): BigDecimal {
    return Value as BigDecimal
  }

  property set DecimalValue(value: BigDecimal) {
    Value = value
  }

  property get ConfirmMessage(): String {
    return null
  }

  property get InputSetMode(): String {
    var fieldMeta = FieldMeta
    var widgetType = fieldMeta.WidgetType

    switch (fieldMeta.WidgetType) {
      case LobFieldWidgetType.TC_BOOLEANRADIO:
        return modeFor("booleanradio", NeedsRefresh)
      case LobFieldWidgetType.TC_DATE:
        return modeFor("date", NeedsRefresh)
      case LobFieldWidgetType.TC_DECIMAL:
      case LobFieldWidgetType.TC_MONEY:
        return modeFor("decimal", NeedsRefresh)
      case LobFieldWidgetType.TC_INTEGER:
      case LobFieldWidgetType.TC_YEAR:
        return modeFor("integer", NeedsRefresh)
      case LobFieldWidgetType.TC_LABEL:
        return modeFor("label", false)
      case LobFieldWidgetType.TC_RANGE:
        if (PopupMode != null) {
          return SEARCHABLE_RANGE
        }
        return modeFor("range", NeedsRefresh)
      case LobFieldWidgetType.TC_TEXTAREA:
          return modeFor("textarea", NeedsRefresh)
      default:
        return modeFor("default", NeedsRefresh)
    }
  }

  property get PopupMode(): String {
    // the LOB implementations have to override this method to return
    // - the mode of the corresponding LobRangeSearchScreen pcf file - if the displayable is a searchable range
    //   (the field has an associated search screen to choose the value from the range)
    // - null - otherwise
    return null
  }

  property get Entity(): KeyableBean {
    return _propRef.Entity
  }

  property get hasDependents(): boolean {
    return LobPropertyService.Instance.hasDependents(_propRef)
  }

  property get NeedsRefresh(): boolean {
    return hasDependents or ForceRefresh
  }

  function onChange() {
    updateDependents()
  }

  function onChangeWithoutInfosAndWarnings() {
    updateDependentsWithoutInfosAndWarnings()
  }

  private function updateDependentsInternal(syncIssuesDisplay : ProductModelSyncIssuesDisplayBase) {
    synchronizeBeforeOnChange()
    LobPropertyService.Instance.updateEntityDependentProperties(_propRef.PropertyInstanceInfo,
        syncIssuesDisplay)
    synchronizeAfterOnChange()
  }

  private function updateDependents() {
    updateDependentsInternal(new ProductModelSyncIssuesDisplayAll(_jobWizardHelper))
  }

  private function updateDependentsWithoutInfosAndWarnings() {
    updateDependentsInternal(new ProductModelSyncIssuesDisplayErrors(_jobWizardHelper))
  }

  internal function isReadOnlyRangeType(): boolean {
    // Optional range field have a permanent "None" option which is included in the count
    // Required range field has a temporary "None" option. It is not counted because the option will be removed once a value is selected
    var optionCount = ValueRange.Count + (Required ? 0 : 1)
    return FieldMeta.isRangeType() and optionCount <= 1 and Value != null
  }

  private function isReadOnlyPropertyWithRangeValue() : boolean {
    return LobPropertyService.Instance.getCoverablePropertyRangeDefaultValue(_propRef) != null
  }

  protected function synchronizeBeforeOnChange() {
    SyncPropertyMetaSupport.Instance.executeBeforeChange(_propRef.PropertyInstanceInfo)
  }

  protected function synchronizeAfterOnChange() {
    SyncPropertyMetaSupport.Instance.executeAfterChange(_propRef.PropertyInstanceInfo)
  }

  private function modeFor(widgetName: String, isDynamic: boolean): String {
    return isDynamic ?  "dynamic" + widgetName.toLowerCase() : widgetName.toLowerCase()
  }
}