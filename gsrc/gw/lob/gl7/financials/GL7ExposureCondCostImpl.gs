package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl

uses java.lang.Integer

class GL7ExposureCondCostImpl extends GenericLobCostMethodsImpl<GL7ExposureCondCost> {

  construct(owner : GL7ExposureCondCost) {
    super(owner)
  }

  override property get Coverage() : Coverage {
    return null
  }

  override property get OwningCoverable() : Coverable {
    return _owner.ExposureCondition.OwningCoverable
  }

  override property get Jurisdiction() : Jurisdiction {
    return _owner.OwningCoverable.CoverableState
  }

  override public property get Priority() : Integer {
    return _owner.ExposureCondition.Pattern.Priority
  }

  override public property get Description() : String {
    return _owner.ExposureCondition.Pattern.Name
  }

}