package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExcessProvisionVendors.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExcessProvisionVendors extends entity.GL7SublineTypeCov {
  protected GL7ExcessProvisionVendors()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExcessProvisionVendors(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExcessProvisionVendors");
  }
  
  public GL7ExcessProvisionVendors(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExcessProvisionVendors");
  }
  
  public productmodel.DirectGL7ManualPremium49Type getGL7ManualPremium49Term() {
    return (productmodel.DirectGL7ManualPremium49Type)getCovTerm("GL7ManualPremium49");
  }
  
  public boolean getHasGL7ManualPremium49Term() {
    return hasCovTerm("GL7ManualPremium49");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExcessProvisionVendorsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExcessProvisionVendors>() {
      public productmodel.GL7ExcessProvisionVendors newEmptyInstance() {
        return new productmodel.GL7ExcessProvisionVendors();
      }
      
      
    });
  }
}