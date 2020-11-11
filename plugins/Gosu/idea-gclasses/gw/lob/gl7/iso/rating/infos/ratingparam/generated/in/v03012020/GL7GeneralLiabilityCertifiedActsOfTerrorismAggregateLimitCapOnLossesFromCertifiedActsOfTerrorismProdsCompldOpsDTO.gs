package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityCertifiedActsOfTerrorismAggregateLimitCapOnLossesFromCertifiedActsOfTerrorismProdsCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityCertifiedActsOfTerrorismAggregateLimitCapOnLossesFromCertifiedActsOfTerrorismProdsCompldOpsDTO {

  public construct(_gL7CertifiedActsOfTerrAggLimitCapOnLossesFromCert1 : GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCert1, parent : GL7GeneralLiabilityDTO) {
    super( _gL7CertifiedActsOfTerrAggLimitCapOnLossesFromCert1, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityCertifiedActsOfTerrorismAggregateLimitCapOnLossesFromCertifiedActsOfTerrorismProdsCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}