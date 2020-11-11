package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl

class GL7UAircrSchedExclItemCovCostImpl extends GenericLobCostMethodsImpl<GL7UAircrSchedExclItemCovCost> {

  construct(owner : GL7UAircrSchedExclItemCovCost) {
    super(owner)
  }

  override property get Coverage() : Coverage {
    return _owner.UAircrSchedExclItemCov
  }

  override property get OwningCoverable() : Coverable {
    return _owner.UAircrSchedExclItemCov.OwningCoverable
  }

  override public property get Priority() : Integer {
    return _owner.UAircrSchedExclItemCov.Pattern.Priority
  }

  override public property get Description() : String {
    return _owner.UAircrSchedExclItemCov.Pattern.Name
  }
}