package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7MisdeliveryLiquidProdsCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7MisdeliveryLiquidProdsCov extends entity.GL7SublineTypeCov {
  protected GL7MisdeliveryLiquidProdsCov()  {
    super((java.lang.Void)null);
  }
  
  public GL7MisdeliveryLiquidProdsCov(entity.PolicyPeriod branch)  {
    super(branch, "GL7MisdeliveryLiquidProdsCov");
  }
  
  public GL7MisdeliveryLiquidProdsCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7MisdeliveryLiquidProdsCov");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7MisdeliveryLiquidProdsCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7MisdeliveryLiquidProdsCov>() {
      public productmodel.GL7MisdeliveryLiquidProdsCov newEmptyInstance() {
        return new productmodel.GL7MisdeliveryLiquidProdsCov();
      }
      
      
    });
  }
}