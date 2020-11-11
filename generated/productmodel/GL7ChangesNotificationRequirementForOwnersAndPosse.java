package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ChangesNotificationRequirementForOwnersAndPosse.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ChangesNotificationRequirementForOwnersAndPosse extends entity.GL7SublineCond {
  protected GL7ChangesNotificationRequirementForOwnersAndPosse()  {
    super((java.lang.Void)null);
  }
  
  public GL7ChangesNotificationRequirementForOwnersAndPosse(entity.PolicyPeriod branch)  {
    super(branch, "GL7ChangesNotificationRequirementForOwnersAndPosse");
  }
  
  public GL7ChangesNotificationRequirementForOwnersAndPosse(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ChangesNotificationRequirementForOwnersAndPosse");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ChangesNotificationRequirementForOwnersAndPosseInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ChangesNotificationRequirementForOwnersAndPosse>() {
      public productmodel.GL7ChangesNotificationRequirementForOwnersAndPosse newEmptyInstance() {
        return new productmodel.GL7ChangesNotificationRequirementForOwnersAndPosse();
      }
      
      
    });
  }
}