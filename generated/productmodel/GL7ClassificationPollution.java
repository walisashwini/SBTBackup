package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ClassificationPollution.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ClassificationPollution extends entity.GL7ExposureCov {
  protected GL7ClassificationPollution()  {
    super((java.lang.Void)null);
  }
  
  public GL7ClassificationPollution(entity.PolicyPeriod branch)  {
    super(branch, "GL7ClassificationPollution");
  }
  
  public GL7ClassificationPollution(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ClassificationPollution");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ClassificationPollutionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ClassificationPollution>() {
      public productmodel.GL7ClassificationPollution newEmptyInstance() {
        return new productmodel.GL7ClassificationPollution();
      }
      
      
    });
  }
}