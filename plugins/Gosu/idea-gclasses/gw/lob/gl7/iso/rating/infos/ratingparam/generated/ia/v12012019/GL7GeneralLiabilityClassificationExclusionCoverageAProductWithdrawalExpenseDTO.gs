package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityClassificationExclusionCoverageAProductWithdrawalExpenseDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityClassificationExclusionCoverageAProductWithdrawalExpenseDTO {

  public construct(_gL7ClassificationExclCovAProductWithdrawalExpense : GL7ClassificationExclCovAProductWithdrawalExpense, parent : GL7GeneralLiabilityClassificationDTO) {
    super( _gL7ClassificationExclCovAProductWithdrawalExpense, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityClassificationExclusionCoverageAProductWithdrawalExpenseDTO {
   return this
  }
  

  
  @VisibleInRateflow
  override property get CoverageOnPolicyIndicator() : java.lang.Integer {
   var coverageOnPolicyIndicator : java.lang.Integer = 0
   var tempParentLineModelObject = ParentLineModelObject.ParentLineModelObject.ParentLineModelObject
   if (tempParentLineModelObject.Subline == "Product Withdrawal" && (tempParentLineModelObject.ProductWithdrawalCoverageType == "Expense" || tempParentLineModelObject.ProductWithdrawalCoverageType == "Both Expense and Liability")) {
     coverageOnPolicyIndicator = 1
   } else {
     coverageOnPolicyIndicator = 0
   }
   return coverageOnPolicyIndicator
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityClassificationDTO {
   return _parent as GL7GeneralLiabilityClassificationDTO
  }
  

  
}