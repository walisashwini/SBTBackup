package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdUsersOfTeamsDraftOrSaddleAnimals.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdUsersOfTeamsDraftOrSaddleAnimals extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdUsersOfTeamsDraftOrSaddleAnimals()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdUsersOfTeamsDraftOrSaddleAnimals(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdUsersOfTeamsDraftOrSaddleAnimals");
  }
  
  public GL7AddlInsdUsersOfTeamsDraftOrSaddleAnimals(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdUsersOfTeamsDraftOrSaddleAnimals");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdUsersOfTeamsDraftOrSaddleAnimalsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdUsersOfTeamsDraftOrSaddleAnimals>() {
      public productmodel.GL7AddlInsdUsersOfTeamsDraftOrSaddleAnimals newEmptyInstance() {
        return new productmodel.GL7AddlInsdUsersOfTeamsDraftOrSaddleAnimals();
      }
      
      
    });
  }
}