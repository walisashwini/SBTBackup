package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd2.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd2 extends entity.GL7SublineTypeCov {
  protected GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd2()  {
    super((java.lang.Void)null);
  }
  
  public GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd2(entity.PolicyPeriod branch)  {
    super(branch, "GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd2");
  }
  
  public GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd2(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd2");
  }
  
  public productmodel.DirectGL7ManualPremium150Type getGL7ManualPremium150Term() {
    return (productmodel.DirectGL7ManualPremium150Type)getCovTerm("GL7ManualPremium150");
  }
  
  public boolean getHasGL7ManualPremium150Term() {
    return hasCovTerm("GL7ManualPremium150");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd2InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd2>() {
      public productmodel.GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd2 newEmptyInstance() {
        return new productmodel.GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd2();
      }
      
      
    });
  }
}