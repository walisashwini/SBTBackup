package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityPremiumAuditNoncomplianceChargeDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityPremiumAuditNoncomplianceChargeDTO {

  public construct(_gL7PremiumAuditNoncomplianceCharge : GL7PremiumAuditNoncomplianceCharge, parent : GL7GeneralLiabilityDTO) {
    super( _gL7PremiumAuditNoncomplianceCharge, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPremiumAuditNoncomplianceChargeDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}