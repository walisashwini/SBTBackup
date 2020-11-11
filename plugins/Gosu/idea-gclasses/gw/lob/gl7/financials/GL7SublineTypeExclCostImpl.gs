package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl

uses java.lang.Integer

class GL7SublineTypeExclCostImpl extends GenericLobCostMethodsImpl<GL7SublineTypeExclCost> {

  construct(owner : GL7SublineTypeExclCost) {
    super(owner)
  }

  override property get Coverage() : Coverage {
    return null
  }

  override property get OwningCoverable() : Coverable {
    return _owner.SublineTypeExclusion.OwningCoverable
  }

  override property get Jurisdiction() : Jurisdiction {
    return _owner.OwningCoverable.CoverableState
  }

  override public property get Priority() : Integer {
    return _owner.SublineTypeExclusion.Pattern.Priority
  }

  override public property get Description() : String {
    return _owner.SublineTypeExclusion.Pattern.Name
  }

}
