package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityPolicyChangesDTO extends gw.rating.LineModelObject {

  public construct(_gL7PolicyChanges : GL7PolicyChanges, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7PolicyChanges
    _authorizedRepresent = _gL7PolicyChanges.GL7AuthorizedRepresentTerm.Value
    _authorizedRepresentativeSignature = _gL7PolicyChanges.GL7AuthorizedRepresentativeSignatureTerm.Value
    _changes = _gL7PolicyChanges.GL7ChangesTerm.Value
    _companyName = _gL7PolicyChanges.GL7CompanyNameTerm.Value
    _coveragePartsAffected = _gL7PolicyChanges.GL7CovPartsAffectedTerm.Value
    _namedInsured = _gL7PolicyChanges.GL7NamedInsuredTerm.Value
    _policyChangeEffectiveDate = _gL7PolicyChanges.GL7PolicyChangeEffectiveDateTerm.Value
    _policyNumber = _gL7PolicyChanges.GL7PolicyNumber1Term.Value
    _displayName = _gL7PolicyChanges.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPolicyChangesDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _policyNumber : java.lang.String as PolicyNumber = ""

  @VisibleInRateflow
  protected var _policyChangeEffectiveDate : java.util.Date as PolicyChangeEffectiveDate = new java.util.Date()

  @VisibleInRateflow
  protected var _namedInsured : java.lang.String as NamedInsured = ""

  @VisibleInRateflow
  protected var _coveragePartsAffected : java.lang.String as CoveragePartsAffected = ""

  @VisibleInRateflow
  protected var _companyName : java.lang.String as CompanyName = ""

  @VisibleInRateflow
  protected var _changes : java.lang.String as Changes = ""

  @VisibleInRateflow
  protected var _authorizedRepresentativeSignature : java.lang.String as AuthorizedRepresentativeSignature = ""

  @VisibleInRateflow
  protected var _authorizedRepresent : java.lang.String as AuthorizedRepresent = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7PolicyChanges {
   return _dataModel as GL7PolicyChanges
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