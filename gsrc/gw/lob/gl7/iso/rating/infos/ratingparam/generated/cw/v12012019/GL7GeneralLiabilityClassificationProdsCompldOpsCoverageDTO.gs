package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityClassificationProdsCompldOpsCoverageDTO extends gw.rating.LineModelObject {

  public construct(_gL7ClassificationProdsCompldOps : GL7ClassificationProdsCompldOps, parent : GL7GeneralLiabilityClassificationDTO) {
  
    _parent = parent
    _dataModel = _gL7ClassificationProdsCompldOps
    _prodsCompldOpsLossCost = ParentLineModelObject.AsDataModel.ProdsCompldOpsLossCost
    _displayName = _gL7ClassificationProdsCompldOps.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityClassificationProdsCompldOpsCoverageDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _coverageOnPolicyIndicator : java.lang.Integer as CoverageOnPolicyIndicator = 0

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _yearInClaimsMade : java.lang.Integer as YearInClaimsMade = 0

  @VisibleInRateflow
  protected var _territory : java.lang.String as Territory = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("Subline")
  protected var _subline : java.lang.String as Subline = ""

  @VisibleInRateflow
  protected var _sprayPainting : java.lang.String as SprayPainting = ""

  @VisibleInRateflow
  protected var _splitLimitWeightFactorProdsPD : java.math.BigDecimal as SplitLimitWeightFactorProdsPD = 0.0

  @VisibleInRateflow
  protected var _splitLimitWeightFactorProdsConstant : java.math.BigDecimal as SplitLimitWeightFactorProdsConstant = 0.0

  @VisibleInRateflow
  protected var _splitLimitWeightFactorProdsBI : java.math.BigDecimal as SplitLimitWeightFactorProdsBI = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("RatingIDStatCode")
  protected var _ratingIDStatCode : java.lang.String as RatingIDStatCode = ""

  @VisibleInRateflow
  protected var _prodsCompldOpsPDDeductibleFactorOverride : java.math.BigDecimal as ProdsCompldOpsPDDeductibleFactorOverride = 0.0

  @VisibleInRateflow
  protected var _prodsCompldOpsPDDeductibleFactorBeforeAdjustment : java.math.BigDecimal as ProdsCompldOpsPDDeductibleFactorBeforeAdjustment = 0.0

  @VisibleInRateflow
  protected var _prodsCompldOpsPDDeductibleFactor : java.math.BigDecimal as ProdsCompldOpsPDDeductibleFactor = 0.0

  @VisibleInRateflow
  protected var _prodsCompldOpsLossCost : java.math.BigDecimal as ProdsCompldOpsLossCost = 0.0

  @VisibleInRateflow
  protected var _prodsCompldOpsELPOverride : java.math.BigDecimal as ProdsCompldOpsELPOverride = 0.0

  @VisibleInRateflow
  protected var _prodsCompldOpsELP : java.math.BigDecimal as ProdsCompldOpsELP = 0.0

  @VisibleInRateflow
  protected var _prodsCompldOpsBIPDDeductibleFactorOverride : java.math.BigDecimal as ProdsCompldOpsBIPDDeductibleFactorOverride = 0.0

  @VisibleInRateflow
  protected var _prodsCompldOpsBIPDDeductibleFactorBeforeAdjustment : java.math.BigDecimal as ProdsCompldOpsBIPDDeductibleFactorBeforeAdjustment = 0.0

  @VisibleInRateflow
  protected var _prodsCompldOpsBIDeductibleFactorOverride : java.math.BigDecimal as ProdsCompldOpsBIDeductibleFactorOverride = 0.0

  @VisibleInRateflow
  protected var _prodsCompldOpsBIDeductibleFactor : java.math.BigDecimal as ProdsCompldOpsBIDeductibleFactor = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("PremiumBasis")
  protected var _premiumBasis : java.lang.String as PremiumBasis = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

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
  protected var _finalProdsCompldOpsIncrdLimitTableAssignment : java.lang.String as FinalProdsCompldOpsIncrdLimitTableAssignment = ""

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
  protected var _dedFactorProdsPD250PerClaim : java.math.BigDecimal as DedFactorProdsPD250PerClaim = 0.0

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
  protected var _basicLimitPremium : java.math.BigDecimal as BasicLimitPremium = 0.0

  @VisibleInRateflow
  protected var _baseRate : java.math.BigDecimal as BaseRate = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("BIDedStatCode")
  protected var _bIDedStatCode : java.lang.String as BIDedStatCode = ""

  @VisibleInRateflow
  protected var _additionalInterestFactor : java.math.BigDecimal as AdditionalInterestFactor = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ClassificationProdsCompldOps {
   return _dataModel as GL7ClassificationProdsCompldOps
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