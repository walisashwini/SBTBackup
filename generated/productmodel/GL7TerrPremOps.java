package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7TerrPremOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7TerrPremOps extends entity.GL7ExposureCov {
  protected GL7TerrPremOps()  {
    super((java.lang.Void)null);
  }
  
  public GL7TerrPremOps(entity.PolicyPeriod branch)  {
    super(branch, "GL7TerrPremOps");
  }
  
  public GL7TerrPremOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7TerrPremOps");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7TerrPremOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7TerrPremOps>() {
      public productmodel.GL7TerrPremOps newEmptyInstance() {
        return new productmodel.GL7TerrPremOps();
      }
      
      
    });
  }
}