package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineSchedCovItem : GL7SublineSchedCovItem, parent : GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineSchedCovItem
    _substancesOrMaterials = (_cf.stateMatches(_gL7SublineSchedCovItem, Parameters)) ? _gL7SublineSchedCovItem.getStringProperty("SubstancesOrMaterials") : _substancesOrMaterials
    _displayName = (_cf.stateMatches(_gL7SublineSchedCovItem, Parameters)) ? _gL7SublineSchedCovItem.DisplayName : _displayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  var _substancesOrMaterials : java.lang.String as SubstancesOrMaterials = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineSchedCovItem {
   return _dataModel as GL7SublineSchedCovItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  var _parent : GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsDTO {
   return _parent
  }
  

  
}