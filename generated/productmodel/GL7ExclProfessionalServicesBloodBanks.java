package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclProfessionalServicesBloodBanks.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclProfessionalServicesBloodBanks extends entity.GL7SublineTypeExcl {
  protected GL7ExclProfessionalServicesBloodBanks()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclProfessionalServicesBloodBanks(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclProfessionalServicesBloodBanks");
  }
  
  public GL7ExclProfessionalServicesBloodBanks(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclProfessionalServicesBloodBanks");
  }
  
  public productmodel.DirectGL7ManualPremium78Type getGL7ManualPremium78Term() {
    return (productmodel.DirectGL7ManualPremium78Type)getCovTerm("GL7ManualPremium78");
  }
  
  public boolean getHasGL7ManualPremium78Term() {
    return hasCovTerm("GL7ManualPremium78");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclProfessionalServicesBloodBanksInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclProfessionalServicesBloodBanks>() {
      public productmodel.GL7ExclProfessionalServicesBloodBanks newEmptyInstance() {
        return new productmodel.GL7ExclProfessionalServicesBloodBanks();
      }
      
      
    });
  }
}