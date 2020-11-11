package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl
uses java.lang.Integer

class GL7SublineTypeCondCostImpl extends GenericLobCostMethodsImpl<GL7SublineTypeCondCost> {

  construct(owner : GL7SublineTypeCondCost) {
    super(owner)
  }

  override property get Coverage() : Coverage {
    return null
  }

  override property get OwningCoverable() : Coverable {
    return _owner.SublineTypeCondition.OwningCoverable
  }

  override property get Jurisdiction() : Jurisdiction {
    return _owner.OwningCoverable.CoverableState
  }

  override public property get Priority() : Integer {
    return _owner.SublineTypeCondition.Pattern.Priority
  }

  override public property get Description() : String {
    return _owner.SublineTypeCondition.Pattern.Name
  }

}
