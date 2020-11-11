package gw.lob.common.synchronizer

uses gw.lang.reflect.features.BoundPropertyReference
uses gw.lob.common.LobPropertyReference
uses gw.lob.common.LobPropertyService
uses gw.lob.common.dependency.AvailabilitySupport
uses gw.lob.common.dependency.v2.ValueDependencySupport
uses gw.lob.common.displayable.LobFieldMetaSupport

class PropertySynchronizer {

  var _from : LobPropertyReference
  var _to : LobPropertyReference
  var _defaultValue : Object

  static function betweenProperties(from: BoundPropertyReference, to: BoundPropertyReference, defaultValue: Object) : PropertySynchronizer {
    return new(new LobPropertyReference(from), new LobPropertyReference(to), defaultValue)
  }

  construct(from: LobPropertyReference, to: LobPropertyReference, defaultValue: Object) {
    _from = from
    _to = to
    _defaultValue = defaultValue
  }

  function sync() {
    if (PropertyAvailable) {
      if (_to.Value != _from.Value) {
        if (ValidValue) {
          _to.Value = _from.Value
        } else {
          _to.Value = _defaultValue
        }
      }
    } else {
      _to.Value = null
    }

    LobPropertyService.Instance.updateEntityDependentProperties(_to.PropertyInstanceInfo)
  }

  private property get PropertyAvailable() : boolean {
    return LobFieldMetaSupport.Instance.findFieldMeta(_to).Available and
        (AvailabilitySupport.Instance.isEntityColumnAvailable(_to) ?: true)
  }

  private property get ValidValue() : boolean {
    return ValueDependencySupport.Instance
        .valueRange(_to)
        ?.contains(_from.Value)
  }
}