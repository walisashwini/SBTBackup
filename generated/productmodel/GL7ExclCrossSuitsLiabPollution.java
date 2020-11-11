package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclCrossSuitsLiabPollution.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclCrossSuitsLiabPollution extends entity.GL7SublineTypeExcl {
  protected GL7ExclCrossSuitsLiabPollution()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclCrossSuitsLiabPollution(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclCrossSuitsLiabPollution");
  }
  
  public GL7ExclCrossSuitsLiabPollution(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclCrossSuitsLiabPollution");
  }
  
  public productmodel.DirectGL7ManualPremium351Type getGL7ManualPremium351Term() {
    return (productmodel.DirectGL7ManualPremium351Type)getCovTerm("GL7ManualPremium351");
  }
  
  public boolean getHasGL7ManualPremium351Term() {
    return hasCovTerm("GL7ManualPremium351");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclCrossSuitsLiabPollutionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclCrossSuitsLiabPollution>() {
      public productmodel.GL7ExclCrossSuitsLiabPollution newEmptyInstance() {
        return new productmodel.GL7ExclCrossSuitsLiabPollution();
      }
      
      
    });
  }
}