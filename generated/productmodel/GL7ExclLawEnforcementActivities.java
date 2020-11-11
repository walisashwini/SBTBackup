package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclLawEnforcementActivities.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclLawEnforcementActivities extends entity.GL7SublineTypeExcl {
  protected GL7ExclLawEnforcementActivities()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclLawEnforcementActivities(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclLawEnforcementActivities");
  }
  
  public GL7ExclLawEnforcementActivities(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclLawEnforcementActivities");
  }
  
  public productmodel.DirectGL7ManualPremium71Type getGL7ManualPremium71Term() {
    return (productmodel.DirectGL7ManualPremium71Type)getCovTerm("GL7ManualPremium71");
  }
  
  public boolean getHasGL7ManualPremium71Term() {
    return hasCovTerm("GL7ManualPremium71");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclLawEnforcementActivitiesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclLawEnforcementActivities>() {
      public productmodel.GL7ExclLawEnforcementActivities newEmptyInstance() {
        return new productmodel.GL7ExclLawEnforcementActivities();
      }
      
      
    });
  }
}