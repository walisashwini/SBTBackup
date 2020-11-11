package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDamageToPremisesRentedToYouCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDamageToPremisesRentedToYouCoverageDTO {

  public construct(_gL7DamageToPremisesRentedToYou : GL7DamageToPremisesRentedToYou, parent : GL7GeneralLiabilityDTO) {
    super( _gL7DamageToPremisesRentedToYou, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDamageToPremisesRentedToYouCoverageDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}