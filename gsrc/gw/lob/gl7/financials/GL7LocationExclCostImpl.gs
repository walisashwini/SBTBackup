package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl

uses java.lang.Integer

class GL7LocationExclCostImpl extends GenericLobCostMethodsImpl<GL7LocationExclCost> {

  construct(owner : GL7LocationExclCost) {
    super(owner)
  }

  override property get Coverage() : Coverage {
    return null
  }

  override property get OwningCoverable() : Coverable {
    return _owner.LocationExclusion.OwningCoverable
  }

  override property get Jurisdiction() : Jurisdiction {
    return _owner.OwningCoverable.CoverableState
  }

  override public property get Priority() : Integer {
    return _owner.LocationExclusion.Pattern.Priority
  }

  override public property get Description() : String {
    return _owner.LocationExclusion.Pattern.Name
  }

}
