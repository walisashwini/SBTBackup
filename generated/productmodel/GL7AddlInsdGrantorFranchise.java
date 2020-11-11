package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdGrantorFranchise.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdGrantorFranchise extends entity.GL7SublineTypeSchedCov {
  protected GL7AddlInsdGrantorFranchise()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdGrantorFranchise(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdGrantorFranchise");
  }
  
  public GL7AddlInsdGrantorFranchise(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdGrantorFranchise");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdGrantorFranchiseInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdGrantorFranchise>() {
      public productmodel.GL7AddlInsdGrantorFranchise newEmptyInstance() {
        return new productmodel.GL7AddlInsdGrantorFranchise();
      }
      
      
    });
  }
}