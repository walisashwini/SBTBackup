package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl

uses java.lang.Integer

class GL7ExposureExclCostImpl extends GenericLobCostMethodsImpl<GL7ExposureExclCost> {

  construct(owner : GL7ExposureExclCost) {
    super(owner)
  }

  override property get Coverage() : Coverage {
    return null
  }

  override property get OwningCoverable() : Coverable {
    return _owner.ExposureExclusion.OwningCoverable
  }

  override property get Jurisdiction() : Jurisdiction {
    return _owner.OwningCoverable.CoverableState
  }

  override public property get Priority() : Integer {
    return _owner.ExposureExclusion.Pattern.Priority
  }

  override public property get Description() : String {
    return _owner.ExposureExclusion.Pattern.Name
  }

}
