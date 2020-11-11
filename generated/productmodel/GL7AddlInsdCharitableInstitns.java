package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdCharitableInstitns.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdCharitableInstitns extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdCharitableInstitns()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdCharitableInstitns(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdCharitableInstitns");
  }
  
  public GL7AddlInsdCharitableInstitns(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdCharitableInstitns");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdCharitableInstitnsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdCharitableInstitns>() {
      public productmodel.GL7AddlInsdCharitableInstitns newEmptyInstance() {
        return new productmodel.GL7AddlInsdCharitableInstitns();
      }
      
      
    });
  }
}