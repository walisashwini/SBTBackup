package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdVolunteerWorkersPollutionLimitedUSTDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdVolunteerWorkersPollutionLimitedUSTDTO {

  public construct(_gL7AddlInsdVolunteerWorkersPollutionLmtdUST : GL7AddlInsdVolunteerWorkersPollutionLmtdUST, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdVolunteerWorkersPollutionLmtdUST, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdVolunteerWorkersPollutionLimitedUSTDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}