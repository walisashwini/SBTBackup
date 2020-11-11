package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdStatePolitlSubdPermitsRelatingPrem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdStatePolitlSubdPermitsRelatingPrem extends entity.GL7SublineTypeSchedCov {
  protected GL7AddlInsdStatePolitlSubdPermitsRelatingPrem()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdStatePolitlSubdPermitsRelatingPrem(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdStatePolitlSubdPermitsRelatingPrem");
  }
  
  public GL7AddlInsdStatePolitlSubdPermitsRelatingPrem(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdStatePolitlSubdPermitsRelatingPrem");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdStatePolitlSubdPermitsRelatingPremInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdStatePolitlSubdPermitsRelatingPrem>() {
      public productmodel.GL7AddlInsdStatePolitlSubdPermitsRelatingPrem newEmptyInstance() {
        return new productmodel.GL7AddlInsdStatePolitlSubdPermitsRelatingPrem();
      }
      
      
    });
  }
}