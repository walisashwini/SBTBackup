package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclVolunteerWorkers.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclVolunteerWorkers extends entity.GL7SublineTypeExcl {
  protected GL7ExclVolunteerWorkers()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclVolunteerWorkers(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclVolunteerWorkers");
  }
  
  public GL7ExclVolunteerWorkers(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclVolunteerWorkers");
  }
  
  public productmodel.DirectGL7ManualPremium87Type getGL7ManualPremium87Term() {
    return (productmodel.DirectGL7ManualPremium87Type)getCovTerm("GL7ManualPremium87");
  }
  
  public boolean getHasGL7ManualPremium87Term() {
    return hasCovTerm("GL7ManualPremium87");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclVolunteerWorkersInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclVolunteerWorkers>() {
      public productmodel.GL7ExclVolunteerWorkers newEmptyInstance() {
        return new productmodel.GL7ExclVolunteerWorkers();
      }
      
      
    });
  }
}