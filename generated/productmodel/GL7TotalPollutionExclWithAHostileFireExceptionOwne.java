package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7TotalPollutionExclWithAHostileFireExceptionOwne.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7TotalPollutionExclWithAHostileFireExceptionOwne extends entity.GL7SublineTypeExcl {
  protected GL7TotalPollutionExclWithAHostileFireExceptionOwne()  {
    super((java.lang.Void)null);
  }
  
  public GL7TotalPollutionExclWithAHostileFireExceptionOwne(entity.PolicyPeriod branch)  {
    super(branch, "GL7TotalPollutionExclWithAHostileFireExceptionOwne");
  }
  
  public GL7TotalPollutionExclWithAHostileFireExceptionOwne(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7TotalPollutionExclWithAHostileFireExceptionOwne");
  }
  
  public productmodel.DirectGL7ManualPremium401Type getGL7ManualPremium401Term() {
    return (productmodel.DirectGL7ManualPremium401Type)getCovTerm("GL7ManualPremium401");
  }
  
  public boolean getHasGL7ManualPremium401Term() {
    return hasCovTerm("GL7ManualPremium401");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7TotalPollutionExclWithAHostileFireExceptionOwneInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7TotalPollutionExclWithAHostileFireExceptionOwne>() {
      public productmodel.GL7TotalPollutionExclWithAHostileFireExceptionOwne newEmptyInstance() {
        return new productmodel.GL7TotalPollutionExclWithAHostileFireExceptionOwne();
      }
      
      
    });
  }
}