package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdEngrsArchsSrvyrs.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdEngrsArchsSrvyrs extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdEngrsArchsSrvyrs()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdEngrsArchsSrvyrs(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdEngrsArchsSrvyrs");
  }
  
  public GL7AddlInsdEngrsArchsSrvyrs(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdEngrsArchsSrvyrs");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdEngrsArchsSrvyrsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdEngrsArchsSrvyrs>() {
      public productmodel.GL7AddlInsdEngrsArchsSrvyrs newEmptyInstance() {
        return new productmodel.GL7AddlInsdEngrsArchsSrvyrs();
      }
      
      
    });
  }
}