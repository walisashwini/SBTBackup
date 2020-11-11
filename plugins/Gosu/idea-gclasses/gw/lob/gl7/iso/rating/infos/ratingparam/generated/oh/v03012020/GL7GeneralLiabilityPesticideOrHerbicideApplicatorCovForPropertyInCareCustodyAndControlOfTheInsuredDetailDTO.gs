package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineSchedCovItem : GL7SublineSchedCovItem, parent : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineSchedCovItem
    _descriptionOfOperations = (_cf.stateMatches(_gL7SublineSchedCovItem, Parameters)) ? _gL7SublineSchedCovItem.getStringProperty("DescriptionOfOperations") : _descriptionOfOperations
    _displayName = (_cf.stateMatches(_gL7SublineSchedCovItem, Parameters)) ? _gL7SublineSchedCovItem.DisplayName : _displayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  var _descriptionOfOperations : java.lang.String as DescriptionOfOperations = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineSchedCovItem {
   return _dataModel as GL7SublineSchedCovItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  var _parent : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDTO {
   return _parent
  }
  

  
}