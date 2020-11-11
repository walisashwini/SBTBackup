package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7DesignatedProjectsProdsCompldOpsAggLimit.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7DesignatedProjectsProdsCompldOpsAggLimit extends entity.GL7SublineTypeSchedCov {
  protected GL7DesignatedProjectsProdsCompldOpsAggLimit()  {
    super((java.lang.Void)null);
  }
  
  public GL7DesignatedProjectsProdsCompldOpsAggLimit(entity.PolicyPeriod branch)  {
    super(branch, "GL7DesignatedProjectsProdsCompldOpsAggLimit");
  }
  
  public GL7DesignatedProjectsProdsCompldOpsAggLimit(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7DesignatedProjectsProdsCompldOpsAggLimit");
  }
  
  public productmodel.DirectGL7ManualPremium324Type getGL7ManualPremium324Term() {
    return (productmodel.DirectGL7ManualPremium324Type)getCovTerm("GL7ManualPremium324");
  }
  
  public boolean getHasGL7ManualPremium324Term() {
    return hasCovTerm("GL7ManualPremium324");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7DesignatedProjectsProdsCompldOpsAggLimitInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7DesignatedProjectsProdsCompldOpsAggLimit>() {
      public productmodel.GL7DesignatedProjectsProdsCompldOpsAggLimit newEmptyInstance() {
        return new productmodel.GL7DesignatedProjectsProdsCompldOpsAggLimit();
      }
      
      
    });
  }
}