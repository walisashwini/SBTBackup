package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityProductWithdrawalCoverageFormDTO extends gw.rating.LineModelObject {

  public construct(_gL7ProductWithdrawalCovForm : GL7ProductWithdrawalCovForm, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7ProductWithdrawalCovForm
    _displayName = _gL7ProductWithdrawalCovForm.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityProductWithdrawalCoverageFormDTO {
   return this
  }
  

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
  @gw.lob.common.annotations.StatCode("ProductWithdrawalPDDedStatCode")
  protected var _productWithdrawalPDDedStatCode : java.lang.String as ProductWithdrawalPDDedStatCode = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("ProductWithdrawalBIDedStatCode")
  protected var _productWithdrawalBIDedStatCode : java.lang.String as ProductWithdrawalBIDedStatCode = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _minimumPremium : java.math.BigDecimal as MinimumPremium = 0.0

  @VisibleInRateflow
  protected var _minPremium : java.math.BigDecimal as MinPremium = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("LmtsIdentifierStatCode")
  protected var _limitsIdentifierStatCode : java.lang.String as LimitsIdentifierStatCode = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("LimStatCode")
  protected var _limitStatCode : java.lang.String as LimitStatCode = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("LiabPremium")
  protected var _liabilityPremium : java.lang.Integer as LiabilityPremium = 0

  @VisibleInRateflow
  protected var _lCM : java.math.BigDecimal as LCM = 0.0

  @VisibleInRateflow
  protected var _finalILF : java.math.BigDecimal as FinalILF = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("ExpensePremium")
  protected var _expensePremium : java.lang.Integer as ExpensePremium = 0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("CovStatCode")
  protected var _coverageStatCode : java.lang.String as CoverageStatCode = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ProductWithdrawalCovForm {
   return _dataModel as GL7ProductWithdrawalCovForm
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