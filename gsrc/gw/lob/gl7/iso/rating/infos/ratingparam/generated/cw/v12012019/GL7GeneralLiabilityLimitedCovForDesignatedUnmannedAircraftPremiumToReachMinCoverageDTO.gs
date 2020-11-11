package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityLimitedCovForDesignatedUnmannedAircraftPremiumToReachMinCoverageDTO extends gw.rating.LineModelObject {

  public construct(_gL7LmtdCovForDesignatedUnmannedAircraftPremiumToRe : GL7LmtdCovForDesignatedUnmannedAircraftPremiumToRe, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7LmtdCovForDesignatedUnmannedAircraftPremiumToRe
    _displayName = _gL7LmtdCovForDesignatedUnmannedAircraftPremiumToRe.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedCovForDesignatedUnmannedAircraftPremiumToReachMinCoverageDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _coverageOnPolicyIndicator : java.lang.Integer as CoverageOnPolicyIndicator = 0

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _totalUnmannedAircraftPremium : java.math.BigDecimal as TotalUnmannedAircraftPremium = 0.0

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _minimumPremium : java.math.BigDecimal as MinimumPremium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7LmtdCovForDesignatedUnmannedAircraftPremiumToRe {
   return _dataModel as GL7LmtdCovForDesignatedUnmannedAircraftPremiumToRe
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