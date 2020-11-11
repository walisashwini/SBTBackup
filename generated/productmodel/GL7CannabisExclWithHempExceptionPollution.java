package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CannabisExclWithHempExceptionPollution.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CannabisExclWithHempExceptionPollution extends entity.GL7SublineTypeExcl {
  protected GL7CannabisExclWithHempExceptionPollution()  {
    super((java.lang.Void)null);
  }
  
  public GL7CannabisExclWithHempExceptionPollution(entity.PolicyPeriod branch)  {
    super(branch, "GL7CannabisExclWithHempExceptionPollution");
  }
  
  public GL7CannabisExclWithHempExceptionPollution(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CannabisExclWithHempExceptionPollution");
  }
  
  public productmodel.DirectGL7ManualPremium306Type getGL7ManualPremium306Term() {
    return (productmodel.DirectGL7ManualPremium306Type)getCovTerm("GL7ManualPremium306");
  }
  
  public boolean getHasGL7ManualPremium306Term() {
    return hasCovTerm("GL7ManualPremium306");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CannabisExclWithHempExceptionPollutionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CannabisExclWithHempExceptionPollution>() {
      public productmodel.GL7CannabisExclWithHempExceptionPollution newEmptyInstance() {
        return new productmodel.GL7CannabisExclWithHempExceptionPollution();
      }
      
      
    });
  }
}