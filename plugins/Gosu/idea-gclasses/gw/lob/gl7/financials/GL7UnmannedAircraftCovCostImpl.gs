package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl

class GL7UnmannedAircraftCovCostImpl extends GenericLobCostMethodsImpl<GL7UnmannedAircraftCovCost> {

  construct(owner : GL7UnmannedAircraftCovCost) {
    super(owner)
  }

  override property get Coverage() : Coverage {
    return _owner.UnmannedAircraftCov
  }

  override property get OwningCoverable() : Coverable {
    return _owner.UnmannedAircraftCov.OwningCoverable
  }

  override public property get Priority() : Integer {
    return _owner.UnmannedAircraftCov.Pattern.Priority
  }

  override public property get Description() : String {
    return _owner.UnmannedAircraftCov.Pattern.Name
  }
}