package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdEngrsArchsSrvyrsOwnersContractors.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdEngrsArchsSrvyrsOwnersContractors extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdEngrsArchsSrvyrsOwnersContractors()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdEngrsArchsSrvyrsOwnersContractors(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdEngrsArchsSrvyrsOwnersContractors");
  }
  
  public GL7AddlInsdEngrsArchsSrvyrsOwnersContractors(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdEngrsArchsSrvyrsOwnersContractors");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdEngrsArchsSrvyrsOwnersContractorsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdEngrsArchsSrvyrsOwnersContractors>() {
      public productmodel.GL7AddlInsdEngrsArchsSrvyrsOwnersContractors newEmptyInstance() {
        return new productmodel.GL7AddlInsdEngrsArchsSrvyrsOwnersContractors();
      }
      
      
    });
  }
}