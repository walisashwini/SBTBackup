package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityProductWithdrawalPremiumToReachMinCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityProductWithdrawalPremiumToReachMinCoverageDTO {

  public construct(_gL7ProductWithdrawalPremiumToReachMin : GL7ProductWithdrawalPremiumToReachMin, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ProductWithdrawalPremiumToReachMin, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityProductWithdrawalPremiumToReachMinCoverageDTO {
   return this
  }
  

  
  @VisibleInRateflow
  override property get CoverageOnPolicyIndicator() : java.lang.Integer {
   var coverageOnPolicyIndicator : java.lang.Integer = 0
   if (ParentLineModelObject.Subline == "Product Withdrawal" && _cf.exists(ParentLineModelObject.ProductWithdrawalCoverageForm)) {
     coverageOnPolicyIndicator = 1
   } else {
     coverageOnPolicyIndicator = 0
   }
   return coverageOnPolicyIndicator
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}