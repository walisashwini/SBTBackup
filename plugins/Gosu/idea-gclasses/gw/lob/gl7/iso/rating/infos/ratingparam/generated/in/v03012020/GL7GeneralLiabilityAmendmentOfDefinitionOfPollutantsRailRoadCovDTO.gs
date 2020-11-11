package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsRailRoadCovDTO extends gw.rating.LineModelObject {

  public construct(_gL7AmendmentOfDefinitionOfPollutantsRailRoadCov : GL7AmendmentOfDefinitionOfPollutantsRailRoadCov, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7AmendmentOfDefinitionOfPollutantsRailRoadCov
    _manualPremium = (_cf.stateMatches(_gL7AmendmentOfDefinitionOfPollutantsRailRoadCov.OwningCoverable, Parameters)) ? _gL7AmendmentOfDefinitionOfPollutantsRailRoadCov.GL7ManualPremium18Term.Value : _manualPremium
    _displayName = (_cf.stateMatches(_gL7AmendmentOfDefinitionOfPollutantsRailRoadCov.OwningCoverable, Parameters)) ? _gL7AmendmentOfDefinitionOfPollutantsRailRoadCov.DisplayName : _displayName
    _amendmentOfDefinitionOfPollutantsRailRoadCovDetail = _gL7AmendmentOfDefinitionOfPollutantsRailRoadCov.GL7ScheduledItems != null ? new GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsRailRoadCovDetailGroupingDTO(_gL7AmendmentOfDefinitionOfPollutantsRailRoadCov.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsRailRoadCovDTO {
   return this
  }
  

  @VisibleInRateflow
  var _amendmentOfDefinitionOfPollutantsRailRoadCovDetail : GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsRailRoadCovDetailGroupingDTO as readonly AmendmentOfDefinitionOfPollutantsRailRoadCovDetail  

  @VisibleInRateflow
  var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AmendmentOfDefinitionOfPollutantsRailRoadCov {
   return _dataModel as GL7AmendmentOfDefinitionOfPollutantsRailRoadCov
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  var _parent : GL7GeneralLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent
  }
  

  
}