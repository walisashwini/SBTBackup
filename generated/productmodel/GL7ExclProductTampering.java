package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclProductTampering.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclProductTampering extends entity.GL7SublineTypeExcl {
  protected GL7ExclProductTampering()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclProductTampering(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclProductTampering");
  }
  
  public GL7ExclProductTampering(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclProductTampering");
  }
  
  public productmodel.DirectGL7ManualPremium102Type getGL7ManualPremium102Term() {
    return (productmodel.DirectGL7ManualPremium102Type)getCovTerm("GL7ManualPremium102");
  }
  
  public boolean getHasGL7ManualPremium102Term() {
    return hasCovTerm("GL7ManualPremium102");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclProductTamperingInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclProductTampering>() {
      public productmodel.GL7ExclProductTampering newEmptyInstance() {
        return new productmodel.GL7ExclProductTampering();
      }
      
      
    });
  }
}