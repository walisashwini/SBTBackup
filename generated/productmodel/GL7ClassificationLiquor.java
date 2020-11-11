package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ClassificationLiquor.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ClassificationLiquor extends entity.GL7ExposureCov {
  protected GL7ClassificationLiquor()  {
    super((java.lang.Void)null);
  }
  
  public GL7ClassificationLiquor(entity.PolicyPeriod branch)  {
    super(branch, "GL7ClassificationLiquor");
  }
  
  public GL7ClassificationLiquor(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ClassificationLiquor");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ClassificationLiquorInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ClassificationLiquor>() {
      public productmodel.GL7ClassificationLiquor newEmptyInstance() {
        return new productmodel.GL7ClassificationLiquor();
      }
      
      
    });
  }
}