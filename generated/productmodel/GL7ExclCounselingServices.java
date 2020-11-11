package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclCounselingServices.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclCounselingServices extends entity.GL7SublineTypeExcl {
  protected GL7ExclCounselingServices()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclCounselingServices(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclCounselingServices");
  }
  
  public GL7ExclCounselingServices(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclCounselingServices");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclCounselingServicesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclCounselingServices>() {
      public productmodel.GL7ExclCounselingServices newEmptyInstance() {
        return new productmodel.GL7ExclCounselingServices();
      }
      
      
    });
  }
}