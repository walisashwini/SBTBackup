package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedProductWithdrawalExpenseEndtPolLvlDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedProductWithdrawalExpenseEndtPolLvlDTO {

  public construct(_gL7LmtdProductWithdrawalExpenseEndtPolLvl : GL7LmtdProductWithdrawalExpenseEndtPolLvl, parent : GL7GeneralLiabilityDTO) {
    super( _gL7LmtdProductWithdrawalExpenseEndtPolLvl, parent )
    var tempGL7SublineTypes = ParentLineModelObject.AsDataModel.GL7SublineTypes.singleWhere( \ elm -> elm.Subline == Parameters.getParam("GL7SublineType"))
    _limitedProductWithdrawalExpenseCoverage = tempGL7SublineTypes.GL7LmtdProductWithdrawalExpense1 != null ? new GL7GeneralLiabilityLimitedProductWithdrawalExpenseCoverageDTO(tempGL7SublineTypes.GL7LmtdProductWithdrawalExpense1, this) : null
    _limitedProductWithdrawalExpenseEndtPremiumToReachMinCoveragePolLvl = tempGL7SublineTypes.GL7LmtdProductWithdrawalExpenseEndtPremiumToReach1 != null ? new GL7GeneralLiabilityLimitedProductWithdrawalExpenseEndtPremiumToReachMinCoveragePolLvlDTO(tempGL7SublineTypes.GL7LmtdProductWithdrawalExpenseEndtPremiumToReach1, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedProductWithdrawalExpenseEndtPolLvlDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get LimitedProductWithdrawalExpenseEndtPremiumToReachMinCoveragePolLvl() : GL7GeneralLiabilityLimitedProductWithdrawalExpenseEndtPremiumToReachMinCoveragePolLvlDTO {
   return _limitedProductWithdrawalExpenseEndtPremiumToReachMinCoveragePolLvl as GL7GeneralLiabilityLimitedProductWithdrawalExpenseEndtPremiumToReachMinCoveragePolLvlDTO
  }
  

  
  @VisibleInRateflow
  property get LimitedProductWithdrawalExpenseCoverage() : GL7GeneralLiabilityLimitedProductWithdrawalExpenseCoverageDTO {
   return _limitedProductWithdrawalExpenseCoverage as GL7GeneralLiabilityLimitedProductWithdrawalExpenseCoverageDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}