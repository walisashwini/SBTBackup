package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl

uses java.lang.Integer

class GL7SublineCovCostImpl extends GenericLobCostMethodsImpl<GL7SublineCovCost> {

  construct(owner : GL7SublineCovCost) {
    super(owner)
  }

  override property get Coverage() : Coverage {
    return Cost.SublineCoverage
  }

  override property get OwningCoverable() : Coverable {
    return Cost.SublineCoverage.OwningCoverable
  }

  override property get Jurisdiction() : Jurisdiction {
    return Cost.OwningCoverable.CoverableState
  }

  override public property get Priority() : Integer {
    return Cost.SublineCoverage.Pattern.Priority
  }

  override public property get Description() : String {
    return Cost.SublineCoverage.Pattern.Name
  }

}