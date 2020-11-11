package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityCannabisExclusionPollutionDTO extends gw.rating.LineModelObject {

  public construct(_gL7CannabisExclPollution : GL7CannabisExclPollution, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7CannabisExclPollution
    _manualPremium = _gL7CannabisExclPollution.GL7ManualPremium290Term.Value
    _displayName = _gL7CannabisExclPollution.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityCannabisExclusionPollutionDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7CannabisExclPollution {
   return _dataModel as GL7CannabisExclPollution
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