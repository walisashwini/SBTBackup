package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CalculationOfPremiumProductWithdrawal.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CalculationOfPremiumProductWithdrawal extends entity.GL7SublineTypeCond {
  protected GL7CalculationOfPremiumProductWithdrawal()  {
    super((java.lang.Void)null);
  }
  
  public GL7CalculationOfPremiumProductWithdrawal(entity.PolicyPeriod branch)  {
    super(branch, "GL7CalculationOfPremiumProductWithdrawal");
  }
  
  public GL7CalculationOfPremiumProductWithdrawal(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CalculationOfPremiumProductWithdrawal");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CalculationOfPremiumProductWithdrawalInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CalculationOfPremiumProductWithdrawal>() {
      public productmodel.GL7CalculationOfPremiumProductWithdrawal newEmptyInstance() {
        return new productmodel.GL7CalculationOfPremiumProductWithdrawal();
      }
      
      
    });
  }
}