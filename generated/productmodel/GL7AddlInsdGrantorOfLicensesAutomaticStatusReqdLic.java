package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdGrantorOfLicensesAutomaticStatusReqdLic.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdGrantorOfLicensesAutomaticStatusReqdLic extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdGrantorOfLicensesAutomaticStatusReqdLic()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdGrantorOfLicensesAutomaticStatusReqdLic(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdGrantorOfLicensesAutomaticStatusReqdLic");
  }
  
  public GL7AddlInsdGrantorOfLicensesAutomaticStatusReqdLic(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdGrantorOfLicensesAutomaticStatusReqdLic");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdGrantorOfLicensesAutomaticStatusReqdLicInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdGrantorOfLicensesAutomaticStatusReqdLic>() {
      public productmodel.GL7AddlInsdGrantorOfLicensesAutomaticStatusReqdLic newEmptyInstance() {
        return new productmodel.GL7AddlInsdGrantorOfLicensesAutomaticStatusReqdLic();
      }
      
      
    });
  }
}