package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdVendorsAutomaticStatusWhenRequiredInAgr.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdVendorsAutomaticStatusWhenRequiredInAgr extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdVendorsAutomaticStatusWhenRequiredInAgr()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdVendorsAutomaticStatusWhenRequiredInAgr(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdVendorsAutomaticStatusWhenRequiredInAgr");
  }
  
  public GL7AddlInsdVendorsAutomaticStatusWhenRequiredInAgr(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdVendorsAutomaticStatusWhenRequiredInAgr");
  }
  
  public productmodel.DirectGL7ManualPremium260Type getGL7ManualPremium260Term() {
    return (productmodel.DirectGL7ManualPremium260Type)getCovTerm("GL7ManualPremium260");
  }
  
  public boolean getHasGL7ManualPremium260Term() {
    return hasCovTerm("GL7ManualPremium260");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdVendorsAutomaticStatusWhenRequiredInAgrInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdVendorsAutomaticStatusWhenRequiredInAgr>() {
      public productmodel.GL7AddlInsdVendorsAutomaticStatusWhenRequiredInAgr newEmptyInstance() {
        return new productmodel.GL7AddlInsdVendorsAutomaticStatusWhenRequiredInAgr();
      }
      
      
    });
  }
}