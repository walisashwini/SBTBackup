package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityClassificationOwnersContractorsCoverageDTO extends gw.rating.LineModelObject {

  public construct(_gL7ClassificationOwnersContractors : GL7ClassificationOwnersContractors, parent : GL7GeneralLiabilityClassificationDTO) {
  
    _parent = parent
    _dataModel = _gL7ClassificationOwnersContractors
    _displayName = _gL7ClassificationOwnersContractors.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityClassificationOwnersContractorsCoverageDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _coverageOnPolicyIndicator : java.lang.Integer as CoverageOnPolicyIndicator = 0

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("Subline")
  protected var _subline : java.lang.String as Subline = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("RatingIDStatCode")
  protected var _ratingIDStatCode : java.lang.String as RatingIDStatCode = ""

  @VisibleInRateflow
  protected var _principalsProtvLiabFactor : java.math.BigDecimal as PrincipalsProtvLiabFactor = 0.0

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
  protected var _lossCostOverOneMillion : java.math.BigDecimal as LossCostOverOneMillion = 0.0

  @VisibleInRateflow
  protected var _lossCostOverOneHundred : java.math.BigDecimal as LossCostOverOneHundred = 0.0

  @VisibleInRateflow
  protected var _lossCost : java.math.BigDecimal as LossCost = 0.0

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
  protected var _finalRateOverOneMillion : java.math.BigDecimal as FinalRateOverOneMillion = 0.0

  @VisibleInRateflow
  protected var _finalRateOverOneHundred : java.math.BigDecimal as FinalRateOverOneHundred = 0.0

  @VisibleInRateflow
  protected var _finalRate : java.math.BigDecimal as FinalRate = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("ExposureStatCode")
  protected var _exposureStatCode : java.lang.String as ExposureStatCode = ""

  @VisibleInRateflow
  protected var _eLPOverride : java.math.BigDecimal as ELPOverride = 0.0

  @VisibleInRateflow
  protected var _eLPOverOneMillionOverride : java.math.BigDecimal as ELPOverOneMillionOverride = 0.0

  @VisibleInRateflow
  protected var _eLPOverOneMillion : java.math.BigDecimal as ELPOverOneMillion = 0.0

  @VisibleInRateflow
  protected var _eLPOverOneHundred : java.math.BigDecimal as ELPOverOneHundred = 0.0

  @VisibleInRateflow
  protected var _eLP : java.math.BigDecimal as ELP = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("CovStatCode")
  protected var _coverageStatCode : java.lang.String as CoverageStatCode = ""

  @VisibleInRateflow
  protected var _baseRateOverOneMillion : java.math.BigDecimal as BaseRateOverOneMillion = 0.0

  @VisibleInRateflow
  protected var _baseRateOverOneHundred : java.math.BigDecimal as BaseRateOverOneHundred = 0.0

  @VisibleInRateflow
  protected var _baseRate : java.math.BigDecimal as BaseRate = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("BIDedStatCode")
  protected var _bIDedStatCode : java.lang.String as BIDedStatCode = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ClassificationOwnersContractors {
   return _dataModel as GL7ClassificationOwnersContractors
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