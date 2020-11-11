package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ClassificationPremOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ClassificationPremOps extends entity.GL7ExposureCov {
  protected GL7ClassificationPremOps()  {
    super((java.lang.Void)null);
  }
  
  public GL7ClassificationPremOps(entity.PolicyPeriod branch)  {
    super(branch, "GL7ClassificationPremOps");
  }
  
  public GL7ClassificationPremOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ClassificationPremOps");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ClassificationPremOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ClassificationPremOps>() {
      public productmodel.GL7ClassificationPremOps newEmptyInstance() {
        return new productmodel.GL7ClassificationPremOps();
      }
      
      
    });
  }
}