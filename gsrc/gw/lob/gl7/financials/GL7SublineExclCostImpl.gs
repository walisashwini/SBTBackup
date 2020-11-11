package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl

uses java.lang.Integer

class GL7SublineExclCostImpl extends GenericLobCostMethodsImpl<GL7SublineExclCost> {

  construct(owner : GL7SublineExclCost) {
    super(owner)
  }

  override property get Coverage() : Coverage {
    return null
  }

  override property get OwningCoverable() : Coverable {
    return _owner.SublineExclusion.OwningCoverable
  }

  override property get Jurisdiction() : Jurisdiction {
    return _owner.OwningCoverable.CoverableState
  }

  override public property get Priority() : Integer {
    return _owner.SublineExclusion.Pattern.Priority
  }

  override public property get Description() : String {
    return _owner.SublineExclusion.Pattern.Name
  }

}
