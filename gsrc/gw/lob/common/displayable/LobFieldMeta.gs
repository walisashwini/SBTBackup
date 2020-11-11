package gw.lob.common.displayable

uses gw.lob.common.displayable.schema.lob_field_meta.anonymous.elements.ColumnType_Version
uses java.math.BigInteger
uses java.util.Date
uses gw.api.upgrade.Coercions

/**
 * Data model for lob field meta service
 */
class LobFieldMeta {

  /** Supported schema properties **/
  static final var JURISDICTION = "Jurisdiction"
  static final var LABEL = "Label"
  static final var WIDGET_TYPE = "WidgetType"
  static final var EFF_DATE = "EffectiveDate"
  static final var EXP_DATE = "ExpiryDate"
  static final var PRIORITY = "Priority"
  static final var EDITABLE = "Editable"
  static final var AVAILABLE = "Available"
  static final var VISIBLE = "Visible"
  static final var REQUIRED = "Required"
  static final var DEFAULT_VALUE = "DefaultValue"
  static final var DEFAULT_PATH = "DefaultPath"
  static final var MAX = "Max"
  static final var MIN = "Min"
  static final var FORCE_REFRESH = "ForceRefresh"

  /** External API **/
  var _entityName: String as readonly EntityName
  var _propertyName: String as readonly PropertyName
  var _jurisdiction: String as readonly Jurisdiction
  var _label: String as readonly Label
  var _widgetType: LobFieldWidgetType as readonly WidgetType
  var _effDate: Date as readonly EffDate
  var _expDate: Date as readonly ExpDate
  var _priority: BigInteger as readonly Priority
  var _editable: boolean as readonly Editable
  var _available: boolean as readonly Available
  var _visible : boolean as readonly Visible
  var _required: boolean as readonly Required
  var _defaultValue: String as readonly DefaultValue
  var _defaultPath: String as readonly DefaultPath
  var _max: String as readonly Max
  var _min: String as readonly Min
  var _forceRefresh: boolean as readonly ForceRefresh

  construct(columnVersion: ColumnType_Version, containerName : String, propName : String) {
    _entityName = containerName
    _propertyName = propName
    init(columnVersion)
  }

  function isRangeType(): boolean {
    return WidgetType == LobFieldWidgetType.TC_RANGE or WidgetType == LobFieldWidgetType.TC_RANGERADIO
  }

  private function init(columnVersion : ColumnType_Version) {
    _jurisdiction = getFieldMeta(JURISDICTION, columnVersion) as String
    _label = getFieldMeta(LABEL, columnVersion) as String
    _widgetType = LobFieldWidgetType.get(getFieldMeta(WIDGET_TYPE, columnVersion) as String)
    _effDate = Coercions.makeDateFrom(getFieldMeta(EFF_DATE, columnVersion))
    _expDate = Coercions.makeDateFrom(getFieldMeta(EXP_DATE, columnVersion))
    _priority = getFieldMeta(PRIORITY, columnVersion) as BigInteger
    _editable = Coercions.makePBooleanFrom(getFieldMeta(EDITABLE, columnVersion) ?: true)
    _available = Coercions.makePBooleanFrom(getFieldMeta(AVAILABLE, columnVersion) ?: true)
    _visible = Coercions.makePBooleanFrom(getFieldMeta(VISIBLE, columnVersion) ?: true)
    _required = Coercions.makePBooleanFrom(getFieldMeta(REQUIRED, columnVersion))
    _defaultValue = getFieldMeta(DEFAULT_VALUE, columnVersion) as String
    _defaultPath = getFieldMeta(DEFAULT_PATH, columnVersion) as String
    _max = getFieldMeta(MAX, columnVersion) as String
    _min = getFieldMeta(MIN, columnVersion) as String
    _forceRefresh = Coercions.makePBooleanFrom(getFieldMeta(FORCE_REFRESH, columnVersion))
  }

  private function getFieldMeta(fieldName : String, columnVersion : ColumnType_Version) : Object {
    return columnVersion.getChild(fieldName).$SimpleValue.GosuValue
  }
}

