package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclProfessionalServicesPharmacists.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclProfessionalServicesPharmacists extends entity.GL7SublineTypeExcl {
  protected GL7ExclProfessionalServicesPharmacists()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclProfessionalServicesPharmacists(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclProfessionalServicesPharmacists");
  }
  
  public GL7ExclProfessionalServicesPharmacists(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclProfessionalServicesPharmacists");
  }
  
  public productmodel.DirectGL7ManualPremium365Type getGL7ManualPremium365Term() {
    return (productmodel.DirectGL7ManualPremium365Type)getCovTerm("GL7ManualPremium365");
  }
  
  public boolean getHasGL7ManualPremium365Term() {
    return hasCovTerm("GL7ManualPremium365");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclProfessionalServicesPharmacistsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclProfessionalServicesPharmacists>() {
      public productmodel.GL7ExclProfessionalServicesPharmacists newEmptyInstance() {
        return new productmodel.GL7ExclProfessionalServicesPharmacists();
      }
      
      
    });
  }
}