package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdCoOwnerInsdPrem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdCoOwnerInsdPrem extends entity.GL7LocationSchedCov {
  protected GL7AddlInsdCoOwnerInsdPrem()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdCoOwnerInsdPrem(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdCoOwnerInsdPrem");
  }
  
  public GL7AddlInsdCoOwnerInsdPrem(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdCoOwnerInsdPrem");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdCoOwnerInsdPremInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdCoOwnerInsdPrem>() {
      public productmodel.GL7AddlInsdCoOwnerInsdPrem newEmptyInstance() {
        return new productmodel.GL7AddlInsdCoOwnerInsdPrem();
      }
      
      
    });
  }
}