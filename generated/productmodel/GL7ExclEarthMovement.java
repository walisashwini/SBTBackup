package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclEarthMovement.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclEarthMovement extends entity.GL7SublineTypeExcl {
  protected GL7ExclEarthMovement()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclEarthMovement(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclEarthMovement");
  }
  
  public GL7ExclEarthMovement(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclEarthMovement");
  }
  
  public productmodel.DirectGL7ManualPremium353Type getGL7ManualPremium353Term() {
    return (productmodel.DirectGL7ManualPremium353Type)getCovTerm("GL7ManualPremium353");
  }
  
  public boolean getHasGL7ManualPremium353Term() {
    return hasCovTerm("GL7ManualPremium353");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclEarthMovementInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclEarthMovement>() {
      public productmodel.GL7ExclEarthMovement newEmptyInstance() {
        return new productmodel.GL7ExclEarthMovement();
      }
      
      
    });
  }
}