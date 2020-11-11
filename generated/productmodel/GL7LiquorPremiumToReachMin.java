package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LiquorPremiumToReachMin.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LiquorPremiumToReachMin extends entity.GL7SublineTypeCov {
  protected GL7LiquorPremiumToReachMin()  {
    super((java.lang.Void)null);
  }
  
  public GL7LiquorPremiumToReachMin(entity.PolicyPeriod branch)  {
    super(branch, "GL7LiquorPremiumToReachMin");
  }
  
  public GL7LiquorPremiumToReachMin(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LiquorPremiumToReachMin");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LiquorPremiumToReachMinInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LiquorPremiumToReachMin>() {
      public productmodel.GL7LiquorPremiumToReachMin newEmptyInstance() {
        return new productmodel.GL7LiquorPremiumToReachMin();
      }
      
      
    });
  }
}