package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclPersonalAdvertisingInjuryDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclPersonalAdvertisingInjuryDTO {

  public construct(_gL7ExclPersonalAdvertisingInjury : GL7ExclPersonalAdvertisingInjury, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclPersonalAdvertisingInjury, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclPersonalAdvertisingInjuryDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}