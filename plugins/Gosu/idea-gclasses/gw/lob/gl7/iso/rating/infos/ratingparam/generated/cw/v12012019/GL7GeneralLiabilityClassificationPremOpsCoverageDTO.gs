package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityClassificationPremOpsCoverageDTO extends gw.rating.LineModelObject {

  public construct(_gL7ClassificationPremOps : GL7ClassificationPremOps, parent : GL7GeneralLiabilityClassificationDTO) {
  
    _parent = parent
    _dataModel = _gL7ClassificationPremOps
    _displayName = _gL7ClassificationPremOps.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityClassificationPremOpsCoverageDTO {
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
  protected var _sprayPainting : java.lang.String as SprayPainting = ""

  @VisibleInRateflow
  protected var _splitLimitWeightFactorPremOpsPD : java.math.BigDecimal as SplitLimitWeightFactorPremOpsPD = 0.0

  @VisibleInRateflow
  protected var _splitLimitWeightFactorPremOpsConstant : java.math.BigDecimal as SplitLimitWeightFactorPremOpsConstant = 0.0

  @VisibleInRateflow
  protected var _splitLimitWeightFactorPremOpsBI : java.math.BigDecimal as SplitLimitWeightFactorPremOpsBI = 0.0

  @VisibleInRateflow
  protected var _specialCombinedMinimumPremium : java.math.BigDecimal as SpecialCombinedMinimumPremium = 0.0

  @VisibleInRateflow
  protected var _specialCombinedMinPremium : java.math.BigDecimal as SpecialCombinedMinPremium = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("RatingIDStatCode")
  protected var _ratingIDStatCode : java.lang.String as RatingIDStatCode = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("PremiumBasis")
  protected var _premiumBasis : java.lang.String as PremiumBasis = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _premOpsPDDeductibleFactorOverride : java.math.BigDecimal as PremOpsPDDeductibleFactorOverride = 0.0

  @VisibleInRateflow
  protected var _premOpsPDDeductibleFactorBeforeAdjustment : java.math.BigDecimal as PremOpsPDDeductibleFactorBeforeAdjustment = 0.0

  @VisibleInRateflow
  protected var _premOpsPDDeductibleFactor : java.math.BigDecimal as PremOpsPDDeductibleFactor = 0.0

  @VisibleInRateflow
  protected var _premOpsLossCost : java.math.BigDecimal as PremOpsLossCost = 0.0

  @VisibleInRateflow
  protected var _premOpsELPOverride : java.math.BigDecimal as PremOpsELPOverride = 0.0

  @VisibleInRateflow
  protected var _premOpsELP : java.math.BigDecimal as PremOpsELP = 0.0

  @VisibleInRateflow
  protected var _premOpsBIPDDeductibleFactorOverride : java.math.BigDecimal as PremOpsBIPDDeductibleFactorOverride = 0.0

  @VisibleInRateflow
  protected var _premOpsBIPDDeductibleFactorBeforeAdjustment : java.math.BigDecimal as PremOpsBIPDDeductibleFactorBeforeAdjustment = 0.0

  @VisibleInRateflow
  protected var _premOpsBIDeductibleFactorOverride : java.math.BigDecimal as PremOpsBIDeductibleFactorOverride = 0.0

  @VisibleInRateflow
  protected var _premOpsBIDeductibleFactor : java.math.BigDecimal as PremOpsBIDeductibleFactor = 0.0

  @VisibleInRateflow
  protected var _pDILF : java.math.BigDecimal as PDILF = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("PDDedStatCode")
  protected var _pDDedStatCode : java.lang.String as PDDedStatCode = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("MoldStatCode")
  protected var _moldStatCode : java.lang.String as MoldStatCode = ""

  @VisibleInRateflow
  protected var _minimumPremium : java.math.BigDecimal as MinimumPremium = 0.0

  @VisibleInRateflow
  protected var _minPremium : java.math.BigDecimal as MinPremium = 0.0

  @VisibleInRateflow
  protected var _medicalPaymentsFactor : java.math.BigDecimal as MedicalPaymentsFactor = 0.0

  @VisibleInRateflow
  protected var _medicalPaymentsCharge : java.math.BigDecimal as MedicalPaymentsCharge = 0.0

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
  protected var _finalRate : java.math.BigDecimal as FinalRate = 0.0

  @VisibleInRateflow
  protected var _finalPremOpsIncrdLimitTableAssignment : java.lang.String as FinalPremOpsIncrdLimitTableAssignment = ""

  @VisibleInRateflow
  protected var _finalILF : java.math.BigDecimal as FinalILF = 0.0

  @VisibleInRateflow
  protected var _finalDeductibleFactor : java.math.BigDecimal as FinalDeductibleFactor = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("ExposureStatCode")
  protected var _exposureStatCode : java.lang.String as ExposureStatCode = ""

  @VisibleInRateflow
  protected var _deductibleFactor : java.math.BigDecimal as DeductibleFactor = 0.0

  @VisibleInRateflow
  protected var _dedFactorPremOpsPD250PerClaim : java.math.BigDecimal as DedFactorPremOpsPD250PerClaim = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("CovStatCode")
  protected var _coverageStatCode : java.lang.String as CoverageStatCode = ""

  @VisibleInRateflow
  protected var _classCode : java.lang.String as ClassCode = ""

  @VisibleInRateflow
  protected var _claimsMadeMultiplier : java.math.BigDecimal as ClaimsMadeMultiplier = 0.0

  @VisibleInRateflow
  protected var _cSLILF : java.math.BigDecimal as CSLILF = 0.0

  @VisibleInRateflow
  protected var _bringYourOwnAlcoholExclusionFactor : java.math.BigDecimal as BringYourOwnAlcoholExclusionFactor = 0.0

  @VisibleInRateflow
  protected var _basicLimitPremium : java.math.BigDecimal as BasicLimitPremium = 0.0

  @VisibleInRateflow
  protected var _baseRate : java.math.BigDecimal as BaseRate = 0.0

  @VisibleInRateflow
  protected var _bIILF : java.math.BigDecimal as BIILF = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("BIDedStatCode")
  protected var _bIDedStatCode : java.lang.String as BIDedStatCode = ""

  @VisibleInRateflow
  protected var _additionalInterestFactor : java.math.BigDecimal as AdditionalInterestFactor = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ClassificationPremOps {
   return _dataModel as GL7ClassificationPremOps
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