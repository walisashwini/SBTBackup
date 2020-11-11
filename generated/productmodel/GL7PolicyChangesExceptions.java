package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7PolicyChangesExceptions.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7PolicyChangesExceptions extends entity.GL7SublineCond {
  protected GL7PolicyChangesExceptions()  {
    super((java.lang.Void)null);
  }
  
  public GL7PolicyChangesExceptions(entity.PolicyPeriod branch)  {
    super(branch, "GL7PolicyChangesExceptions");
  }
  
  public GL7PolicyChangesExceptions(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7PolicyChangesExceptions");
  }
  
  public productmodel.GenericGL7AdditionalInterestedPartiesType getGL7AdditionalInterestedPartiesTerm() {
    return (productmodel.GenericGL7AdditionalInterestedPartiesType)getCovTerm("GL7AdditionalInterestedParties");
  }
  
  public productmodel.DirectGL7AdditionalPremiumType getGL7AdditionalPremiumTerm() {
    return (productmodel.DirectGL7AdditionalPremiumType)getCovTerm("GL7AdditionalPremium");
  }
  
  public productmodel.GenericGL7ChangeEndorsementNumberType getGL7ChangeEndorsementNumberTerm() {
    return (productmodel.GenericGL7ChangeEndorsementNumberType)getCovTerm("GL7ChangeEndorsementNumber");
  }
  
  public productmodel.GenericGL7ClassificationType getGL7ClassificationTerm() {
    return (productmodel.GenericGL7ClassificationType)getCovTerm("GL7Classification");
  }
  
  public productmodel.GenericGL7CompanyCheckBoxType getGL7CompanyCheckBoxTerm() {
    return (productmodel.GenericGL7CompanyCheckBoxType)getCovTerm("GL7CompanyCheckBox");
  }
  
  public productmodel.GenericGL7CountersignedByType getGL7CountersignedByTerm() {
    return (productmodel.GenericGL7CountersignedByType)getCovTerm("GL7CountersignedBy");
  }
  
  public productmodel.GenericGL7CovFormsandEndorsementsType getGL7CovFormsandEndorsementsTerm() {
    return (productmodel.GenericGL7CovFormsandEndorsementsType)getCovTerm("GL7CovFormsandEndorsements");
  }
  
  public productmodel.GenericGL7CovrdPropertyType getGL7CovrdPropertyTerm() {
    return (productmodel.GenericGL7CovrdPropertyType)getCovTerm("GL7CovrdProperty");
  }
  
  public productmodel.GenericGL7Deds1Type getGL7Deds1Term() {
    return (productmodel.GenericGL7Deds1Type)getCovTerm("GL7Deds1");
  }
  
  public productmodel.GenericGL7EffectiveDateOfChangeType getGL7EffectiveDateOfChangeTerm() {
    return (productmodel.GenericGL7EffectiveDateOfChangeType)getCovTerm("GL7EffectiveDateOfChange");
  }
  
  public productmodel.GenericGL7EffectiveOrExpirationDateType getGL7EffectiveOrExpirationDateTerm() {
    return (productmodel.GenericGL7EffectiveOrExpirationDateType)getCovTerm("GL7EffectiveOrExpirationDate");
  }
  
  public productmodel.GenericGL7ExposureType getGL7ExposureTerm() {
    return (productmodel.GenericGL7ExposureType)getCovTerm("GL7Exposure");
  }
  
  public productmodel.GenericGL7InsuredsLegalStatusOrBusinessOfInsuredType getGL7InsuredsLegalStatusOrBusinessOfInsuredTerm() {
    return (productmodel.GenericGL7InsuredsLegalStatusOrBusinessOfInsuredType)getCovTerm("GL7InsuredsLegalStatusOrBusinessOfInsured");
  }
  
  public productmodel.GenericGL7InsuredsMailingAddressType getGL7InsuredsMailingAddressTerm() {
    return (productmodel.GenericGL7InsuredsMailingAddressType)getCovTerm("GL7InsuredsMailingAddress");
  }
  
  public productmodel.GenericGL7InsuredsNameType getGL7InsuredsNameTerm() {
    return (productmodel.GenericGL7InsuredsNameType)getCovTerm("GL7InsuredsName");
  }
  
  public productmodel.GenericGL7NamedInsured2Type getGL7NamedInsured2Term() {
    return (productmodel.GenericGL7NamedInsured2Type)getCovTerm("GL7NamedInsured2");
  }
  
  public productmodel.GenericGL7NoChangesType getGL7NoChangesTerm() {
    return (productmodel.GenericGL7NoChangesType)getCovTerm("GL7NoChanges");
  }
  
  public productmodel.GenericGL7PaymentPlanType getGL7PaymentPlanTerm() {
    return (productmodel.GenericGL7PaymentPlanType)getCovTerm("GL7PaymentPlan");
  }
  
  public productmodel.GenericGL7PolicyChangesEndorsementDescriptionType getGL7PolicyChangesEndorsementDescriptionTerm() {
    return (productmodel.GenericGL7PolicyChangesEndorsementDescriptionType)getCovTerm("GL7PolicyChangesEndorsementDescription");
  }
  
  public productmodel.GenericGL7PolicyNumberType getGL7PolicyNumberTerm() {
    return (productmodel.GenericGL7PolicyNumberType)getCovTerm("GL7PolicyNumber");
  }
  
  public productmodel.GenericGL7PremiumDeterminationType getGL7PremiumDeterminationTerm() {
    return (productmodel.GenericGL7PremiumDeterminationType)getCovTerm("GL7PremiumDetermination");
  }
  
  public productmodel.GenericGL7RatesType getGL7RatesTerm() {
    return (productmodel.GenericGL7RatesType)getCovTerm("GL7Rates");
  }
  
  public productmodel.DirectGL7ReturnPremiumType getGL7ReturnPremiumTerm() {
    return (productmodel.DirectGL7ReturnPremiumType)getCovTerm("GL7ReturnPremium");
  }
  
  public productmodel.GenericGL7ToBeAdjustedAtAuditType getGL7ToBeAdjustedAtAuditTerm() {
    return (productmodel.GenericGL7ToBeAdjustedAtAuditType)getCovTerm("GL7ToBeAdjustedAtAudit");
  }
  
  public productmodel.GenericGL7UnderlyingInsuranceType getGL7UnderlyingInsuranceTerm() {
    return (productmodel.GenericGL7UnderlyingInsuranceType)getCovTerm("GL7UnderlyingInsurance");
  }
  
  public boolean getHasGL7AdditionalInterestedPartiesTerm() {
    return hasCovTerm("GL7AdditionalInterestedParties");
  }
  
  public boolean getHasGL7AdditionalPremiumTerm() {
    return hasCovTerm("GL7AdditionalPremium");
  }
  
  public boolean getHasGL7ChangeEndorsementNumberTerm() {
    return hasCovTerm("GL7ChangeEndorsementNumber");
  }
  
  public boolean getHasGL7ClassificationTerm() {
    return hasCovTerm("GL7Classification");
  }
  
  public boolean getHasGL7CompanyCheckBoxTerm() {
    return hasCovTerm("GL7CompanyCheckBox");
  }
  
  public boolean getHasGL7CountersignedByTerm() {
    return hasCovTerm("GL7CountersignedBy");
  }
  
  public boolean getHasGL7CovFormsandEndorsementsTerm() {
    return hasCovTerm("GL7CovFormsandEndorsements");
  }
  
  public boolean getHasGL7CovrdPropertyTerm() {
    return hasCovTerm("GL7CovrdProperty");
  }
  
  public boolean getHasGL7Deds1Term() {
    return hasCovTerm("GL7Deds1");
  }
  
  public boolean getHasGL7EffectiveDateOfChangeTerm() {
    return hasCovTerm("GL7EffectiveDateOfChange");
  }
  
  public boolean getHasGL7EffectiveOrExpirationDateTerm() {
    return hasCovTerm("GL7EffectiveOrExpirationDate");
  }
  
  public boolean getHasGL7ExposureTerm() {
    return hasCovTerm("GL7Exposure");
  }
  
  public boolean getHasGL7InsuredsLegalStatusOrBusinessOfInsuredTerm() {
    return hasCovTerm("GL7InsuredsLegalStatusOrBusinessOfInsured");
  }
  
  public boolean getHasGL7InsuredsMailingAddressTerm() {
    return hasCovTerm("GL7InsuredsMailingAddress");
  }
  
  public boolean getHasGL7InsuredsNameTerm() {
    return hasCovTerm("GL7InsuredsName");
  }
  
  public boolean getHasGL7NamedInsured2Term() {
    return hasCovTerm("GL7NamedInsured2");
  }
  
  public boolean getHasGL7NoChangesTerm() {
    return hasCovTerm("GL7NoChanges");
  }
  
  public boolean getHasGL7PaymentPlanTerm() {
    return hasCovTerm("GL7PaymentPlan");
  }
  
  public boolean getHasGL7PolicyChangesEndorsementDescriptionTerm() {
    return hasCovTerm("GL7PolicyChangesEndorsementDescription");
  }
  
  public boolean getHasGL7PolicyNumberTerm() {
    return hasCovTerm("GL7PolicyNumber");
  }
  
  public boolean getHasGL7PremiumDeterminationTerm() {
    return hasCovTerm("GL7PremiumDetermination");
  }
  
  public boolean getHasGL7RatesTerm() {
    return hasCovTerm("GL7Rates");
  }
  
  public boolean getHasGL7ReturnPremiumTerm() {
    return hasCovTerm("GL7ReturnPremium");
  }
  
  public boolean getHasGL7ToBeAdjustedAtAuditTerm() {
    return hasCovTerm("GL7ToBeAdjustedAtAudit");
  }
  
  public boolean getHasGL7UnderlyingInsuranceTerm() {
    return hasCovTerm("GL7UnderlyingInsurance");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7PolicyChangesExceptionsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7PolicyChangesExceptions>() {
      public productmodel.GL7PolicyChangesExceptions newEmptyInstance() {
        return new productmodel.GL7PolicyChangesExceptions();
      }
      
      
    });
  }
}