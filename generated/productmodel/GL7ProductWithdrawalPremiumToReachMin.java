package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ProductWithdrawalPremiumToReachMin.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ProductWithdrawalPremiumToReachMin extends entity.GL7SublineTypeCov {
  protected GL7ProductWithdrawalPremiumToReachMin()  {
    super((java.lang.Void)null);
  }
  
  public GL7ProductWithdrawalPremiumToReachMin(entity.PolicyPeriod branch)  {
    super(branch, "GL7ProductWithdrawalPremiumToReachMin");
  }
  
  public GL7ProductWithdrawalPremiumToReachMin(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ProductWithdrawalPremiumToReachMin");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ProductWithdrawalPremiumToReachMinInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ProductWithdrawalPremiumToReachMin>() {
      public productmodel.GL7ProductWithdrawalPremiumToReachMin newEmptyInstance() {
        return new productmodel.GL7ProductWithdrawalPremiumToReachMin();
      }
      
      
    });
  }
}