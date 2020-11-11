package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdEngrsArchsSrvyrsNotEngagedInsd.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdEngrsArchsSrvyrsNotEngagedInsd extends entity.GL7SublineTypeSchedCov {
  protected GL7AddlInsdEngrsArchsSrvyrsNotEngagedInsd()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdEngrsArchsSrvyrsNotEngagedInsd(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdEngrsArchsSrvyrsNotEngagedInsd");
  }
  
  public GL7AddlInsdEngrsArchsSrvyrsNotEngagedInsd(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdEngrsArchsSrvyrsNotEngagedInsd");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdEngrsArchsSrvyrsNotEngagedInsdInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdEngrsArchsSrvyrsNotEngagedInsd>() {
      public productmodel.GL7AddlInsdEngrsArchsSrvyrsNotEngagedInsd newEmptyInstance() {
        return new productmodel.GL7AddlInsdEngrsArchsSrvyrsNotEngagedInsd();
      }
      
      
    });
  }
}