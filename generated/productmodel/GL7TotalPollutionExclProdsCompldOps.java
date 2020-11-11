package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7TotalPollutionExclProdsCompldOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7TotalPollutionExclProdsCompldOps extends entity.GL7SublineTypeExcl {
  protected GL7TotalPollutionExclProdsCompldOps()  {
    super((java.lang.Void)null);
  }
  
  public GL7TotalPollutionExclProdsCompldOps(entity.PolicyPeriod branch)  {
    super(branch, "GL7TotalPollutionExclProdsCompldOps");
  }
  
  public GL7TotalPollutionExclProdsCompldOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7TotalPollutionExclProdsCompldOps");
  }
  
  public productmodel.DirectGL7ManualPremium166Type getGL7ManualPremium166Term() {
    return (productmodel.DirectGL7ManualPremium166Type)getCovTerm("GL7ManualPremium166");
  }
  
  public boolean getHasGL7ManualPremium166Term() {
    return hasCovTerm("GL7ManualPremium166");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7TotalPollutionExclProdsCompldOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7TotalPollutionExclProdsCompldOps>() {
      public productmodel.GL7TotalPollutionExclProdsCompldOps newEmptyInstance() {
        return new productmodel.GL7TotalPollutionExclProdsCompldOps();
      }
      
      
    });
  }
}