package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclLoggingLumberingOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclLoggingLumberingOps extends entity.GL7SublineTypeExcl {
  protected GL7ExclLoggingLumberingOps()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclLoggingLumberingOps(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclLoggingLumberingOps");
  }
  
  public GL7ExclLoggingLumberingOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclLoggingLumberingOps");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclLoggingLumberingOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclLoggingLumberingOps>() {
      public productmodel.GL7ExclLoggingLumberingOps newEmptyInstance() {
        return new productmodel.GL7ExclLoggingLumberingOps();
      }
      
      
    });
  }
}