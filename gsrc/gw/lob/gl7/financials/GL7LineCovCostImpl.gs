package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl

uses java.lang.Integer

class GL7LineCovCostImpl extends GenericLobCostMethodsImpl<GL7LineCovCost> {

  construct(owner : GL7LineCovCost) {
    super(owner)
  }

  override property get Coverage() : Coverage {
    return _owner.LineCoverage
  }

  override property get OwningCoverable() : Coverable {
    return _owner.LineCoverage.OwningCoverable
  }

  override property get Jurisdiction() : Jurisdiction {
    return _owner.OwningCoverable.CoverableState
  }

  override public property get Priority() : Integer {
    return _owner.LineCoverage.Pattern.Priority
  }

  override public property get Description() : String {
    return _owner.LineCoverage.Pattern.Name
  }

}