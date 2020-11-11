package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityLimitedProductWithdrawalExpenseEndtPremiumToReachMinCoveragePolLvlDTO extends gw.rating.LineModelObject {

  public construct(_gL7LmtdProductWithdrawalExpenseEndtPremiumToReach1 : GL7LmtdProductWithdrawalExpenseEndtPremiumToReach1, parent : GL7GeneralLiabilityLimitedProductWithdrawalExpenseEndtPolLvlDTO) {
  
    _parent = parent
    _dataModel = _gL7LmtdProductWithdrawalExpenseEndtPremiumToReach1
    _displayName = _gL7LmtdProductWithdrawalExpenseEndtPremiumToReach1.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedProductWithdrawalExpenseEndtPremiumToReachMinCoveragePolLvlDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _coverageOnPolicyIndicator : java.lang.Integer as CoverageOnPolicyIndicator = 0

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _minPremium : java.math.BigDecimal as MinPremium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7LmtdProductWithdrawalExpenseEndtPremiumToReach1 {
   return _dataModel as GL7LmtdProductWithdrawalExpenseEndtPremiumToReach1
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityLimitedProductWithdrawalExpenseEndtPolLvlDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLimitedProductWithdrawalExpenseEndtPolLvlDTO {
   return _parent
  }
  

  
}