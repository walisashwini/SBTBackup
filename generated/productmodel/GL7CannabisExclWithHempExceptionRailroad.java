package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CannabisExclWithHempExceptionRailroad.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CannabisExclWithHempExceptionRailroad extends entity.GL7SublineTypeExcl {
  protected GL7CannabisExclWithHempExceptionRailroad()  {
    super((java.lang.Void)null);
  }
  
  public GL7CannabisExclWithHempExceptionRailroad(entity.PolicyPeriod branch)  {
    super(branch, "GL7CannabisExclWithHempExceptionRailroad");
  }
  
  public GL7CannabisExclWithHempExceptionRailroad(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CannabisExclWithHempExceptionRailroad");
  }
  
  public productmodel.DirectGL7ManualPremium315Type getGL7ManualPremium315Term() {
    return (productmodel.DirectGL7ManualPremium315Type)getCovTerm("GL7ManualPremium315");
  }
  
  public boolean getHasGL7ManualPremium315Term() {
    return hasCovTerm("GL7ManualPremium315");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CannabisExclWithHempExceptionRailroadInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CannabisExclWithHempExceptionRailroad>() {
      public productmodel.GL7CannabisExclWithHempExceptionRailroad newEmptyInstance() {
        return new productmodel.GL7CannabisExclWithHempExceptionRailroad();
      }
      
      
    });
  }
}