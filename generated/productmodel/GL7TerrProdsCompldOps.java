package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7TerrProdsCompldOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7TerrProdsCompldOps extends entity.GL7ExposureCov {
  protected GL7TerrProdsCompldOps()  {
    super((java.lang.Void)null);
  }
  
  public GL7TerrProdsCompldOps(entity.PolicyPeriod branch)  {
    super(branch, "GL7TerrProdsCompldOps");
  }
  
  public GL7TerrProdsCompldOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7TerrProdsCompldOps");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7TerrProdsCompldOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7TerrProdsCompldOps>() {
      public productmodel.GL7TerrProdsCompldOps newEmptyInstance() {
        return new productmodel.GL7TerrProdsCompldOps();
      }
      
      
    });
  }
}