package gw.lob.common.dependency

uses gw.api.productmodel.CovTermOpt

class CovTermOptInstanceInfo extends PropertyInstanceInfo {
  construct(propName: String, containerType: String, contextObject: Object, value: CovTermOpt) {
    super(propName, containerType, contextObject, value)
  }

  override property get Value() : CovTermOpt {
    return _value as CovTermOpt
  }

  property set Value(newValue : Object) {
    _value = newValue
  }
}
