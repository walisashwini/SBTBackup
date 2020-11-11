package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl

class GL7UAircrSchedCovItemCovCostImpl extends GenericLobCostMethodsImpl<GL7UAircrSchedCovItemCovCost> {

  construct(owner : GL7UAircrSchedCovItemCovCost) {
    super(owner)
  }

  override property get Coverage() : Coverage {
    return _owner.UAircrSchedCovItemCov
  }

  override property get OwningCoverable() : Coverable {
    return _owner.UAircrSchedCovItemCov.OwningCoverable
  }

  override public property get Priority() : Integer {
    return _owner.UAircrSchedCovItemCov.Pattern.Priority
  }

  override public property get Description() : String {
    return _owner.UAircrSchedCovItemCov.Pattern.Name
  }
}