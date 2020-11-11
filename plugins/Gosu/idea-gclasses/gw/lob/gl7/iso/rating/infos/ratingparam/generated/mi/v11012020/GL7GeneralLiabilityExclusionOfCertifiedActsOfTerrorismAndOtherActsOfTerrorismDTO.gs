package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionOfCertifiedActsOfTerrorismAndOtherActsOfTerrorismDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionOfCertifiedActsOfTerrorismAndOtherActsOfTerrorismDTO {

  public construct(_gL7ExclOfCertifiedActsOfTerrAndOtherActsOfTerr : GL7ExclOfCertifiedActsOfTerrAndOtherActsOfTerr, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclOfCertifiedActsOfTerrAndOtherActsOfTerr, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionOfCertifiedActsOfTerrorismAndOtherActsOfTerrorismDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}