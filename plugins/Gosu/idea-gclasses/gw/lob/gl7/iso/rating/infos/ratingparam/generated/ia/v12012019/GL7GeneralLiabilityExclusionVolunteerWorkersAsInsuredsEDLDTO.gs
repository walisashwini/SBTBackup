package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionVolunteerWorkersAsInsuredsEDLDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionVolunteerWorkersAsInsuredsEDLDTO {

  public construct(_gL7ExclVolunteerWorkersAsInsuredsEDL1 : GL7ExclVolunteerWorkersAsInsuredsEDL1, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclVolunteerWorkersAsInsuredsEDL1, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionVolunteerWorkersAsInsuredsEDLDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}