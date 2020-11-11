package gw.lob.common

uses gw.lob.common.dependency.GraphTraversalConstraint
uses gw.lob.common.dependency.RequestScopedCache

class LobDefaultCoverable implements LobCoverable {

  private var _owner: Coverable as readonly Owner

  construct(owner : Coverable) {
    _owner = owner
  }

  override property get Constraint(): GraphTraversalConstraint {
    return RequestScopedCache.getCoverableCriteria(
        _owner, gw.lob.common.dependency.JurisdictionGraphTraversalConstraint)
  }

  override property get DisplayReference() : String {
    return _owner.DisplayName
  }
}
