package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl

uses java.lang.Integer

class GL7LineExclCostImpl extends GenericLobCostMethodsImpl<GL7LineExclCost> {

  construct(owner : GL7LineExclCost) {
    super(owner)
  }

  override property get Coverage() : Coverage {
    return null
  }

  override property get OwningCoverable() : Coverable {
    return _owner.LineExclusion.OwningCoverable
  }

  override property get Jurisdiction() : Jurisdiction {
    return _owner.OwningCoverable.CoverableState
  }

  override public property get Priority() : Integer {
    return _owner.LineExclusion.Pattern.Priority
  }

  override public property get Description() : String {
    return _owner.LineExclusion.Pattern.Name
  }

}
