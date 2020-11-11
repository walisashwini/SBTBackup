package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityClassificationPollutionCoverageDTO extends gw.rating.LineModelObject {

  public construct(_gL7ClassificationPollution : GL7ClassificationPollution, parent : GL7GeneralLiabilityClassificationDTO) {
  
    _parent = parent
    _dataModel = _gL7ClassificationPollution
    _displayName = _gL7ClassificationPollution.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityClassificationPollutionCoverageDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _coverageOnPolicyIndicator : java.lang.Integer as CoverageOnPolicyIndicator = 0

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ClassificationPollution {
   return _dataModel as GL7ClassificationPollution
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