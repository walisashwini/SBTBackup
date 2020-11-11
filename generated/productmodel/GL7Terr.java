package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7Terr.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7Terr extends entity.GL7ExposureCov {
  protected GL7Terr()  {
    super((java.lang.Void)null);
  }
  
  public GL7Terr(entity.PolicyPeriod branch)  {
    super(branch, "GL7Terr");
  }
  
  public GL7Terr(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7Terr");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7TerrInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7Terr>() {
      public productmodel.GL7Terr newEmptyInstance() {
        return new productmodel.GL7Terr();
      }
      
      
    });
  }
}