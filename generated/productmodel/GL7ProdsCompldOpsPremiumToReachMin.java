package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ProdsCompldOpsPremiumToReachMin.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ProdsCompldOpsPremiumToReachMin extends entity.GL7SublineTypeCov {
  protected GL7ProdsCompldOpsPremiumToReachMin()  {
    super((java.lang.Void)null);
  }
  
  public GL7ProdsCompldOpsPremiumToReachMin(entity.PolicyPeriod branch)  {
    super(branch, "GL7ProdsCompldOpsPremiumToReachMin");
  }
  
  public GL7ProdsCompldOpsPremiumToReachMin(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ProdsCompldOpsPremiumToReachMin");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ProdsCompldOpsPremiumToReachMinInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ProdsCompldOpsPremiumToReachMin>() {
      public productmodel.GL7ProdsCompldOpsPremiumToReachMin newEmptyInstance() {
        return new productmodel.GL7ProdsCompldOpsPremiumToReachMin();
      }
      
      
    });
  }
}