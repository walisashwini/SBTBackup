package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclCrossSuitsLiabEDL.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclCrossSuitsLiabEDL extends entity.GL7SublineTypeExcl {
  protected GL7ExclCrossSuitsLiabEDL()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclCrossSuitsLiabEDL(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclCrossSuitsLiabEDL");
  }
  
  public GL7ExclCrossSuitsLiabEDL(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclCrossSuitsLiabEDL");
  }
  
  public productmodel.DirectGL7ManualPremium340Type getGL7ManualPremium340Term() {
    return (productmodel.DirectGL7ManualPremium340Type)getCovTerm("GL7ManualPremium340");
  }
  
  public boolean getHasGL7ManualPremium340Term() {
    return hasCovTerm("GL7ManualPremium340");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclCrossSuitsLiabEDLInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclCrossSuitsLiabEDL>() {
      public productmodel.GL7ExclCrossSuitsLiabEDL newEmptyInstance() {
        return new productmodel.GL7ExclCrossSuitsLiabEDL();
      }
      
      
    });
  }
}