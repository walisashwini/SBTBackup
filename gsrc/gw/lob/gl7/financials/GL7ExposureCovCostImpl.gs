package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl

uses java.lang.Integer

class GL7ExposureCovCostImpl extends GenericLobCostMethodsImpl<GL7ExposureCovCost> {

  construct(owner : GL7ExposureCovCost) {
    super(owner)
  }

  override property get Coverage() : Coverage {
    return _owner.ExposureCoverage
  }

  override property get OwningCoverable() : Coverable {
    return _owner.ExposureCoverage.OwningCoverable
  }

  override property get Jurisdiction() : Jurisdiction {
    return _owner.OwningCoverable.CoverableState
  }

  override public property get Priority() : Integer {
    return _owner.ExposureCoverage.Pattern.Priority
  }

  override public property get Description() : String {
    return _owner.ExposureCoverage.Pattern.Name
  }

}