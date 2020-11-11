package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7DesignatedLocLiquorAggLimit.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7DesignatedLocLiquorAggLimit extends entity.GL7LocationCov {
  protected GL7DesignatedLocLiquorAggLimit()  {
    super((java.lang.Void)null);
  }
  
  public GL7DesignatedLocLiquorAggLimit(entity.PolicyPeriod branch)  {
    super(branch, "GL7DesignatedLocLiquorAggLimit");
  }
  
  public GL7DesignatedLocLiquorAggLimit(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7DesignatedLocLiquorAggLimit");
  }
  
  public productmodel.GenericGL7DesignatedLocationType getGL7DesignatedLocationTerm() {
    return (productmodel.GenericGL7DesignatedLocationType)getCovTerm("GL7DesignatedLocation");
  }
  
  public productmodel.DirectGL7ManualPremium180Type getGL7ManualPremium180Term() {
    return (productmodel.DirectGL7ManualPremium180Type)getCovTerm("GL7ManualPremium180");
  }
  
  public boolean getHasGL7DesignatedLocationTerm() {
    return hasCovTerm("GL7DesignatedLocation");
  }
  
  public boolean getHasGL7ManualPremium180Term() {
    return hasCovTerm("GL7ManualPremium180");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7DesignatedLocLiquorAggLimitInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7DesignatedLocLiquorAggLimit>() {
      public productmodel.GL7DesignatedLocLiquorAggLimit newEmptyInstance() {
        return new productmodel.GL7DesignatedLocLiquorAggLimit();
      }
      
      
    });
  }
}