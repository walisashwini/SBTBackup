package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CannabisExclWithHempandLessorsRiskExceptions.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CannabisExclWithHempandLessorsRiskExceptions extends entity.GL7SublineTypeExcl {
  protected GL7CannabisExclWithHempandLessorsRiskExceptions()  {
    super((java.lang.Void)null);
  }
  
  public GL7CannabisExclWithHempandLessorsRiskExceptions(entity.PolicyPeriod branch)  {
    super(branch, "GL7CannabisExclWithHempandLessorsRiskExceptions");
  }
  
  public GL7CannabisExclWithHempandLessorsRiskExceptions(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CannabisExclWithHempandLessorsRiskExceptions");
  }
  
  public productmodel.DirectGL7ManualPremium316Type getGL7ManualPremium316Term() {
    return (productmodel.DirectGL7ManualPremium316Type)getCovTerm("GL7ManualPremium316");
  }
  
  public boolean getHasGL7ManualPremium316Term() {
    return hasCovTerm("GL7ManualPremium316");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CannabisExclWithHempandLessorsRiskExceptionsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CannabisExclWithHempandLessorsRiskExceptions>() {
      public productmodel.GL7CannabisExclWithHempandLessorsRiskExceptions newEmptyInstance() {
        return new productmodel.GL7CannabisExclWithHempandLessorsRiskExceptions();
      }
      
      
    });
  }
}