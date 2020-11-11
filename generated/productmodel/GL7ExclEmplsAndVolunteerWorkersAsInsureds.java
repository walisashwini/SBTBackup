package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclEmplsAndVolunteerWorkersAsInsureds.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclEmplsAndVolunteerWorkersAsInsureds extends entity.GL7SublineTypeExcl {
  protected GL7ExclEmplsAndVolunteerWorkersAsInsureds()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclEmplsAndVolunteerWorkersAsInsureds(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclEmplsAndVolunteerWorkersAsInsureds");
  }
  
  public GL7ExclEmplsAndVolunteerWorkersAsInsureds(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclEmplsAndVolunteerWorkersAsInsureds");
  }
  
  public productmodel.DirectGL7ManualPremium63Type getGL7ManualPremium63Term() {
    return (productmodel.DirectGL7ManualPremium63Type)getCovTerm("GL7ManualPremium63");
  }
  
  public boolean getHasGL7ManualPremium63Term() {
    return hasCovTerm("GL7ManualPremium63");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclEmplsAndVolunteerWorkersAsInsuredsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclEmplsAndVolunteerWorkersAsInsureds>() {
      public productmodel.GL7ExclEmplsAndVolunteerWorkersAsInsureds newEmptyInstance() {
        return new productmodel.GL7ExclEmplsAndVolunteerWorkersAsInsureds();
      }
      
      
    });
  }
}