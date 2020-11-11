package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7SpecialCombinedPremiumToReachMin.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7SpecialCombinedPremiumToReachMin extends entity.GL7SublineTypeCov {
  protected GL7SpecialCombinedPremiumToReachMin()  {
    super((java.lang.Void)null);
  }
  
  public GL7SpecialCombinedPremiumToReachMin(entity.PolicyPeriod branch)  {
    super(branch, "GL7SpecialCombinedPremiumToReachMin");
  }
  
  public GL7SpecialCombinedPremiumToReachMin(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7SpecialCombinedPremiumToReachMin");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7SpecialCombinedPremiumToReachMinInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7SpecialCombinedPremiumToReachMin>() {
      public productmodel.GL7SpecialCombinedPremiumToReachMin newEmptyInstance() {
        return new productmodel.GL7SpecialCombinedPremiumToReachMin();
      }
      
      
    });
  }
}