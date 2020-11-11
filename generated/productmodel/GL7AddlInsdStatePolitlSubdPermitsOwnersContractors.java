package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdStatePolitlSubdPermitsOwnersContractors.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdStatePolitlSubdPermitsOwnersContractors extends entity.GL7SublineTypeSchedCov {
  protected GL7AddlInsdStatePolitlSubdPermitsOwnersContractors()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdStatePolitlSubdPermitsOwnersContractors(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdStatePolitlSubdPermitsOwnersContractors");
  }
  
  public GL7AddlInsdStatePolitlSubdPermitsOwnersContractors(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdStatePolitlSubdPermitsOwnersContractors");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdStatePolitlSubdPermitsOwnersContractorsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdStatePolitlSubdPermitsOwnersContractors>() {
      public productmodel.GL7AddlInsdStatePolitlSubdPermitsOwnersContractors newEmptyInstance() {
        return new productmodel.GL7AddlInsdStatePolitlSubdPermitsOwnersContractors();
      }
      
      
    });
  }
}