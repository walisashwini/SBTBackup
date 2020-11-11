package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7DesignatedProjectsAggLimit.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7DesignatedProjectsAggLimit extends entity.GL7SublineTypeSchedCov {
  protected GL7DesignatedProjectsAggLimit()  {
    super((java.lang.Void)null);
  }
  
  public GL7DesignatedProjectsAggLimit(entity.PolicyPeriod branch)  {
    super(branch, "GL7DesignatedProjectsAggLimit");
  }
  
  public GL7DesignatedProjectsAggLimit(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7DesignatedProjectsAggLimit");
  }
  
  public productmodel.DirectGL7ManualPremium317Type getGL7ManualPremium317Term() {
    return (productmodel.DirectGL7ManualPremium317Type)getCovTerm("GL7ManualPremium317");
  }
  
  public boolean getHasGL7ManualPremium317Term() {
    return hasCovTerm("GL7ManualPremium317");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7DesignatedProjectsAggLimitInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7DesignatedProjectsAggLimit>() {
      public productmodel.GL7DesignatedProjectsAggLimit newEmptyInstance() {
        return new productmodel.GL7DesignatedProjectsAggLimit();
      }
      
      
    });
  }
}