package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclDesignatedProfessionalServices.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclDesignatedProfessionalServices extends entity.GL7SublineTypeSchedExcl {
  protected GL7ExclDesignatedProfessionalServices()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclDesignatedProfessionalServices(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclDesignatedProfessionalServices");
  }
  
  public GL7ExclDesignatedProfessionalServices(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclDesignatedProfessionalServices");
  }
  
  public productmodel.DirectGL7ManualPremium60Type getGL7ManualPremium60Term() {
    return (productmodel.DirectGL7ManualPremium60Type)getCovTerm("GL7ManualPremium60");
  }
  
  public boolean getHasGL7ManualPremium60Term() {
    return hasCovTerm("GL7ManualPremium60");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclDesignatedProfessionalServicesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclDesignatedProfessionalServices>() {
      public productmodel.GL7ExclDesignatedProfessionalServices newEmptyInstance() {
        return new productmodel.GL7ExclDesignatedProfessionalServices();
      }
      
      
    });
  }
}