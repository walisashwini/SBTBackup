package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdVolunteerWorkersProdsCompldOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdVolunteerWorkersProdsCompldOps extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdVolunteerWorkersProdsCompldOps()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdVolunteerWorkersProdsCompldOps(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdVolunteerWorkersProdsCompldOps");
  }
  
  public GL7AddlInsdVolunteerWorkersProdsCompldOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdVolunteerWorkersProdsCompldOps");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdVolunteerWorkersProdsCompldOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdVolunteerWorkersProdsCompldOps>() {
      public productmodel.GL7AddlInsdVolunteerWorkersProdsCompldOps newEmptyInstance() {
        return new productmodel.GL7AddlInsdVolunteerWorkersProdsCompldOps();
      }
      
      
    });
  }
}