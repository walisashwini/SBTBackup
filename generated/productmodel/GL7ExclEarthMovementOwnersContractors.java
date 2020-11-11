package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclEarthMovementOwnersContractors.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclEarthMovementOwnersContractors extends entity.GL7SublineTypeExcl {
  protected GL7ExclEarthMovementOwnersContractors()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclEarthMovementOwnersContractors(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclEarthMovementOwnersContractors");
  }
  
  public GL7ExclEarthMovementOwnersContractors(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclEarthMovementOwnersContractors");
  }
  
  public productmodel.DirectGL7ManualPremium363Type getGL7ManualPremium363Term() {
    return (productmodel.DirectGL7ManualPremium363Type)getCovTerm("GL7ManualPremium363");
  }
  
  public boolean getHasGL7ManualPremium363Term() {
    return hasCovTerm("GL7ManualPremium363");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclEarthMovementOwnersContractorsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclEarthMovementOwnersContractors>() {
      public productmodel.GL7ExclEarthMovementOwnersContractors newEmptyInstance() {
        return new productmodel.GL7ExclEarthMovementOwnersContractors();
      }
      
      
    });
  }
}