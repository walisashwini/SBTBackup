package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd3.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd3 extends entity.GL7SublineTypeCov {
  protected GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd3()  {
    super((java.lang.Void)null);
  }
  
  public GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd3(entity.PolicyPeriod branch)  {
    super(branch, "GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd3");
  }
  
  public GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd3(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd3");
  }
  
  public productmodel.DirectGL7ManualPremium151Type getGL7ManualPremium151Term() {
    return (productmodel.DirectGL7ManualPremium151Type)getCovTerm("GL7ManualPremium151");
  }
  
  public boolean getHasGL7ManualPremium151Term() {
    return hasCovTerm("GL7ManualPremium151");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd3InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd3>() {
      public productmodel.GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd3 newEmptyInstance() {
        return new productmodel.GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd3();
      }
      
      
    });
  }
}