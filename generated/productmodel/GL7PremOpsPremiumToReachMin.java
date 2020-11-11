package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7PremOpsPremiumToReachMin.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7PremOpsPremiumToReachMin extends entity.GL7SublineTypeCov {
  protected GL7PremOpsPremiumToReachMin()  {
    super((java.lang.Void)null);
  }
  
  public GL7PremOpsPremiumToReachMin(entity.PolicyPeriod branch)  {
    super(branch, "GL7PremOpsPremiumToReachMin");
  }
  
  public GL7PremOpsPremiumToReachMin(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7PremOpsPremiumToReachMin");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7PremOpsPremiumToReachMinInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7PremOpsPremiumToReachMin>() {
      public productmodel.GL7PremOpsPremiumToReachMin newEmptyInstance() {
        return new productmodel.GL7PremOpsPremiumToReachMin();
      }
      
      
    });
  }
}