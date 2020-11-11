package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclExistenceOrMaintenanceOfStreetsRdsHwysOrBri.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclExistenceOrMaintenanceOfStreetsRdsHwysOrBri extends entity.GL7SublineTypeExcl {
  protected GL7ExclExistenceOrMaintenanceOfStreetsRdsHwysOrBri()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclExistenceOrMaintenanceOfStreetsRdsHwysOrBri(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclExistenceOrMaintenanceOfStreetsRdsHwysOrBri");
  }
  
  public GL7ExclExistenceOrMaintenanceOfStreetsRdsHwysOrBri(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclExistenceOrMaintenanceOfStreetsRdsHwysOrBri");
  }
  
  public productmodel.DirectGL7ManualPremium64Type getGL7ManualPremium64Term() {
    return (productmodel.DirectGL7ManualPremium64Type)getCovTerm("GL7ManualPremium64");
  }
  
  public boolean getHasGL7ManualPremium64Term() {
    return hasCovTerm("GL7ManualPremium64");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclExistenceOrMaintenanceOfStreetsRdsHwysOrBriInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclExistenceOrMaintenanceOfStreetsRdsHwysOrBri>() {
      public productmodel.GL7ExclExistenceOrMaintenanceOfStreetsRdsHwysOrBri newEmptyInstance() {
        return new productmodel.GL7ExclExistenceOrMaintenanceOfStreetsRdsHwysOrBri();
      }
      
      
    });
  }
}