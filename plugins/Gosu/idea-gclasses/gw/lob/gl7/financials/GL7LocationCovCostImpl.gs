package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl

uses java.lang.Integer

class GL7LocationCovCostImpl extends GenericLobCostMethodsImpl<GL7LocationCovCost> {

  construct(owner : GL7LocationCovCost) {
    super(owner)
  }

  override property get Coverage() : Coverage {
    return _owner.LocationCoverage
  }

  override property get OwningCoverable() : Coverable {
    return _owner.LocationCoverage.OwningCoverable
  }

  override property get Jurisdiction() : Jurisdiction {
    return _owner.OwningCoverable.CoverableState
  }

  override public property get Priority() : Integer {
    return _owner.LocationCoverage.Pattern.Priority
  }

  override public property get Description() : String {
    return _owner.LocationCoverage.Pattern.Name
  }

}