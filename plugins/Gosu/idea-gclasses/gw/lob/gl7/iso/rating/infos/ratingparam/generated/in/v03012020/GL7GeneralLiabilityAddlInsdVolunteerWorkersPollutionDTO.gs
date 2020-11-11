package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdVolunteerWorkersPollutionDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdVolunteerWorkersPollutionDTO {

  public construct(_gL7AddlInsdVolunteerWorkersPollution : GL7AddlInsdVolunteerWorkersPollution, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdVolunteerWorkersPollution, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdVolunteerWorkersPollutionDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}