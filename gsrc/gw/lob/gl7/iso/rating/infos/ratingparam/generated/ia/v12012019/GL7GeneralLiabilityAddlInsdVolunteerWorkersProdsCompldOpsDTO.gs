package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdVolunteerWorkersProdsCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdVolunteerWorkersProdsCompldOpsDTO {

  public construct(_gL7AddlInsdVolunteerWorkersProdsCompldOps : GL7AddlInsdVolunteerWorkersProdsCompldOps, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdVolunteerWorkersProdsCompldOps, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdVolunteerWorkersProdsCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}