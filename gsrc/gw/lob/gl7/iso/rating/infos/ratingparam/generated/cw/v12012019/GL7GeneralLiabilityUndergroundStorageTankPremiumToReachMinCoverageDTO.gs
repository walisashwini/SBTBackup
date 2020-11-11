package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityUndergroundStorageTankPremiumToReachMinCoverageDTO extends gw.rating.LineModelObject {

  public construct(_gL7UndergroundStorageTankPremiumToReachMin : GL7UndergroundStorageTankPremiumToReachMin, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7UndergroundStorageTankPremiumToReachMin
    _displayName = _gL7UndergroundStorageTankPremiumToReachMin.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityUndergroundStorageTankPremiumToReachMinCoverageDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _coverageOnPolicyIndicator : java.lang.Integer as CoverageOnPolicyIndicator = 0

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7UndergroundStorageTankPremiumToReachMin {
   return _dataModel as GL7UndergroundStorageTankPremiumToReachMin
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent
  }
  

  
}