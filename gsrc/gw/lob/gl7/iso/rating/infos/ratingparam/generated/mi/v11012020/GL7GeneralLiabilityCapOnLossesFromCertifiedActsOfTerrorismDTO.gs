package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityCapOnLossesFromCertifiedActsOfTerrorismDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityCapOnLossesFromCertifiedActsOfTerrorismDTO {

  public construct(_gL7CapOnLossesFromCertifiedActsOfTerr : GL7CapOnLossesFromCertifiedActsOfTerr, parent : GL7GeneralLiabilityDTO) {
    super( _gL7CapOnLossesFromCertifiedActsOfTerr, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityCapOnLossesFromCertifiedActsOfTerrorismDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}