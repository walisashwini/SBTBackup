package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdVendors.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdVendors extends entity.GL7SublineTypeSchedCov {
  protected GL7AddlInsdVendors()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdVendors(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdVendors");
  }
  
  public GL7AddlInsdVendors(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdVendors");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdVendorsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdVendors>() {
      public productmodel.GL7AddlInsdVendors newEmptyInstance() {
        return new productmodel.GL7AddlInsdVendors();
      }
      
      
    });
  }
}