package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7RailroadPremiumToReachMin.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7RailroadPremiumToReachMin extends entity.GL7SublineTypeCov {
  protected GL7RailroadPremiumToReachMin()  {
    super((java.lang.Void)null);
  }
  
  public GL7RailroadPremiumToReachMin(entity.PolicyPeriod branch)  {
    super(branch, "GL7RailroadPremiumToReachMin");
  }
  
  public GL7RailroadPremiumToReachMin(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7RailroadPremiumToReachMin");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7RailroadPremiumToReachMinInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7RailroadPremiumToReachMin>() {
      public productmodel.GL7RailroadPremiumToReachMin newEmptyInstance() {
        return new productmodel.GL7RailroadPremiumToReachMin();
      }
      
      
    });
  }
}