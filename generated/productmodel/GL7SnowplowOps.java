package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7SnowplowOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7SnowplowOps extends entity.GL7ExposureExcl {
  protected GL7SnowplowOps()  {
    super((java.lang.Void)null);
  }
  
  public GL7SnowplowOps(entity.PolicyPeriod branch)  {
    super(branch, "GL7SnowplowOps");
  }
  
  public GL7SnowplowOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7SnowplowOps");
  }
  
  public productmodel.DirectGL7ManualPremium188Type getGL7ManualPremium188Term() {
    return (productmodel.DirectGL7ManualPremium188Type)getCovTerm("GL7ManualPremium188");
  }
  
  public boolean getHasGL7ManualPremium188Term() {
    return hasCovTerm("GL7ManualPremium188");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7SnowplowOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7SnowplowOps>() {
      public productmodel.GL7SnowplowOps newEmptyInstance() {
        return new productmodel.GL7SnowplowOps();
      }
      
      
    });
  }
}