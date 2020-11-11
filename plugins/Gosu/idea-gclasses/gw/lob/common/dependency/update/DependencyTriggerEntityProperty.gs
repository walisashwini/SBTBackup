package gw.lob.common.dependency.update

uses gw.lob.common.LobPropertyReference
uses gw.lob.common.LobPropertyService
uses gw.lob.common.defaults.DefaultValue
uses gw.lob.common.dependency.DependencyInfo
uses gw.lob.common.productmodel.sync.JobWizardHelperDisplay

class DependencyTriggerEntityProperty implements DependencyTrigger {
  var _coverable : Coverable
  var _propRef : LobPropertyReference
  var _isChanged : boolean
  var _dependencyInfo : DependencyInfo

  construct(coverable: Coverable, propRef : LobPropertyReference, dependencyInfo : DependencyInfo) {
    _coverable = coverable
    _propRef = propRef
    _dependencyInfo = dependencyInfo
  }

  override function update(updatedMap : Map<String, Boolean> = null, helper : JobWizardHelperDisplay = null) {
    var before = _propRef.Value
    doUpdate(helper)
    _isChanged = before != _propRef.Value
  }

  override function doUpdate(helper : JobWizardHelperDisplay) {
    if (_propRef.PropertyInfo != null) {
      if (LobPropertyService.Instance.isEntityColumnAvailable(_propRef)) {
        DefaultValue.setDefault(_propRef)
        LobPropertyService.Instance.setNullOrSingleOptionAsDefaultValueForRangeInput(_propRef)
      } else {
        DefaultValue.removeDefaultedPropertyRecord(_propRef.BoundPropertyReference)
        // default value is applied to unavailable field, or its dependent fields will not have any options available
        _propRef.Value = DefaultValue.getDefault(_propRef)
      }
      // Set the single value for the optional range property whose MinValue is equal to MaxValue no matter if this field is available
      LobPropertyService.Instance.setCoverablePropertyDefaultValueWithSingleValueRange(_propRef)
    }
  }

  override function getAncestor() : Coverable {
    return _coverable
  }

  override function getDependencyInfo() : DependencyInfo {
    return _dependencyInfo
  }

  override function isChanged() : boolean {
    return _isChanged
  }
}