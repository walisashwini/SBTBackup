package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ElectrDataLiabPremiumToReachMin.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ElectrDataLiabPremiumToReachMin extends entity.GL7SublineTypeCov {
  protected GL7ElectrDataLiabPremiumToReachMin()  {
    super((java.lang.Void)null);
  }
  
  public GL7ElectrDataLiabPremiumToReachMin(entity.PolicyPeriod branch)  {
    super(branch, "GL7ElectrDataLiabPremiumToReachMin");
  }
  
  public GL7ElectrDataLiabPremiumToReachMin(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ElectrDataLiabPremiumToReachMin");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ElectrDataLiabPremiumToReachMinInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ElectrDataLiabPremiumToReachMin>() {
      public productmodel.GL7ElectrDataLiabPremiumToReachMin newEmptyInstance() {
        return new productmodel.GL7ElectrDataLiabPremiumToReachMin();
      }
      
      
    });
  }
}