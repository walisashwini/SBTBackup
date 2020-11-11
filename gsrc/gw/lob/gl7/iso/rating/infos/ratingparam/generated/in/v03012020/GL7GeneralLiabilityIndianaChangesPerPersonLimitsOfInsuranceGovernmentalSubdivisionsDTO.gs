package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityIndianaChangesPerPersonLimitsOfInsuranceGovernmentalSubdivisionsDTO extends gw.rating.LineModelObject {

  public construct(_gL7INChangesPerPersonLmtsOfInsGovSubdivisions : GL7INChangesPerPersonLmtsOfInsGovSubdivisions, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7INChangesPerPersonLmtsOfInsGovSubdivisions
    _limitOfInsurancePerPerson = (_cf.stateMatches(_gL7INChangesPerPersonLmtsOfInsGovSubdivisions.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7INChangesPerPersonLmtsOfInsGovSubdivisions.GL7LimitOfInsPerPersonTerm.Value) : _limitOfInsurancePerPerson
    _displayName = (_cf.stateMatches(_gL7INChangesPerPersonLmtsOfInsGovSubdivisions.OwningCoverable, Parameters)) ? _gL7INChangesPerPersonLmtsOfInsGovSubdivisions.DisplayName : _displayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityIndianaChangesPerPersonLimitsOfInsuranceGovernmentalSubdivisionsDTO {
   return this
  }
  

  @VisibleInRateflow
  var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  var _limitOfInsurancePerPerson : java.lang.String as LimitOfInsurancePerPerson = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7INChangesPerPersonLmtsOfInsGovSubdivisions {
   return _dataModel as GL7INChangesPerPersonLmtsOfInsGovSubdivisions
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