package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclRiotCivilCommotionMobActionGovtSubdivisionDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclRiotCivilCommotionMobActionGovtSubdivisionDTO {

  public construct(_gL7ExclRiotCivilCommotionMobActionGovtSubdivision : GL7ExclRiotCivilCommotionMobActionGovtSubdivision, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclRiotCivilCommotionMobActionGovtSubdivision, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclRiotCivilCommotionMobActionGovtSubdivisionDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}