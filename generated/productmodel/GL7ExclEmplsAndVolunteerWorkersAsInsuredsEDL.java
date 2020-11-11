package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclEmplsAndVolunteerWorkersAsInsuredsEDL.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclEmplsAndVolunteerWorkersAsInsuredsEDL extends entity.GL7SublineTypeExcl {
  protected GL7ExclEmplsAndVolunteerWorkersAsInsuredsEDL()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclEmplsAndVolunteerWorkersAsInsuredsEDL(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclEmplsAndVolunteerWorkersAsInsuredsEDL");
  }
  
  public GL7ExclEmplsAndVolunteerWorkersAsInsuredsEDL(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclEmplsAndVolunteerWorkersAsInsuredsEDL");
  }
  
  public productmodel.DirectGL7ManualPremium335Type getGL7ManualPremium335Term() {
    return (productmodel.DirectGL7ManualPremium335Type)getCovTerm("GL7ManualPremium335");
  }
  
  public boolean getHasGL7ManualPremium335Term() {
    return hasCovTerm("GL7ManualPremium335");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclEmplsAndVolunteerWorkersAsInsuredsEDLInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclEmplsAndVolunteerWorkersAsInsuredsEDL>() {
      public productmodel.GL7ExclEmplsAndVolunteerWorkersAsInsuredsEDL newEmptyInstance() {
        return new productmodel.GL7ExclEmplsAndVolunteerWorkersAsInsuredsEDL();
      }
      
      
    });
  }
}