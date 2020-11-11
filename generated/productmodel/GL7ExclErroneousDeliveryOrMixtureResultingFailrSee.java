package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclErroneousDeliveryOrMixtureResultingFailrSee.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclErroneousDeliveryOrMixtureResultingFailrSee extends entity.GL7SublineTypeExcl {
  protected GL7ExclErroneousDeliveryOrMixtureResultingFailrSee()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclErroneousDeliveryOrMixtureResultingFailrSee(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclErroneousDeliveryOrMixtureResultingFailrSee");
  }
  
  public GL7ExclErroneousDeliveryOrMixtureResultingFailrSee(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclErroneousDeliveryOrMixtureResultingFailrSee");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclErroneousDeliveryOrMixtureResultingFailrSeeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclErroneousDeliveryOrMixtureResultingFailrSee>() {
      public productmodel.GL7ExclErroneousDeliveryOrMixtureResultingFailrSee newEmptyInstance() {
        return new productmodel.GL7ExclErroneousDeliveryOrMixtureResultingFailrSee();
      }
      
      
    });
  }
}