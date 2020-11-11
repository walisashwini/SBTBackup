package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdCondoUnitOwners.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdCondoUnitOwners extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdCondoUnitOwners()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdCondoUnitOwners(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdCondoUnitOwners");
  }
  
  public GL7AddlInsdCondoUnitOwners(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdCondoUnitOwners");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdCondoUnitOwnersInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdCondoUnitOwners>() {
      public productmodel.GL7AddlInsdCondoUnitOwners newEmptyInstance() {
        return new productmodel.GL7AddlInsdCondoUnitOwners();
      }
      
      
    });
  }
}