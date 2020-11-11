package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl

uses java.lang.Integer

class GL7LocationCondCostImpl extends GenericLobCostMethodsImpl<GL7LocationCondCost> {

  construct(owner : GL7LocationCondCost) {
    super(owner)
  }

  override property get Coverage() : Coverage {
    return null
  }

  override property get OwningCoverable() : Coverable {
    return _owner.LocationCondition.OwningCoverable
  }

  override property get Jurisdiction() : Jurisdiction {
    return _owner.OwningCoverable.CoverableState
  }

  override public property get Priority() : Integer {
    return _owner.LocationCondition.Pattern.Priority
  }

  override public property get Description() : String {
    return _owner.LocationCondition.Pattern.Name
  }

}