package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7FiduciariesFiduciaryInterest.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7FiduciariesFiduciaryInterest extends entity.GL7SublineTypeCov {
  protected GL7FiduciariesFiduciaryInterest()  {
    super((java.lang.Void)null);
  }
  
  public GL7FiduciariesFiduciaryInterest(entity.PolicyPeriod branch)  {
    super(branch, "GL7FiduciariesFiduciaryInterest");
  }
  
  public GL7FiduciariesFiduciaryInterest(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7FiduciariesFiduciaryInterest");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7FiduciariesFiduciaryInterestInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7FiduciariesFiduciaryInterest>() {
      public productmodel.GL7FiduciariesFiduciaryInterest newEmptyInstance() {
        return new productmodel.GL7FiduciariesFiduciaryInterest();
      }
      
      
    });
  }
}