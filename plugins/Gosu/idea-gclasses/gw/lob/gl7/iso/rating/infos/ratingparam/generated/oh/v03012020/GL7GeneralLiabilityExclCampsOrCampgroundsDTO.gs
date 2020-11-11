package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclCampsOrCampgroundsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclCampsOrCampgroundsDTO {

  public construct(_gL7ExclCampsOrCampgrounds : GL7ExclCampsOrCampgrounds, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclCampsOrCampgrounds, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclCampsOrCampgroundsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}