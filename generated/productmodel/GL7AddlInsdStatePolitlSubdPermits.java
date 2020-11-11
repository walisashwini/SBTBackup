package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdStatePolitlSubdPermits.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdStatePolitlSubdPermits extends entity.GL7SublineTypeSchedCov {
  protected GL7AddlInsdStatePolitlSubdPermits()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdStatePolitlSubdPermits(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdStatePolitlSubdPermits");
  }
  
  public GL7AddlInsdStatePolitlSubdPermits(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdStatePolitlSubdPermits");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdStatePolitlSubdPermitsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdStatePolitlSubdPermits>() {
      public productmodel.GL7AddlInsdStatePolitlSubdPermits newEmptyInstance() {
        return new productmodel.GL7AddlInsdStatePolitlSubdPermits();
      }
      
      
    });
  }
}