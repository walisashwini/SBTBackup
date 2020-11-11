package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CannabisExclPollution.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CannabisExclPollution extends entity.GL7SublineTypeExcl {
  protected GL7CannabisExclPollution()  {
    super((java.lang.Void)null);
  }
  
  public GL7CannabisExclPollution(entity.PolicyPeriod branch)  {
    super(branch, "GL7CannabisExclPollution");
  }
  
  public GL7CannabisExclPollution(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CannabisExclPollution");
  }
  
  public productmodel.DirectGL7ManualPremium290Type getGL7ManualPremium290Term() {
    return (productmodel.DirectGL7ManualPremium290Type)getCovTerm("GL7ManualPremium290");
  }
  
  public boolean getHasGL7ManualPremium290Term() {
    return hasCovTerm("GL7ManualPremium290");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CannabisExclPollutionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CannabisExclPollution>() {
      public productmodel.GL7CannabisExclPollution newEmptyInstance() {
        return new productmodel.GL7CannabisExclPollution();
      }
      
      
    });
  }
}