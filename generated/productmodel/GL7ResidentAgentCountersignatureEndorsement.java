package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ResidentAgentCountersignatureEndorsement.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ResidentAgentCountersignatureEndorsement extends entity.GL7SublineTypeCond {
  protected GL7ResidentAgentCountersignatureEndorsement()  {
    super((java.lang.Void)null);
  }
  
  public GL7ResidentAgentCountersignatureEndorsement(entity.PolicyPeriod branch)  {
    super(branch, "GL7ResidentAgentCountersignatureEndorsement");
  }
  
  public GL7ResidentAgentCountersignatureEndorsement(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ResidentAgentCountersignatureEndorsement");
  }
  
  public productmodel.GenericGL7CompanyName1Type getGL7CompanyName1Term() {
    return (productmodel.GenericGL7CompanyName1Type)getCovTerm("GL7CompanyName1");
  }
  
  public productmodel.GenericGL7DateofCountersignatureType getGL7DateofCountersignatureTerm() {
    return (productmodel.GenericGL7DateofCountersignatureType)getCovTerm("GL7DateofCountersignature");
  }
  
  public productmodel.GenericGL7LicensedResidentAgentType getGL7LicensedResidentAgentTerm() {
    return (productmodel.GenericGL7LicensedResidentAgentType)getCovTerm("GL7LicensedResidentAgent");
  }
  
  public productmodel.GenericGL7NamedInsured1Type getGL7NamedInsured1Term() {
    return (productmodel.GenericGL7NamedInsured1Type)getCovTerm("GL7NamedInsured1");
  }
  
  public productmodel.GenericGL7PolicyNumber2Type getGL7PolicyNumber2Term() {
    return (productmodel.GenericGL7PolicyNumber2Type)getCovTerm("GL7PolicyNumber2");
  }
  
  public productmodel.GenericGL7StateNameType getGL7StateNameTerm() {
    return (productmodel.GenericGL7StateNameType)getCovTerm("GL7StateName");
  }
  
  public boolean getHasGL7CompanyName1Term() {
    return hasCovTerm("GL7CompanyName1");
  }
  
  public boolean getHasGL7DateofCountersignatureTerm() {
    return hasCovTerm("GL7DateofCountersignature");
  }
  
  public boolean getHasGL7LicensedResidentAgentTerm() {
    return hasCovTerm("GL7LicensedResidentAgent");
  }
  
  public boolean getHasGL7NamedInsured1Term() {
    return hasCovTerm("GL7NamedInsured1");
  }
  
  public boolean getHasGL7PolicyNumber2Term() {
    return hasCovTerm("GL7PolicyNumber2");
  }
  
  public boolean getHasGL7StateNameTerm() {
    return hasCovTerm("GL7StateName");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ResidentAgentCountersignatureEndorsementInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ResidentAgentCountersignatureEndorsement>() {
      public productmodel.GL7ResidentAgentCountersignatureEndorsement newEmptyInstance() {
        return new productmodel.GL7ResidentAgentCountersignatureEndorsement();
      }
      
      
    });
  }
}