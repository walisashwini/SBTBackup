package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdTrusts.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdTrusts extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdTrusts()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdTrusts(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdTrusts");
  }
  
  public GL7AddlInsdTrusts(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdTrusts");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdTrustsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdTrusts>() {
      public productmodel.GL7AddlInsdTrusts newEmptyInstance() {
        return new productmodel.GL7AddlInsdTrusts();
      }
      
      
    });
  }
}