package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclEmployeesAndVolunteerWorkersAsInsuredsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclEmployeesAndVolunteerWorkersAsInsuredsDTO {

  public construct(_gL7ExclEmplsAndVolunteerWorkersAsInsureds : GL7ExclEmplsAndVolunteerWorkersAsInsureds, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclEmplsAndVolunteerWorkersAsInsureds, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclEmployeesAndVolunteerWorkersAsInsuredsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}