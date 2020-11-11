package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedTerrorismExclOtherThanCertifiedActsOfTerrorismCapOnLossesFromCertifiedActsOfTerrorismDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedTerrorismExclOtherThanCertifiedActsOfTerrorismCapOnLossesFromCertifiedActsOfTerrorismDTO {

  public construct(_gL7LmtdTerrExclOthThanCertifiedActsOfTerrCapOnLoss : GL7LmtdTerrExclOthThanCertifiedActsOfTerrCapOnLoss, parent : GL7GeneralLiabilityDTO) {
    super( _gL7LmtdTerrExclOthThanCertifiedActsOfTerrCapOnLoss, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedTerrorismExclOtherThanCertifiedActsOfTerrorismCapOnLossesFromCertifiedActsOfTerrorismDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}