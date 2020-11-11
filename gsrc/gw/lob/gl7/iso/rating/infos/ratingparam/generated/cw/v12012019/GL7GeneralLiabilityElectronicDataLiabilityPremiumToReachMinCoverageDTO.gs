package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityElectronicDataLiabilityPremiumToReachMinCoverageDTO extends gw.rating.LineModelObject {

  public construct(_gL7ElectrDataLiabPremiumToReachMin : GL7ElectrDataLiabPremiumToReachMin, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7ElectrDataLiabPremiumToReachMin
    _displayName = _gL7ElectrDataLiabPremiumToReachMin.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityElectronicDataLiabilityPremiumToReachMinCoverageDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _coverageOnPolicyIndicator : java.lang.Integer as CoverageOnPolicyIndicator = 0

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ElectrDataLiabPremiumToReachMin {
   return _dataModel as GL7ElectrDataLiabPremiumToReachMin
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