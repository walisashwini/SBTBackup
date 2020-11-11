package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7Boats.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7Boats extends entity.GL7SublineTypeSchedCov {
  protected GL7Boats()  {
    super((java.lang.Void)null);
  }
  
  public GL7Boats(entity.PolicyPeriod branch)  {
    super(branch, "GL7Boats");
  }
  
  public GL7Boats(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7Boats");
  }
  
  public productmodel.DirectGL7ManualPremium24Type getGL7ManualPremium24Term() {
    return (productmodel.DirectGL7ManualPremium24Type)getCovTerm("GL7ManualPremium24");
  }
  
  public boolean getHasGL7ManualPremium24Term() {
    return hasCovTerm("GL7ManualPremium24");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7BoatsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7Boats>() {
      public productmodel.GL7Boats newEmptyInstance() {
        return new productmodel.GL7Boats();
      }
      
      
    });
  }
}