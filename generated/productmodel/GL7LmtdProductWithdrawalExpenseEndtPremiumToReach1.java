package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtdProductWithdrawalExpenseEndtPremiumToReach1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LmtdProductWithdrawalExpenseEndtPremiumToReach1 extends entity.GL7SublineTypeCov {
  protected GL7LmtdProductWithdrawalExpenseEndtPremiumToReach1()  {
    super((java.lang.Void)null);
  }
  
  public GL7LmtdProductWithdrawalExpenseEndtPremiumToReach1(entity.PolicyPeriod branch)  {
    super(branch, "GL7LmtdProductWithdrawalExpenseEndtPremiumToReach1");
  }
  
  public GL7LmtdProductWithdrawalExpenseEndtPremiumToReach1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LmtdProductWithdrawalExpenseEndtPremiumToReach1");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtdProductWithdrawalExpenseEndtPremiumToReach1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LmtdProductWithdrawalExpenseEndtPremiumToReach1>() {
      public productmodel.GL7LmtdProductWithdrawalExpenseEndtPremiumToReach1 newEmptyInstance() {
        return new productmodel.GL7LmtdProductWithdrawalExpenseEndtPremiumToReach1();
      }
      
      
    });
  }
}