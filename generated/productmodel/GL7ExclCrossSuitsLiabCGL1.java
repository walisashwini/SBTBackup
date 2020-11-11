package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclCrossSuitsLiabCGL1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclCrossSuitsLiabCGL1 extends entity.GL7SublineTypeExcl {
  protected GL7ExclCrossSuitsLiabCGL1()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclCrossSuitsLiabCGL1(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclCrossSuitsLiabCGL1");
  }
  
  public GL7ExclCrossSuitsLiabCGL1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclCrossSuitsLiabCGL1");
  }
  
  public productmodel.DirectGL7ManualPremium338Type getGL7ManualPremium338Term() {
    return (productmodel.DirectGL7ManualPremium338Type)getCovTerm("GL7ManualPremium338");
  }
  
  public boolean getHasGL7ManualPremium338Term() {
    return hasCovTerm("GL7ManualPremium338");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclCrossSuitsLiabCGL1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclCrossSuitsLiabCGL1>() {
      public productmodel.GL7ExclCrossSuitsLiabCGL1 newEmptyInstance() {
        return new productmodel.GL7ExclCrossSuitsLiabCGL1();
      }
      
      
    });
  }
}