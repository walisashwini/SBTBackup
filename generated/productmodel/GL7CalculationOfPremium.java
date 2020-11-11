package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CalculationOfPremium.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CalculationOfPremium extends entity.GL7SublineTypeCond {
  protected GL7CalculationOfPremium()  {
    super((java.lang.Void)null);
  }
  
  public GL7CalculationOfPremium(entity.PolicyPeriod branch)  {
    super(branch, "GL7CalculationOfPremium");
  }
  
  public GL7CalculationOfPremium(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CalculationOfPremium");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CalculationOfPremiumInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CalculationOfPremium>() {
      public productmodel.GL7CalculationOfPremium newEmptyInstance() {
        return new productmodel.GL7CalculationOfPremium();
      }
      
      
    });
  }
}