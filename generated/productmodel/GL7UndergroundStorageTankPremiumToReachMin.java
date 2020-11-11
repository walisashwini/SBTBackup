package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7UndergroundStorageTankPremiumToReachMin.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7UndergroundStorageTankPremiumToReachMin extends entity.GL7SublineTypeCov {
  protected GL7UndergroundStorageTankPremiumToReachMin()  {
    super((java.lang.Void)null);
  }
  
  public GL7UndergroundStorageTankPremiumToReachMin(entity.PolicyPeriod branch)  {
    super(branch, "GL7UndergroundStorageTankPremiumToReachMin");
  }
  
  public GL7UndergroundStorageTankPremiumToReachMin(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7UndergroundStorageTankPremiumToReachMin");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7UndergroundStorageTankPremiumToReachMinInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7UndergroundStorageTankPremiumToReachMin>() {
      public productmodel.GL7UndergroundStorageTankPremiumToReachMin newEmptyInstance() {
        return new productmodel.GL7UndergroundStorageTankPremiumToReachMin();
      }
      
      
    });
  }
}