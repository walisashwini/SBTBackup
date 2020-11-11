package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityResidentAgentCountersignatureEndorsementDTO extends gw.rating.LineModelObject {

  public construct(_gL7ResidentAgentCountersignatureEndorsement : GL7ResidentAgentCountersignatureEndorsement, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7ResidentAgentCountersignatureEndorsement
    _companyName = _gL7ResidentAgentCountersignatureEndorsement.GL7CompanyName1Term.Value
    _dateofCountersignature = _gL7ResidentAgentCountersignatureEndorsement.GL7DateofCountersignatureTerm.Value
    _licensedResidentAgent = _gL7ResidentAgentCountersignatureEndorsement.GL7LicensedResidentAgentTerm.Value
    _namedInsured = _gL7ResidentAgentCountersignatureEndorsement.GL7NamedInsured1Term.Value
    _policyNumber = _gL7ResidentAgentCountersignatureEndorsement.GL7PolicyNumber2Term.Value
    _stateName = _gL7ResidentAgentCountersignatureEndorsement.GL7StateNameTerm.Value
    _displayName = _gL7ResidentAgentCountersignatureEndorsement.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityResidentAgentCountersignatureEndorsementDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _stateName : java.lang.String as StateName = ""

  @VisibleInRateflow
  protected var _policyNumber : java.lang.String as PolicyNumber = ""

  @VisibleInRateflow
  protected var _namedInsured : java.lang.String as NamedInsured = ""

  @VisibleInRateflow
  protected var _licensedResidentAgent : java.lang.String as LicensedResidentAgent = ""

  @VisibleInRateflow
  protected var _dateofCountersignature : java.util.Date as DateofCountersignature = new java.util.Date()

  @VisibleInRateflow
  protected var _companyName : java.lang.String as CompanyName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ResidentAgentCountersignatureEndorsement {
   return _dataModel as GL7ResidentAgentCountersignatureEndorsement
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