package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityPolicyChangesExceptionsDTO extends gw.rating.LineModelObject {

  public construct(_gL7PolicyChangesExceptions : GL7PolicyChangesExceptions, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7PolicyChangesExceptions
    _additionalInterestedParties = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7PolicyChangesExceptions.GL7AdditionalInterestedPartiesTerm.Value) : _additionalInterestedParties
    _additionalPremium = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _gL7PolicyChangesExceptions.GL7AdditionalPremiumTerm.Value : _additionalPremium
    _changeEndorsementNumber = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _gL7PolicyChangesExceptions.GL7ChangeEndorsementNumberTerm.Value : _changeEndorsementNumber
    _classification = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7PolicyChangesExceptions.GL7ClassificationTerm.Value) : _classification
    _companyCheckBox = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7PolicyChangesExceptions.GL7CompanyCheckBoxTerm.Value) : _companyCheckBox
    _countersignedBy = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _gL7PolicyChangesExceptions.GL7CountersignedByTerm.Value : _countersignedBy
    _coverageFormsandEndorsements = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7PolicyChangesExceptions.GL7CovFormsandEndorsementsTerm.Value) : _coverageFormsandEndorsements
    _coveredProperty = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7PolicyChangesExceptions.GL7CovrdPropertyTerm.Value) : _coveredProperty
    _deductibles = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7PolicyChangesExceptions.GL7Deds1Term.Value) : _deductibles
    _effectiveDateOfChange = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _gL7PolicyChangesExceptions.GL7EffectiveDateOfChangeTerm.Value : _effectiveDateOfChange
    _effectiveOrExpirationDate = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7PolicyChangesExceptions.GL7EffectiveOrExpirationDateTerm.Value) : _effectiveOrExpirationDate
    _exposure = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7PolicyChangesExceptions.GL7ExposureTerm.Value) : _exposure
    _insuredsLegalStatusOrBusinessOfInsured = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7PolicyChangesExceptions.GL7InsuredsLegalStatusOrBusinessOfInsuredTerm.Value) : _insuredsLegalStatusOrBusinessOfInsured
    _insuredsMailingAddress = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7PolicyChangesExceptions.GL7InsuredsMailingAddressTerm.Value) : _insuredsMailingAddress
    _insuredsName = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7PolicyChangesExceptions.GL7InsuredsNameTerm.Value) : _insuredsName
    _namedInsured = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _gL7PolicyChangesExceptions.GL7NamedInsured2Term.Value : _namedInsured
    _noChanges = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7PolicyChangesExceptions.GL7NoChangesTerm.Value) : _noChanges
    _paymentPlan = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7PolicyChangesExceptions.GL7PaymentPlanTerm.Value) : _paymentPlan
    _policyChangesEndorsementDescription = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _gL7PolicyChangesExceptions.GL7PolicyChangesEndorsementDescriptionTerm.Value : _policyChangesEndorsementDescription
    _policyNumber = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7PolicyChangesExceptions.GL7PolicyNumberTerm.Value) : _policyNumber
    _premiumDetermination = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7PolicyChangesExceptions.GL7PremiumDeterminationTerm.Value) : _premiumDetermination
    _rates = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _cf.makeBigDecimalFrom (_gL7PolicyChangesExceptions.GL7RatesTerm.Value) : _rates
    _returnPremium = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _gL7PolicyChangesExceptions.GL7ReturnPremiumTerm.Value : _returnPremium
    _toBeAdjustedAtAudit = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7PolicyChangesExceptions.GL7ToBeAdjustedAtAuditTerm.Value) : _toBeAdjustedAtAudit
    _underlyingInsurance = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7PolicyChangesExceptions.GL7UnderlyingInsuranceTerm.Value) : _underlyingInsurance
    _displayName = (_cf.stateMatches(_gL7PolicyChangesExceptions.OwningCoverable, Parameters)) ? _gL7PolicyChangesExceptions.DisplayName : _displayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPolicyChangesExceptionsDTO {
   return this
  }
  

  @VisibleInRateflow
  var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  var _underlyingInsurance : java.lang.String as UnderlyingInsurance = ""

  @VisibleInRateflow
  var _toBeAdjustedAtAudit : java.lang.String as ToBeAdjustedAtAudit = ""

  @VisibleInRateflow
  var _returnPremium : java.math.BigDecimal as ReturnPremium = 0.0

  @VisibleInRateflow
  var _rates : java.math.BigDecimal as Rates = 0.0

  @VisibleInRateflow
  var _premiumDetermination : java.lang.String as PremiumDetermination = ""

  @VisibleInRateflow
  var _policyNumber : java.lang.String as PolicyNumber = ""

  @VisibleInRateflow
  var _policyChangesEndorsementDescription : java.lang.String as PolicyChangesEndorsementDescription = ""

  @VisibleInRateflow
  var _paymentPlan : java.lang.String as PaymentPlan = ""

  @VisibleInRateflow
  var _noChanges : java.lang.String as NoChanges = ""

  @VisibleInRateflow
  var _namedInsured : java.lang.String as NamedInsured = ""

  @VisibleInRateflow
  var _insuredsName : java.lang.String as InsuredsName = ""

  @VisibleInRateflow
  var _insuredsMailingAddress : java.lang.String as InsuredsMailingAddress = ""

  @VisibleInRateflow
  var _insuredsLegalStatusOrBusinessOfInsured : java.lang.String as InsuredsLegalStatusOrBusinessOfInsured = ""

  @VisibleInRateflow
  var _exposure : java.lang.String as Exposure = ""

  @VisibleInRateflow
  var _effectiveOrExpirationDate : java.lang.String as EffectiveOrExpirationDate = ""

  @VisibleInRateflow
  var _effectiveDateOfChange : java.util.Date as EffectiveDateOfChange = new java.util.Date()

  @VisibleInRateflow
  var _deductibles : java.lang.String as Deductibles = ""

  @VisibleInRateflow
  var _coveredProperty : java.lang.String as CoveredProperty = ""

  @VisibleInRateflow
  var _coverageFormsandEndorsements : java.lang.String as CoverageFormsandEndorsements = ""

  @VisibleInRateflow
  var _countersignedBy : java.lang.String as CountersignedBy = ""

  @VisibleInRateflow
  var _companyCheckBox : java.lang.String as CompanyCheckBox = ""

  @VisibleInRateflow
  var _classification : java.lang.String as Classification = ""

  @VisibleInRateflow
  var _changeEndorsementNumber : java.lang.String as ChangeEndorsementNumber = ""

  @VisibleInRateflow
  var _additionalPremium : java.math.BigDecimal as AdditionalPremium = 0.0

  @VisibleInRateflow
  var _additionalInterestedParties : java.lang.String as AdditionalInterestedParties = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7PolicyChangesExceptions {
   return _dataModel as GL7PolicyChangesExceptions
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