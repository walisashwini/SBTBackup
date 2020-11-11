package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclEmployeesAndVolunteerWorkersAsInsuredsEDLDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclEmployeesAndVolunteerWorkersAsInsuredsEDLDTO {

  public construct(_gL7ExclEmplsAndVolunteerWorkersAsInsuredsEDL : GL7ExclEmplsAndVolunteerWorkersAsInsuredsEDL, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclEmplsAndVolunteerWorkersAsInsuredsEDL, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclEmployeesAndVolunteerWorkersAsInsuredsEDLDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}