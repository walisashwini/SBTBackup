package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclCampsOrCampgrounds.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclCampsOrCampgrounds extends entity.GL7SublineTypeExcl {
  protected GL7ExclCampsOrCampgrounds()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclCampsOrCampgrounds(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclCampsOrCampgrounds");
  }
  
  public GL7ExclCampsOrCampgrounds(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclCampsOrCampgrounds");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclCampsOrCampgroundsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclCampsOrCampgrounds>() {
      public productmodel.GL7ExclCampsOrCampgrounds newEmptyInstance() {
        return new productmodel.GL7ExclCampsOrCampgrounds();
      }
      
      
    });
  }
}