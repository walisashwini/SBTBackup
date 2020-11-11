package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityPollutionPremiumToReachMinCoverageDTO extends gw.rating.LineModelObject {

  public construct(_gL7PollutionPremiumToReachMin : GL7PollutionPremiumToReachMin, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7PollutionPremiumToReachMin
    _displayName = _gL7PollutionPremiumToReachMin.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPollutionPremiumToReachMinCoverageDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _coverageOnPolicyIndicator : java.lang.Integer as CoverageOnPolicyIndicator = 0

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7PollutionPremiumToReachMin {
   return _dataModel as GL7PollutionPremiumToReachMin
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