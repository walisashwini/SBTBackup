package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedProductWithdrawalExpenseCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedProductWithdrawalExpenseCoverageDTO {

  public construct(_gL7LmtdProductWithdrawalExpense1 : GL7LmtdProductWithdrawalExpense1, parent : GL7GeneralLiabilityLimitedProductWithdrawalExpenseEndtPolLvlDTO) {
    super( _gL7LmtdProductWithdrawalExpense1, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedProductWithdrawalExpenseCoverageDTO {
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