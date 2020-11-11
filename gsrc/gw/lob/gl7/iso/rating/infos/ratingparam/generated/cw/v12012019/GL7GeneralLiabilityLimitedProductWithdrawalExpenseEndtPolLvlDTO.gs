package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityLimitedProductWithdrawalExpenseEndtPolLvlDTO extends gw.rating.LineModelObject {

  public construct(_gL7LmtdProductWithdrawalExpenseEndtPolLvl : GL7LmtdProductWithdrawalExpenseEndtPolLvl, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7LmtdProductWithdrawalExpenseEndtPolLvl
    _aggregateLimit = _gL7LmtdProductWithdrawalExpenseEndtPolLvl.GL7AggLimit8Term.OptionValue.DisplayName
    _cutOffDate = _gL7LmtdProductWithdrawalExpenseEndtPolLvl.GL7CutOffDateTerm.Value
    _deductible = _gL7LmtdProductWithdrawalExpenseEndtPolLvl.GL7DedTerm.OptionValue.DisplayName
    _manualPremium = _gL7LmtdProductWithdrawalExpenseEndtPolLvl.GL7ManualPremium131Term.Value
    _participationPctgPerProdWithdrawal = _cf.makeIntegerFrom (_gL7LmtdProductWithdrawalExpenseEndtPolLvl.GL7ParticipationPctgPerProdWithdrawalTerm.Value)
    _displayName = _gL7LmtdProductWithdrawalExpenseEndtPolLvl.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedProductWithdrawalExpenseEndtPolLvlDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _limitedProductWithdrawalExpenseEndtPremiumToReachMinCoveragePolLvl : GL7GeneralLiabilityLimitedProductWithdrawalExpenseEndtPremiumToReachMinCoveragePolLvlDTO as readonly LimitedProductWithdrawalExpenseEndtPremiumToReachMinCoveragePolLvl  

  @VisibleInRateflow
  protected var _limitedProductWithdrawalExpenseCoverage : GL7GeneralLiabilityLimitedProductWithdrawalExpenseCoverageDTO as readonly LimitedProductWithdrawalExpenseCoverage  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("Subline")
  protected var _subline : java.lang.String as Subline = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("RiskIDStatCode")
  protected var _riskIDStatCode : java.lang.String as RiskIDStatCode = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("RatingIDStatCode")
  protected var _ratingIDStatCode : java.lang.String as RatingIDStatCode = ""

  @VisibleInRateflow
  protected var _premiumToBeDisplayed : java.math.BigDecimal as PremiumToBeDisplayed = 0.0

  @VisibleInRateflow
  protected var _premiumDiscountCharge : java.math.BigDecimal as PremiumDiscountCharge = 0.0

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _participationPctgPerProdWithdrawal : java.lang.Integer as ParticipationPctgPerProdWithdrawal = 0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("PDDedStatCode")
  protected var _pDDedStatCode : java.lang.String as PDDedStatCode = ""

  @VisibleInRateflow
  protected var _minPremium : java.math.BigDecimal as MinPremium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("LmtsIdentifierStatCode")
  protected var _limitsIdentifierStatCode : java.lang.String as LimitsIdentifierStatCode = ""

  @VisibleInRateflow
  protected var _limitedProductWithdrawalExpenseMinPremium : java.math.BigDecimal as LimitedProductWithdrawalExpenseMinPremium = 0.0

  @VisibleInRateflow
  protected var _limitedProductWithdrawalClassPremium : java.math.BigDecimal as LimitedProductWithdrawalClassPremium = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("LimStatCode")
  protected var _limitStatCode : java.lang.String as LimitStatCode = ""

  @VisibleInRateflow
  protected var _deductible : java.lang.String as Deductible = ""

  @VisibleInRateflow
  protected var _cutOffDate : java.util.Date as CutOffDate = new java.util.Date()

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("BIDedStatCode")
  protected var _bIDedStatCode : java.lang.String as BIDedStatCode = ""

  @VisibleInRateflow
  protected var _aggregateLimit : java.lang.String as AggregateLimit = ""

  @VisibleInRateflow
  protected var _adjustedMinPremium : java.math.BigDecimal as AdjustedMinPremium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7LmtdProductWithdrawalExpenseEndtPolLvl {
   return _dataModel as GL7LmtdProductWithdrawalExpenseEndtPolLvl
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent
  }
  

  
}