package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclProfessionalVeterinarianServices.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclProfessionalVeterinarianServices extends entity.GL7SublineTypeExcl {
  protected GL7ExclProfessionalVeterinarianServices()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclProfessionalVeterinarianServices(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclProfessionalVeterinarianServices");
  }
  
  public GL7ExclProfessionalVeterinarianServices(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclProfessionalVeterinarianServices");
  }
  
  public productmodel.DirectGL7ManualPremium79Type getGL7ManualPremium79Term() {
    return (productmodel.DirectGL7ManualPremium79Type)getCovTerm("GL7ManualPremium79");
  }
  
  public boolean getHasGL7ManualPremium79Term() {
    return hasCovTerm("GL7ManualPremium79");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclProfessionalVeterinarianServicesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclProfessionalVeterinarianServices>() {
      public productmodel.GL7ExclProfessionalVeterinarianServices newEmptyInstance() {
        return new productmodel.GL7ExclProfessionalVeterinarianServices();
      }
      
      
    });
  }
}