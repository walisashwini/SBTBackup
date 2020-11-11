package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7DesignatedLocationsProdsCompldOpsAggLimit.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7DesignatedLocationsProdsCompldOpsAggLimit extends entity.GL7LocationSchedCov {
  protected GL7DesignatedLocationsProdsCompldOpsAggLimit()  {
    super((java.lang.Void)null);
  }
  
  public GL7DesignatedLocationsProdsCompldOpsAggLimit(entity.PolicyPeriod branch)  {
    super(branch, "GL7DesignatedLocationsProdsCompldOpsAggLimit");
  }
  
  public GL7DesignatedLocationsProdsCompldOpsAggLimit(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7DesignatedLocationsProdsCompldOpsAggLimit");
  }
  
  public productmodel.DirectGL7ManualPremium249Type getGL7ManualPremium249Term() {
    return (productmodel.DirectGL7ManualPremium249Type)getCovTerm("GL7ManualPremium249");
  }
  
  public boolean getHasGL7ManualPremium249Term() {
    return hasCovTerm("GL7ManualPremium249");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7DesignatedLocationsProdsCompldOpsAggLimitInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7DesignatedLocationsProdsCompldOpsAggLimit>() {
      public productmodel.GL7DesignatedLocationsProdsCompldOpsAggLimit newEmptyInstance() {
        return new productmodel.GL7DesignatedLocationsProdsCompldOpsAggLimit();
      }
      
      
    });
  }
}