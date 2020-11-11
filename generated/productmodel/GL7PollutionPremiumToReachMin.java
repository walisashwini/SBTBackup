package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7PollutionPremiumToReachMin.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7PollutionPremiumToReachMin extends entity.GL7SublineTypeCov {
  protected GL7PollutionPremiumToReachMin()  {
    super((java.lang.Void)null);
  }
  
  public GL7PollutionPremiumToReachMin(entity.PolicyPeriod branch)  {
    super(branch, "GL7PollutionPremiumToReachMin");
  }
  
  public GL7PollutionPremiumToReachMin(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7PollutionPremiumToReachMin");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7PollutionPremiumToReachMinInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7PollutionPremiumToReachMin>() {
      public productmodel.GL7PollutionPremiumToReachMin newEmptyInstance() {
        return new productmodel.GL7PollutionPremiumToReachMin();
      }
      
      
    });
  }
}