package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilitySpecialCombinedPremiumToReachMinCoverageDTO extends gw.rating.LineModelObject {

  public construct(_gL7SpecialCombinedPremiumToReachMin : GL7SpecialCombinedPremiumToReachMin, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7SpecialCombinedPremiumToReachMin
    _displayName = _gL7SpecialCombinedPremiumToReachMin.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilitySpecialCombinedPremiumToReachMinCoverageDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _coverageOnPolicyIndicator : java.lang.Integer as CoverageOnPolicyIndicator = 0

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _minPremium : java.math.BigDecimal as MinPremium = 0.0

  @VisibleInRateflow
  protected var _coveragePremium : java.math.BigDecimal as CoveragePremium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SpecialCombinedPremiumToReachMin {
   return _dataModel as GL7SpecialCombinedPremiumToReachMin
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