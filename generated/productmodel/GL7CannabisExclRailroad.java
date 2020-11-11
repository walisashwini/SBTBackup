package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CannabisExclRailroad.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CannabisExclRailroad extends entity.GL7SublineTypeExcl {
  protected GL7CannabisExclRailroad()  {
    super((java.lang.Void)null);
  }
  
  public GL7CannabisExclRailroad(entity.PolicyPeriod branch)  {
    super(branch, "GL7CannabisExclRailroad");
  }
  
  public GL7CannabisExclRailroad(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CannabisExclRailroad");
  }
  
  public productmodel.DirectGL7ManualPremium301Type getGL7ManualPremium301Term() {
    return (productmodel.DirectGL7ManualPremium301Type)getCovTerm("GL7ManualPremium301");
  }
  
  public boolean getHasGL7ManualPremium301Term() {
    return hasCovTerm("GL7ManualPremium301");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CannabisExclRailroadInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CannabisExclRailroad>() {
      public productmodel.GL7CannabisExclRailroad newEmptyInstance() {
        return new productmodel.GL7CannabisExclRailroad();
      }
      
      
    });
  }
}