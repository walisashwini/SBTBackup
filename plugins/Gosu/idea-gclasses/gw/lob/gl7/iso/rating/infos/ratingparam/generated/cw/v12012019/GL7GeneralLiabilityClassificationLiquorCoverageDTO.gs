package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityClassificationLiquorCoverageDTO extends gw.rating.LineModelObject {

  public construct(_gL7ClassificationLiquor : GL7ClassificationLiquor, parent : GL7GeneralLiabilityClassificationDTO) {
  
    _parent = parent
    _dataModel = _gL7ClassificationLiquor
    _displayName = _gL7ClassificationLiquor.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityClassificationLiquorCoverageDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _coverageOnPolicyIndicator : java.lang.Integer as CoverageOnPolicyIndicator = 0

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _yearInClaimsMade : java.lang.Integer as YearInClaimsMade = 0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("Subline")
  protected var _subline : java.lang.String as Subline = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("RatingIDStatCode")
  protected var _ratingIDStatCode : java.lang.String as RatingIDStatCode = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("PremiumBasis")
  protected var _premiumBasis : java.lang.String as PremiumBasis = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("PDDedStatCode")
  protected var _pDDedStatCode : java.lang.String as PDDedStatCode = ""

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
  @gw.lob.common.annotations.StatCode("LCMStatCode")
  protected var _lCMStatCode : java.lang.String as LCMStatCode = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("LCM")
  protected var _lCM : java.math.BigDecimal as LCM = 0.0

  @VisibleInRateflow
  protected var _iLF : java.math.BigDecimal as ILF = 0.0

  @VisibleInRateflow
  protected var _finalRate : java.math.BigDecimal as FinalRate = 0.0

  @VisibleInRateflow
  protected var _finalILF : java.math.BigDecimal as FinalILF = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("ExposureStatCode")
  protected var _exposureStatCode : java.lang.String as ExposureStatCode = ""

  @VisibleInRateflow
  protected var _eLPOverride : java.math.BigDecimal as ELPOverride = 0.0

  @VisibleInRateflow
  protected var _eLP : java.math.BigDecimal as ELP = 0.0

  @VisibleInRateflow
  protected var _deductibleFactorOverride : java.math.BigDecimal as DeductibleFactorOverride = 0.0

  @VisibleInRateflow
  protected var _deductibleFactor : java.math.BigDecimal as DeductibleFactor = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("CovStatCode")
  protected var _coverageStatCode : java.lang.String as CoverageStatCode = ""

  @VisibleInRateflow
  protected var _claimsMadeMultiplier : java.math.BigDecimal as ClaimsMadeMultiplier = 0.0

  @VisibleInRateflow
  protected var _baseRate : java.math.BigDecimal as BaseRate = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("BIDedStatCode")
  protected var _bIDedStatCode : java.lang.String as BIDedStatCode = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ClassificationLiquor {
   return _dataModel as GL7ClassificationLiquor
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