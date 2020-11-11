package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl

class GL7UnmannedAircraftCondCostImpl extends GenericLobCostMethodsImpl<GL7UnmannedAircraftCondCost> {

  construct(owner : GL7UnmannedAircraftCondCost) {
    super(owner)
  }

  override property get Condition() : PolicyCondition {
    return _owner.UnmannedAircraftCond
  }

  override property get OwningCoverable() : Coverable {
    return _owner.UnmannedAircraftCond.OwningCoverable
  }

  override public property get Priority() : Integer {
    return _owner.UnmannedAircraftCond.Pattern.Priority
  }

  override public property get Description() : String {
    return _owner.UnmannedAircraftCond.Pattern.Name
  }
}