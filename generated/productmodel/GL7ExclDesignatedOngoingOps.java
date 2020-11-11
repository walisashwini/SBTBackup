package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclDesignatedOngoingOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclDesignatedOngoingOps extends entity.GL7SublineTypeSchedExcl {
  protected GL7ExclDesignatedOngoingOps()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclDesignatedOngoingOps(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclDesignatedOngoingOps");
  }
  
  public GL7ExclDesignatedOngoingOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclDesignatedOngoingOps");
  }
  
  public productmodel.DirectGL7ManualPremium57Type getGL7ManualPremium57Term() {
    return (productmodel.DirectGL7ManualPremium57Type)getCovTerm("GL7ManualPremium57");
  }
  
  public boolean getHasGL7ManualPremium57Term() {
    return hasCovTerm("GL7ManualPremium57");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclDesignatedOngoingOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclDesignatedOngoingOps>() {
      public productmodel.GL7ExclDesignatedOngoingOps newEmptyInstance() {
        return new productmodel.GL7ExclDesignatedOngoingOps();
      }
      
      
    });
  }
}