package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityTotalPollutionExclusionProdsCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityTotalPollutionExclusionProdsCompldOpsDTO {

  public construct(_gL7TotalPollutionExclProdsCompldOps : GL7TotalPollutionExclProdsCompldOps, parent : GL7GeneralLiabilityDTO) {
    super( _gL7TotalPollutionExclProdsCompldOps, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityTotalPollutionExclusionProdsCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}