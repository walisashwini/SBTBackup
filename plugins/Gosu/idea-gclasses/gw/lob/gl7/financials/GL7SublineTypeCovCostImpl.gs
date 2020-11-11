package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl

uses java.lang.Integer

class GL7SublineTypeCovCostImpl extends GenericLobCostMethodsImpl<GL7SublineTypeCovCost> {

  construct(owner : GL7SublineTypeCovCost) {
    super(owner)
  }

  override property get Coverage() : Coverage {
    return _owner.SublineTypeCoverage
  }

  override property get OwningCoverable() : Coverable {
    return _owner.SublineTypeCoverage.OwningCoverable
  }

  override property get Jurisdiction() : Jurisdiction {
    return _owner.OwningCoverable.CoverableState
  }

  override public property get Priority() : Integer {
    return _owner.SublineTypeCoverage.Pattern.Priority
  }

  override public property get Description() : String {
    return _owner.SublineTypeCoverage.Pattern.Name
  }

}