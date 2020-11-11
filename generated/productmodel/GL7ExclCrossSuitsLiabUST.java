package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclCrossSuitsLiabUST.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclCrossSuitsLiabUST extends entity.GL7SublineTypeExcl {
  protected GL7ExclCrossSuitsLiabUST()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclCrossSuitsLiabUST(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclCrossSuitsLiabUST");
  }
  
  public GL7ExclCrossSuitsLiabUST(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclCrossSuitsLiabUST");
  }
  
  public productmodel.DirectGL7ManualPremium350Type getGL7ManualPremium350Term() {
    return (productmodel.DirectGL7ManualPremium350Type)getCovTerm("GL7ManualPremium350");
  }
  
  public boolean getHasGL7ManualPremium350Term() {
    return hasCovTerm("GL7ManualPremium350");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclCrossSuitsLiabUSTInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclCrossSuitsLiabUST>() {
      public productmodel.GL7ExclCrossSuitsLiabUST newEmptyInstance() {
        return new productmodel.GL7ExclCrossSuitsLiabUST();
      }
      
      
    });
  }
}