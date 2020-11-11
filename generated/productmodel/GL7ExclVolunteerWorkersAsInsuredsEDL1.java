package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclVolunteerWorkersAsInsuredsEDL1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclVolunteerWorkersAsInsuredsEDL1 extends entity.GL7SublineTypeExcl {
  protected GL7ExclVolunteerWorkersAsInsuredsEDL1()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclVolunteerWorkersAsInsuredsEDL1(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclVolunteerWorkersAsInsuredsEDL1");
  }
  
  public GL7ExclVolunteerWorkersAsInsuredsEDL1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclVolunteerWorkersAsInsuredsEDL1");
  }
  
  public productmodel.DirectGL7ManualPremium368Type getGL7ManualPremium368Term() {
    return (productmodel.DirectGL7ManualPremium368Type)getCovTerm("GL7ManualPremium368");
  }
  
  public boolean getHasGL7ManualPremium368Term() {
    return hasCovTerm("GL7ManualPremium368");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclVolunteerWorkersAsInsuredsEDL1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclVolunteerWorkersAsInsuredsEDL1>() {
      public productmodel.GL7ExclVolunteerWorkersAsInsuredsEDL1 newEmptyInstance() {
        return new productmodel.GL7ExclVolunteerWorkersAsInsuredsEDL1();
      }
      
      
    });
  }
}