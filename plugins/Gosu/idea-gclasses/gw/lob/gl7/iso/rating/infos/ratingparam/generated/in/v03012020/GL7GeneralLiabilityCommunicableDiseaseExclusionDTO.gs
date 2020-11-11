package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityCommunicableDiseaseExclusionDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityCommunicableDiseaseExclusionDTO {

  public construct(_gL7CommunicableDiseaseExcl : GL7CommunicableDiseaseExcl, parent : GL7GeneralLiabilityDTO) {
    super( _gL7CommunicableDiseaseExcl, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityCommunicableDiseaseExclusionDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}