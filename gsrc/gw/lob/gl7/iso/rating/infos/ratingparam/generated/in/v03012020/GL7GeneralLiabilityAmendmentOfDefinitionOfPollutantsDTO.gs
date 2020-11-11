package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsDTO extends gw.rating.LineModelObject {

  public construct(_gL7AmendmentOfDefinitionOfPollutants : GL7AmendmentOfDefinitionOfPollutants, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7AmendmentOfDefinitionOfPollutants
    _manualPremium = (_cf.stateMatches(_gL7AmendmentOfDefinitionOfPollutants.OwningCoverable, Parameters)) ? _gL7AmendmentOfDefinitionOfPollutants.GL7ManualPremium13Term.Value : _manualPremium
    _displayName = (_cf.stateMatches(_gL7AmendmentOfDefinitionOfPollutants.OwningCoverable, Parameters)) ? _gL7AmendmentOfDefinitionOfPollutants.DisplayName : _displayName
    _amendmentOfDefinitionOfPollutantsDetail = _gL7AmendmentOfDefinitionOfPollutants.GL7ScheduledItems != null ? new GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsDetailGroupingDTO(_gL7AmendmentOfDefinitionOfPollutants.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsDTO {
   return this
  }
  

  @VisibleInRateflow
  var _amendmentOfDefinitionOfPollutantsDetail : GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsDetailGroupingDTO as readonly AmendmentOfDefinitionOfPollutantsDetail  

  @VisibleInRateflow
  var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AmendmentOfDefinitionOfPollutants {
   return _dataModel as GL7AmendmentOfDefinitionOfPollutants
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