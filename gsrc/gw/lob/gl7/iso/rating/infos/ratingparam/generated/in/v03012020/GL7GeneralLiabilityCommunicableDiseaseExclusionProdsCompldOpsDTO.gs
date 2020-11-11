package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityCommunicableDiseaseExclusionProdsCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityCommunicableDiseaseExclusionProdsCompldOpsDTO {

  public construct(_gL7CommunicableDiseaseExclProdsCompldOps : GL7CommunicableDiseaseExclProdsCompldOps, parent : GL7GeneralLiabilityDTO) {
    super( _gL7CommunicableDiseaseExclProdsCompldOps, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityCommunicableDiseaseExclusionProdsCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}