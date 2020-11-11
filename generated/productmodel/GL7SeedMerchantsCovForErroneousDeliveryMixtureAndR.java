package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7SeedMerchantsCovForErroneousDeliveryMixtureAndR.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7SeedMerchantsCovForErroneousDeliveryMixtureAndR extends entity.GL7SublineTypeCov {
  protected GL7SeedMerchantsCovForErroneousDeliveryMixtureAndR()  {
    super((java.lang.Void)null);
  }
  
  public GL7SeedMerchantsCovForErroneousDeliveryMixtureAndR(entity.PolicyPeriod branch)  {
    super(branch, "GL7SeedMerchantsCovForErroneousDeliveryMixtureAndR");
  }
  
  public GL7SeedMerchantsCovForErroneousDeliveryMixtureAndR(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7SeedMerchantsCovForErroneousDeliveryMixtureAndR");
  }
  
  public productmodel.DirectGL7ManualPremium148Type getGL7ManualPremium148Term() {
    return (productmodel.DirectGL7ManualPremium148Type)getCovTerm("GL7ManualPremium148");
  }
  
  public boolean getHasGL7ManualPremium148Term() {
    return hasCovTerm("GL7ManualPremium148");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7SeedMerchantsCovForErroneousDeliveryMixtureAndRInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7SeedMerchantsCovForErroneousDeliveryMixtureAndR>() {
      public productmodel.GL7SeedMerchantsCovForErroneousDeliveryMixtureAndR newEmptyInstance() {
        return new productmodel.GL7SeedMerchantsCovForErroneousDeliveryMixtureAndR();
      }
      
      
    });
  }
}