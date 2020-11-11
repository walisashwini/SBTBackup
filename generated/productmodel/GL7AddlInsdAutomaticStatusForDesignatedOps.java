package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdAutomaticStatusForDesignatedOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdAutomaticStatusForDesignatedOps extends entity.GL7SublineTypeSchedCov {
  protected GL7AddlInsdAutomaticStatusForDesignatedOps()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdAutomaticStatusForDesignatedOps(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdAutomaticStatusForDesignatedOps");
  }
  
  public GL7AddlInsdAutomaticStatusForDesignatedOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdAutomaticStatusForDesignatedOps");
  }
  
  public productmodel.DirectGL7ManualPremium251Type getGL7ManualPremium251Term() {
    return (productmodel.DirectGL7ManualPremium251Type)getCovTerm("GL7ManualPremium251");
  }
  
  public boolean getHasGL7ManualPremium251Term() {
    return hasCovTerm("GL7ManualPremium251");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdAutomaticStatusForDesignatedOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdAutomaticStatusForDesignatedOps>() {
      public productmodel.GL7AddlInsdAutomaticStatusForDesignatedOps newEmptyInstance() {
        return new productmodel.GL7AddlInsdAutomaticStatusForDesignatedOps();
      }
      
      
    });
  }
}