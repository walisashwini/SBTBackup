package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclCrossSuitsLiabLiquor.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclCrossSuitsLiabLiquor extends entity.GL7SublineTypeExcl {
  protected GL7ExclCrossSuitsLiabLiquor()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclCrossSuitsLiabLiquor(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclCrossSuitsLiabLiquor");
  }
  
  public GL7ExclCrossSuitsLiabLiquor(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclCrossSuitsLiabLiquor");
  }
  
  public productmodel.DirectGL7ManualPremium342Type getGL7ManualPremium342Term() {
    return (productmodel.DirectGL7ManualPremium342Type)getCovTerm("GL7ManualPremium342");
  }
  
  public boolean getHasGL7ManualPremium342Term() {
    return hasCovTerm("GL7ManualPremium342");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclCrossSuitsLiabLiquorInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclCrossSuitsLiabLiquor>() {
      public productmodel.GL7ExclCrossSuitsLiabLiquor newEmptyInstance() {
        return new productmodel.GL7ExclCrossSuitsLiabLiquor();
      }
      
      
    });
  }
}