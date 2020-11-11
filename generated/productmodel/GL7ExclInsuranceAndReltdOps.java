package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclInsuranceAndReltdOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclInsuranceAndReltdOps extends entity.GL7SublineTypeExcl {
  protected GL7ExclInsuranceAndReltdOps()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclInsuranceAndReltdOps(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclInsuranceAndReltdOps");
  }
  
  public GL7ExclInsuranceAndReltdOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclInsuranceAndReltdOps");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclInsuranceAndReltdOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclInsuranceAndReltdOps>() {
      public productmodel.GL7ExclInsuranceAndReltdOps newEmptyInstance() {
        return new productmodel.GL7ExclInsuranceAndReltdOps();
      }
      
      
    });
  }
}