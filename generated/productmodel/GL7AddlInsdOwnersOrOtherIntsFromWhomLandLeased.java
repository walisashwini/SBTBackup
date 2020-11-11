package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased extends entity.GL7LocationSchedCov {
  protected GL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased");
  }
  
  public GL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdOwnersOrOtherIntsFromWhomLandLeasedInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased>() {
      public productmodel.GL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased newEmptyInstance() {
        return new productmodel.GL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased();
      }
      
      
    });
  }
}