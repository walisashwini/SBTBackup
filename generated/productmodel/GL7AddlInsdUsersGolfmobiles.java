package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdUsersGolfmobiles.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdUsersGolfmobiles extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdUsersGolfmobiles()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdUsersGolfmobiles(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdUsersGolfmobiles");
  }
  
  public GL7AddlInsdUsersGolfmobiles(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdUsersGolfmobiles");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdUsersGolfmobilesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdUsersGolfmobiles>() {
      public productmodel.GL7AddlInsdUsersGolfmobiles newEmptyInstance() {
        return new productmodel.GL7AddlInsdUsersGolfmobiles();
      }
      
      
    });
  }
}