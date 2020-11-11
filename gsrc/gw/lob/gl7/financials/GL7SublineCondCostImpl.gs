package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl

uses java.lang.Integer

class GL7SublineCondCostImpl extends GenericLobCostMethodsImpl<GL7SublineCondCost> {

  construct(owner : GL7SublineCondCost) {
    super(owner)
  }

  override property get Coverage() : Coverage {
    return null
  }

  override property get OwningCoverable() : Coverable {
    return _owner.SublineCondition.OwningCoverable
  }

  override property get Jurisdiction() : Jurisdiction {
    return _owner.OwningCoverable.CoverableState
  }

  override public property get Priority() : Integer {
    return _owner.SublineCondition.Pattern.Priority
  }

  override public property get Description() : String {
    return _owner.SublineCondition.Pattern.Name
  }

}
