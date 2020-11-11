package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ClassificationProdsCompldOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ClassificationProdsCompldOps extends entity.GL7ExposureCov {
  protected GL7ClassificationProdsCompldOps()  {
    super((java.lang.Void)null);
  }
  
  public GL7ClassificationProdsCompldOps(entity.PolicyPeriod branch)  {
    super(branch, "GL7ClassificationProdsCompldOps");
  }
  
  public GL7ClassificationProdsCompldOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ClassificationProdsCompldOps");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ClassificationProdsCompldOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ClassificationProdsCompldOps>() {
      public productmodel.GL7ClassificationProdsCompldOps newEmptyInstance() {
        return new productmodel.GL7ClassificationProdsCompldOps();
      }
      
      
    });
  }
}