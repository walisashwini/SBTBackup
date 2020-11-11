package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityPremiumAuditNoncomplianceChargeOwnersContractorsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityPremiumAuditNoncomplianceChargeOwnersContractorsDTO {

  public construct(_gL7PremiumAuditNoncomplianceChargeOwnersContractor : GL7PremiumAuditNoncomplianceChargeOwnersContractor, parent : GL7GeneralLiabilityDTO) {
    super( _gL7PremiumAuditNoncomplianceChargeOwnersContractor, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPremiumAuditNoncomplianceChargeOwnersContractorsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}