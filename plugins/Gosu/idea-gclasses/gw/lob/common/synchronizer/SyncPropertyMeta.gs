package gw.lob.common.synchronizer

uses entity.PolicyLine
uses gw.api.upgrade.Coercions
uses gw.lob.common.synchronizer.schema.sync_property_meta.anonymous.elements.PropertyType_Version

class SyncPropertyMeta {

  /** Supported schema properties **/
  static final var JURISDICTION = "Jurisdiction"
  static final var EFF_DATE = "EffectiveDate"
  static final var EXP_DATE = "ExpiryDate"
  static final var SYNCHRONIZER_CLASS = "SynchronizerClass"

  /** External API **/
  var _containerPath : String as readonly ContainerPath
  var _containerName: String as readonly ContainerName
  var _propertyName: String as readonly PropertyName
  var _jurisdiction: String as readonly Jurisdiction
  var _effDate: Date as readonly EffDate
  var _expDate: Date as readonly ExpDate
  var _synchronizerClass : String as readonly SynchronizerClass

  construct(syncPropertyMeta : PropertyType_Version, containerPath : String, containerName : String, propertyName : String) {
    _containerPath = containerPath
    _containerName = containerName
    _propertyName = propertyName
    init(syncPropertyMeta)
  }

  function isApplicableFor(line : PolicyLine) : boolean {
    return _containerPath.contains(line.Pattern.PolicyLineSubtype.Code)
  }

  private function init(syncPropertyMeta : PropertyType_Version) {
    _jurisdiction = getPropertyMeta(JURISDICTION, syncPropertyMeta) as String
    _effDate = Coercions.makeDateFrom(getPropertyMeta(EFF_DATE, syncPropertyMeta))
    _expDate = Coercions.makeDateFrom(getPropertyMeta(EXP_DATE, syncPropertyMeta))
    _synchronizerClass = getPropertyMeta(SYNCHRONIZER_CLASS, syncPropertyMeta) as String
  }

  private function getPropertyMeta(syncPropName : String, syncPropertyMeta : PropertyType_Version) : Object {
    return syncPropertyMeta.getChild(syncPropName).$SimpleValue.GosuValue
  }
}
