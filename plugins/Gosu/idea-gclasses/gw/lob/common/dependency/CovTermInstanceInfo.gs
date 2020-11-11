package gw.lob.common.dependency

uses gw.api.domain.Clause

class CovTermInstanceInfo extends PropertyInstanceInfo {
  construct(propName: String, containerType: String, contextObject: Clause) {
    super(propName, containerType, contextObject, null)
  }
}