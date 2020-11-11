package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ClassificationExclCovAProductWithdrawalExpense.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ClassificationExclCovAProductWithdrawalExpense extends entity.GL7ExposureCov {
  protected GL7ClassificationExclCovAProductWithdrawalExpense()  {
    super((java.lang.Void)null);
  }
  
  public GL7ClassificationExclCovAProductWithdrawalExpense(entity.PolicyPeriod branch)  {
    super(branch, "GL7ClassificationExclCovAProductWithdrawalExpense");
  }
  
  public GL7ClassificationExclCovAProductWithdrawalExpense(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ClassificationExclCovAProductWithdrawalExpense");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ClassificationExclCovAProductWithdrawalExpenseInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ClassificationExclCovAProductWithdrawalExpense>() {
      public productmodel.GL7ClassificationExclCovAProductWithdrawalExpense newEmptyInstance() {
        return new productmodel.GL7ClassificationExclCovAProductWithdrawalExpense();
      }
      
      
    });
  }
}