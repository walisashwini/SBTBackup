package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdVolunteerWorkersPollution.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdVolunteerWorkersPollution extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdVolunteerWorkersPollution()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdVolunteerWorkersPollution(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdVolunteerWorkersPollution");
  }
  
  public GL7AddlInsdVolunteerWorkersPollution(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdVolunteerWorkersPollution");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdVolunteerWorkersPollutionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdVolunteerWorkersPollution>() {
      public productmodel.GL7AddlInsdVolunteerWorkersPollution newEmptyInstance() {
        return new productmodel.GL7AddlInsdVolunteerWorkersPollution();
      }
      
      
    });
  }
}