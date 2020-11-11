package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityClassificationRailroadCoverageDTO extends gw.rating.LineModelObject {

  public construct(_gL7ClassificationRailroad : GL7ClassificationRailroad, parent : GL7GeneralLiabilityClassificationDTO) {
  
    _parent = parent
    _dataModel = _gL7ClassificationRailroad
    _displayName = _gL7ClassificationRailroad.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityClassificationRailroadCoverageDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _coverageOnPolicyIndicator : java.lang.Integer as CoverageOnPolicyIndicator = 0

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _workTrainsOrOtherRREquipmtRate : java.math.BigDecimal as WorkTrainsOrOtherRREquipmtRate = 0.0

  @VisibleInRateflow
  protected var _workTrainsOrOtherRREquipmtPremium : java.math.BigDecimal as WorkTrainsOrOtherRREquipmtPremium = 0.0

  @VisibleInRateflow
  protected var _workTrainsOrOtherRREquipmtFinalRate : java.math.BigDecimal as WorkTrainsOrOtherRREquipmtFinalRate = 0.0

  @VisibleInRateflow
  protected var _workTrainsOrOtherRREquipmtBaseRate : java.math.BigDecimal as WorkTrainsOrOtherRREquipmtBaseRate = 0.0

  @VisibleInRateflow
  protected var _totalCostWorkTrainsOrOtherRREquipmtAssigned : java.lang.Integer as TotalCostWorkTrainsOrOtherRREquipmtAssigned = 0

  @VisibleInRateflow
  protected var _totPremiumPriorToInjuryToSuprvsrCovPremium40011 : java.math.BigDecimal as TotPremiumPriorToInjuryToSuprvsrCovPremium40011 = 0.0

  @VisibleInRateflow
  protected var _totPremiumPriorToInjuryToSuprvsrCovPremium : java.math.BigDecimal as TotPremiumPriorToInjuryToSuprvsrCovPremium = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("Subline")
  protected var _subline : java.lang.String as Subline = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("RatingIDStatCode")
  protected var _ratingIDStatCode : java.lang.String as RatingIDStatCode = ""

  @VisibleInRateflow
  protected var _priorToFinalRateMixedHazard : java.math.BigDecimal as PriorToFinalRateMixedHazard = 0.0

  @VisibleInRateflow
  protected var _priorToFinalRate40006 : java.math.BigDecimal as PriorToFinalRate40006 = 0.0

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
  protected var _injurySuprvsrInspctrsOtherEmpsCovConstrctnOpsRROps : java.lang.String as InjurySuprvsrInspctrsOtherEmpsCovConstrctnOpsRROps = ""

  @VisibleInRateflow
  protected var _iLF40014 : java.math.BigDecimal as ILF40014 = 0.0

  @VisibleInRateflow
  protected var _iLF : java.math.BigDecimal as ILF = 0.0

  @VisibleInRateflow
  protected var _finalRate40011 : java.math.BigDecimal as FinalRate40011 = 0.0

  @VisibleInRateflow
  protected var _finalRate : java.math.BigDecimal as FinalRate = 0.0

  @VisibleInRateflow
  protected var _estimatedContractCostRatio : java.math.BigDecimal as EstimatedContractCostRatio = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("CovStatCode")
  protected var _coverageStatCode : java.lang.String as CoverageStatCode = ""

  @VisibleInRateflow
  protected var _covForInjuriesToSuprvsrInspOtherEmpOfTheInsdPremium : java.math.BigDecimal as CovForInjuriesToSuprvsrInspOtherEmpOfTheInsdPremium = 0.0

  @VisibleInRateflow
  protected var _covForInjuriesToSuprvsrFactor : java.math.BigDecimal as CovForInjuriesToSuprvsrFactor = 0.0

  @VisibleInRateflow
  protected var _contractCostFactorWithHzd : java.math.BigDecimal as ContractCostFactorWithHzd = 0.0

  @VisibleInRateflow
  protected var _contractCostFactorWOHzd : java.math.BigDecimal as ContractCostFactorWOHzd = 0.0

  @VisibleInRateflow
  protected var _constructionOpsOwnerFactor : java.math.BigDecimal as ConstructionOpsOwnerFactor = 0.0

  @VisibleInRateflow
  protected var _constructionOpsOwnerAdjmtFactor : java.math.BigDecimal as ConstructionOpsOwnerAdjmtFactor = 0.0

  @VisibleInRateflow
  protected var _baseELPRR40011 : java.math.BigDecimal as BaseELPRR40011 = 0.0

  @VisibleInRateflow
  protected var _baseELPRR400065orLess : java.math.BigDecimal as BaseELPRR400065orLess = 0.0

  @VisibleInRateflow
  protected var _baseELPRR40006 : java.math.BigDecimal as BaseELPRR40006 = 0.0

  @VisibleInRateflow
  protected var _baseELPRR : java.math.BigDecimal as BaseELPRR = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("BIDedStatCode")
  protected var _bIDedStatCode : java.lang.String as BIDedStatCode = ""

  @VisibleInRateflow
  protected var _adjustedBaseELPRR : java.math.BigDecimal as AdjustedBaseELPRR = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ClassificationRailroad {
   return _dataModel as GL7ClassificationRailroad
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