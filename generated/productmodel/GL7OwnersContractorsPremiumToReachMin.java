package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7OwnersContractorsPremiumToReachMin.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7OwnersContractorsPremiumToReachMin extends entity.GL7SublineTypeCov {
  protected GL7OwnersContractorsPremiumToReachMin()  {
    super((java.lang.Void)null);
  }
  
  public GL7OwnersContractorsPremiumToReachMin(entity.PolicyPeriod branch)  {
    super(branch, "GL7OwnersContractorsPremiumToReachMin");
  }
  
  public GL7OwnersContractorsPremiumToReachMin(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7OwnersContractorsPremiumToReachMin");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7OwnersContractorsPremiumToReachMinInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7OwnersContractorsPremiumToReachMin>() {
      public productmodel.GL7OwnersContractorsPremiumToReachMin newEmptyInstance() {
        return new productmodel.GL7OwnersContractorsPremiumToReachMin();
      }
      
      
    });
  }
}