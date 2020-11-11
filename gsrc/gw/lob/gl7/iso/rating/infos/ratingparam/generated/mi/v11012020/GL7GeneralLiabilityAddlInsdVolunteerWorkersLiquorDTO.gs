package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdVolunteerWorkersLiquorDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdVolunteerWorkersLiquorDTO {

  public construct(_gL7AddlInsdVolunteerWorkersLiquor : GL7AddlInsdVolunteerWorkersLiquor, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdVolunteerWorkersLiquor, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdVolunteerWorkersLiquorDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}