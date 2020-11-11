package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDamageToPremRentedToYouDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDamageToPremRentedToYouDTO {

  public construct(_gL7ExclDamageToPremRentedToYou : GL7ExclDamageToPremRentedToYou, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclDamageToPremRentedToYou, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclDamageToPremRentedToYouDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}