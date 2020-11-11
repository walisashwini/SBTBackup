package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LawnCareServicesCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LawnCareServicesCov extends entity.GL7SublineTypeCov {
  protected GL7LawnCareServicesCov()  {
    super((java.lang.Void)null);
  }
  
  public GL7LawnCareServicesCov(entity.PolicyPeriod branch)  {
    super(branch, "GL7LawnCareServicesCov");
  }
  
  public GL7LawnCareServicesCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LawnCareServicesCov");
  }
  
  public productmodel.DirectGL7ManualPremium117Type getGL7ManualPremium117Term() {
    return (productmodel.DirectGL7ManualPremium117Type)getCovTerm("GL7ManualPremium117");
  }
  
  public boolean getHasGL7ManualPremium117Term() {
    return hasCovTerm("GL7ManualPremium117");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LawnCareServicesCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LawnCareServicesCov>() {
      public productmodel.GL7LawnCareServicesCov newEmptyInstance() {
        return new productmodel.GL7LawnCareServicesCov();
      }
      
      
    });
  }
}