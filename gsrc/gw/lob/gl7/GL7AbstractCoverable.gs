package gw.lob.gl7

uses gw.lob.common.dependency.GraphTraversalConstraint
uses gw.lob.common.dependency.RequestScopedCache

abstract class GL7AbstractCoverable<T extends Coverable> implements GL7Coverable {
  protected var _owner: T

  construct(owner: T) {
    _owner = owner
  }

  override property get Constraint(): GraphTraversalConstraint {
    return RequestScopedCache.getCoverableCriteria(_owner, gw.lob.gl7.dependency.GL7GraphTraversalConstraint)
  }
  
  override property get DisplayReference() : String {
    return _owner.DisplayName
  }
}