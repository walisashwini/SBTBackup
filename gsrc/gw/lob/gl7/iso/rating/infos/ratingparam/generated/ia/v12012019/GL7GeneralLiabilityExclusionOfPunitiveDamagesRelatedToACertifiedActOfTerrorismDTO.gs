package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionOfPunitiveDamagesRelatedToACertifiedActOfTerrorismDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionOfPunitiveDamagesRelatedToACertifiedActOfTerrorismDTO {

  public construct(_gL7ExclOfPunitiveDamagesReltdToACertifiedActOfTerr : GL7ExclOfPunitiveDamagesReltdToACertifiedActOfTerr, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclOfPunitiveDamagesReltdToACertifiedActOfTerr, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionOfPunitiveDamagesRelatedToACertifiedActOfTerrorismDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}