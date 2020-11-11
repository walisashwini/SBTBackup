package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityCertifiedActsOfTerrorismAggregateLimitCapOnLossesFromCertifiedActsOfTerrorismPremOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityCertifiedActsOfTerrorismAggregateLimitCapOnLossesFromCertifiedActsOfTerrorismPremOpsDTO {

  public construct(_gL7CertifiedActsOfTerrAggLimitCapOnLossesFromCerti : GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCerti, parent : GL7GeneralLiabilityDTO) {
    super( _gL7CertifiedActsOfTerrAggLimitCapOnLossesFromCerti, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityCertifiedActsOfTerrorismAggregateLimitCapOnLossesFromCertifiedActsOfTerrorismPremOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}