package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedProductWithdrawalExpenseEndtPremiumToReachMinCoveragePolLvlDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedProductWithdrawalExpenseEndtPremiumToReachMinCoveragePolLvlDTO {

  public construct(_gL7LmtdProductWithdrawalExpenseEndtPremiumToReach1 : GL7LmtdProductWithdrawalExpenseEndtPremiumToReach1, parent : GL7GeneralLiabilityLimitedProductWithdrawalExpenseEndtPolLvlDTO) {
    super( _gL7LmtdProductWithdrawalExpenseEndtPremiumToReach1, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedProductWithdrawalExpenseEndtPremiumToReachMinCoveragePolLvlDTO {
   return this
  }
  

  
  @VisibleInRateflow
  override property get CoverageOnPolicyIndicator() : java.lang.Integer {
   var coverageOnPolicyIndicator : java.lang.Integer = 0
   var tempParentLineModelObject = ParentLineModelObject.ParentLineModelObject
   if ((tempParentLineModelObject.Subline == "Premises/Operations and Products/Completed Operations" || tempParentLineModelObject.Subline == "Products/Completed Operations") && tempParentLineModelObject.ProdsWithdrawalCoverage == "Yes") {
     coverageOnPolicyIndicator = 1
   } else {
     coverageOnPolicyIndicator = 0
   }
   return coverageOnPolicyIndicator
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLimitedProductWithdrawalExpenseEndtPolLvlDTO {
   return _parent as GL7GeneralLiabilityLimitedProductWithdrawalExpenseEndtPolLvlDTO
  }
  

  
}