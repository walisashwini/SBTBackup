package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclEarthMovementCompletedOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclEarthMovementCompletedOps extends entity.GL7SublineTypeExcl {
  protected GL7ExclEarthMovementCompletedOps()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclEarthMovementCompletedOps(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclEarthMovementCompletedOps");
  }
  
  public GL7ExclEarthMovementCompletedOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclEarthMovementCompletedOps");
  }
  
  public productmodel.DirectGL7ManualPremium355Type getGL7ManualPremium355Term() {
    return (productmodel.DirectGL7ManualPremium355Type)getCovTerm("GL7ManualPremium355");
  }
  
  public boolean getHasGL7ManualPremium355Term() {
    return hasCovTerm("GL7ManualPremium355");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclEarthMovementCompletedOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclEarthMovementCompletedOps>() {
      public productmodel.GL7ExclEarthMovementCompletedOps newEmptyInstance() {
        return new productmodel.GL7ExclEarthMovementCompletedOps();
      }
      
      
    });
  }
}