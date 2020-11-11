package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl

class GL7UAircrSchedCondItemCovCostImpl extends GenericLobCostMethodsImpl<GL7UAircrSchedCondItemCovCost> {

  construct(owner : GL7UAircrSchedCondItemCovCost) {
    super(owner)
  }

  override property get Coverage() : Coverage {
    return _owner.UAircrSchedCondItemCov
  }

  override property get OwningCoverable() : Coverable {
    return _owner.UAircrSchedCondItemCov.OwningCoverable
  }

  override public property get Priority() : Integer {
    return _owner.UAircrSchedCondItemCov.Pattern.Priority
  }

  override public property get Description() : String {
    return _owner.UAircrSchedCondItemCov.Pattern.Name
  }
}