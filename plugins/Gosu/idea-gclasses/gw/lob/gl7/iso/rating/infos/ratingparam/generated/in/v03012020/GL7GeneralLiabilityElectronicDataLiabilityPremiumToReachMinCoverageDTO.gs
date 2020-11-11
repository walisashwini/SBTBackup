package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityElectronicDataLiabilityPremiumToReachMinCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityElectronicDataLiabilityPremiumToReachMinCoverageDTO {

  public construct(_gL7ElectrDataLiabPremiumToReachMin : GL7ElectrDataLiabPremiumToReachMin, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ElectrDataLiabPremiumToReachMin, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityElectronicDataLiabilityPremiumToReachMinCoverageDTO {
   return this
  }
  

  
  @VisibleInRateflow
  override property get CoverageOnPolicyIndicator() : java.lang.Integer {
   return 1
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}