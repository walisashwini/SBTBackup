package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl
uses java.lang.Integer

class GL7LineCondCostImpl extends GenericLobCostMethodsImpl<GL7LineCondCost> {

  construct(owner : GL7LineCondCost) {
    super(owner)
  }

  override property get Coverage() : Coverage {
    return null
  }

  override property get OwningCoverable() : Coverable {
    return _owner.LineCondition.OwningCoverable
  }

  override property get Jurisdiction() : Jurisdiction {
    return _owner.OwningCoverable.CoverableState
  }

  override public property get Priority() : Integer {
    return _owner.LineCondition.Pattern.Priority
  }

  override public property get Description() : String {
    return _owner.LineCondition.Pattern.Name
  }

}
