package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdElectiveOrAppointiveExecutiveOfficersOf.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdElectiveOrAppointiveExecutiveOfficersOf extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdElectiveOrAppointiveExecutiveOfficersOf()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdElectiveOrAppointiveExecutiveOfficersOf(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdElectiveOrAppointiveExecutiveOfficersOf");
  }
  
  public GL7AddlInsdElectiveOrAppointiveExecutiveOfficersOf(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdElectiveOrAppointiveExecutiveOfficersOf");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdElectiveOrAppointiveExecutiveOfficersOfInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdElectiveOrAppointiveExecutiveOfficersOf>() {
      public productmodel.GL7AddlInsdElectiveOrAppointiveExecutiveOfficersOf newEmptyInstance() {
        return new productmodel.GL7AddlInsdElectiveOrAppointiveExecutiveOfficersOf();
      }
      
      
    });
  }
}