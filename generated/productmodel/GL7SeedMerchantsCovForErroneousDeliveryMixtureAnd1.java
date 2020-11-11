package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd1 extends entity.GL7SublineTypeCov {
  protected GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd1()  {
    super((java.lang.Void)null);
  }
  
  public GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd1(entity.PolicyPeriod branch)  {
    super(branch, "GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd1");
  }
  
  public GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd1");
  }
  
  public productmodel.DirectGL7ManualPremium149Type getGL7ManualPremium149Term() {
    return (productmodel.DirectGL7ManualPremium149Type)getCovTerm("GL7ManualPremium149");
  }
  
  public boolean getHasGL7ManualPremium149Term() {
    return hasCovTerm("GL7ManualPremium149");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd1>() {
      public productmodel.GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd1 newEmptyInstance() {
        return new productmodel.GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd1();
      }
      
      
    });
  }
}