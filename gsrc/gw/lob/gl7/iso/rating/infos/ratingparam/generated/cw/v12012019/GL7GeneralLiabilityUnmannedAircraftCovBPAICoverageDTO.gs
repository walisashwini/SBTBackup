package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityUnmannedAircraftCovBPAICoverageDTO extends gw.rating.LineModelObject {

  public construct(_gL7UnmannedAircraftCovBPAI : GL7UnmannedAircraftCovBPAI, parent : GL7GeneralLiabilityUnmannedAircraftDTO) {
  
    _parent = parent
    _dataModel = _gL7UnmannedAircraftCovBPAI
    _displayName = _gL7UnmannedAircraftCovBPAI.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityUnmannedAircraftCovBPAICoverageDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _coverageOnPolicyIndicator : java.lang.Integer as CoverageOnPolicyIndicator = 0

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _eachOccurrenceLimit : java.lang.String as EachOccurrenceLimit = ""

  @VisibleInRateflow
  protected var _premOpsIncrdLimitTableAssignment : java.lang.String as PremOpsIncrdLimitTableAssignment = ""

  @VisibleInRateflow
  protected var _usageRatingMod : java.math.BigDecimal as UsageRatingMod = 0.0

  @VisibleInRateflow
  protected var _primaryPlaceOfOpRatingMod : java.math.BigDecimal as PrimaryPlaceOfOpRatingMod = 0.0

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _ownershipAndOpRatingMod : java.math.BigDecimal as OwnershipAndOpRatingMod = 0.0

  @VisibleInRateflow
  protected var _lossCost : java.math.BigDecimal as LossCost = 0.0

  @VisibleInRateflow
  protected var _lCM : java.math.BigDecimal as LCM = 0.0

  @VisibleInRateflow
  protected var _iLF : java.math.BigDecimal as ILF = 0.0

  @VisibleInRateflow
  protected var _claimsMadeMultiplier : java.math.BigDecimal as ClaimsMadeMultiplier = 0.0

  @VisibleInRateflow
  protected var _baseRate : java.math.BigDecimal as BaseRate = 0.0

  @VisibleInRateflow
  protected var _aggregateLimit : java.lang.String as AggregateLimit = ""

  @VisibleInRateflow
  protected var _adjustedRate : java.math.BigDecimal as AdjustedRate = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7UnmannedAircraftCovBPAI {
   return _dataModel as GL7UnmannedAircraftCovBPAI
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityUnmannedAircraftDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityUnmannedAircraftDTO {
   return _parent
  }
  

  
}