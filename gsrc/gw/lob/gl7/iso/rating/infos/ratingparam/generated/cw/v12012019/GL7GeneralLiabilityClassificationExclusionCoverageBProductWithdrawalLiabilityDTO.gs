package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityClassificationExclusionCoverageBProductWithdrawalLiabilityDTO extends gw.rating.LineModelObject {

  public construct(_gL7ClassificationExclCovBProductWithdrawalLiab : GL7ClassificationExclCovBProductWithdrawalLiab, parent : GL7GeneralLiabilityClassificationDTO) {
  
    _parent = parent
    _dataModel = _gL7ClassificationExclCovBProductWithdrawalLiab
    _displayName = _gL7ClassificationExclCovBProductWithdrawalLiab.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityClassificationExclusionCoverageBProductWithdrawalLiabilityDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _coverageOnPolicyIndicator : java.lang.Integer as CoverageOnPolicyIndicator = 0

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _productWithdrawlLiabilityFactor : java.math.BigDecimal as ProductWithdrawlLiabilityFactor = 0.0

  @VisibleInRateflow
  protected var _premiumDiscountCharge : java.math.BigDecimal as PremiumDiscountCharge = 0.0

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _lossCost : java.math.BigDecimal as LossCost = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("LCMStatCode")
  protected var _lCMStatCode : java.lang.String as LCMStatCode = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("LCM")
  protected var _lCM : java.math.BigDecimal as LCM = 0.0

  @VisibleInRateflow
  protected var _finalRate : java.math.BigDecimal as FinalRate = 0.0

  @VisibleInRateflow
  protected var _finalILF : java.math.BigDecimal as FinalILF = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("ExposureStatCode")
  protected var _exposureStatCode : java.lang.String as ExposureStatCode = ""

  @VisibleInRateflow
  protected var _eLP : java.math.BigDecimal as ELP = 0.0

  @VisibleInRateflow
  protected var _deductibleFactor : java.math.BigDecimal as DeductibleFactor = 0.0

  @VisibleInRateflow
  protected var _cSLILF : java.math.BigDecimal as CSLILF = 0.0

  @VisibleInRateflow
  protected var _baseRate : java.math.BigDecimal as BaseRate = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ClassificationExclCovBProductWithdrawalLiab {
   return _dataModel as GL7ClassificationExclCovBProductWithdrawalLiab
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityClassificationDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityClassificationDTO {
   return _parent
  }
  

  
}