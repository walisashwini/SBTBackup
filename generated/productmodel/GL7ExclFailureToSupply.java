package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclFailureToSupply.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclFailureToSupply extends entity.GL7SublineTypeExcl {
  protected GL7ExclFailureToSupply()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclFailureToSupply(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclFailureToSupply");
  }
  
  public GL7ExclFailureToSupply(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclFailureToSupply");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclFailureToSupplyInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclFailureToSupply>() {
      public productmodel.GL7ExclFailureToSupply newEmptyInstance() {
        return new productmodel.GL7ExclFailureToSupply();
      }
      
      
    });
  }
}