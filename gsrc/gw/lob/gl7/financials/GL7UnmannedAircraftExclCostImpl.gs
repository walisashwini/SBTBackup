package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl

class GL7UnmannedAircraftExclCostImpl extends GenericLobCostMethodsImpl<GL7UnmannedAircraftExclCost> {

  construct(owner : GL7UnmannedAircraftExclCost) {
    super(owner)
  }

  override property get Exclusion() : Exclusion {
    return _owner.UnmannedAircraftExcl
  }

  override property get OwningCoverable() : Coverable {
    return _owner.UnmannedAircraftExcl.OwningCoverable
  }

  override public property get Priority() : Integer {
    return _owner.UnmannedAircraftExcl.Pattern.Priority
  }

  override public property get Description() : String {
    return _owner.UnmannedAircraftExcl.Pattern.Name
  }
}