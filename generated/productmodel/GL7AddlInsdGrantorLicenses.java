package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdGrantorLicenses.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdGrantorLicenses extends entity.GL7SublineTypeSchedCov {
  protected GL7AddlInsdGrantorLicenses()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdGrantorLicenses(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdGrantorLicenses");
  }
  
  public GL7AddlInsdGrantorLicenses(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdGrantorLicenses");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdGrantorLicensesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdGrantorLicenses>() {
      public productmodel.GL7AddlInsdGrantorLicenses newEmptyInstance() {
        return new productmodel.GL7AddlInsdGrantorLicenses();
      }
      
      
    });
  }
}