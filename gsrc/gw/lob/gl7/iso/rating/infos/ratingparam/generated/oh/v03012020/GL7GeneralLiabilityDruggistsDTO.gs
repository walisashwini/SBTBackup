package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDruggistsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDruggistsDTO {

  public construct(_gL7Druggists : GL7Druggists, parent : GL7GeneralLiabilityDTO) {
    super( _gL7Druggists, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDruggistsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}