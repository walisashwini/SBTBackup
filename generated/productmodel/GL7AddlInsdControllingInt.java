package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdControllingInt.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdControllingInt extends entity.GL7SublineTypeSchedCov {
  protected GL7AddlInsdControllingInt()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdControllingInt(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdControllingInt");
  }
  
  public GL7AddlInsdControllingInt(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdControllingInt");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdControllingIntInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdControllingInt>() {
      public productmodel.GL7AddlInsdControllingInt newEmptyInstance() {
        return new productmodel.GL7AddlInsdControllingInt();
      }
      
      
    });
  }
}