package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclInjuryToVolunteerFirefightersDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclInjuryToVolunteerFirefightersDTO {

  public construct(_gL7ExclInjuryToVolunteerFirefighters : GL7ExclInjuryToVolunteerFirefighters, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclInjuryToVolunteerFirefighters, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclInjuryToVolunteerFirefightersDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}