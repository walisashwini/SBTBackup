package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7PesticideOrHerbicideApplicatorCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7PesticideOrHerbicideApplicatorCov extends entity.GL7SublineTypeSchedCov {
  protected GL7PesticideOrHerbicideApplicatorCov()  {
    super((java.lang.Void)null);
  }
  
  public GL7PesticideOrHerbicideApplicatorCov(entity.PolicyPeriod branch)  {
    super(branch, "GL7PesticideOrHerbicideApplicatorCov");
  }
  
  public GL7PesticideOrHerbicideApplicatorCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7PesticideOrHerbicideApplicatorCov");
  }
  
  public productmodel.DirectGL7ManualPremium137Type getGL7ManualPremium137Term() {
    return (productmodel.DirectGL7ManualPremium137Type)getCovTerm("GL7ManualPremium137");
  }
  
  public boolean getHasGL7ManualPremium137Term() {
    return hasCovTerm("GL7ManualPremium137");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7PesticideOrHerbicideApplicatorCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7PesticideOrHerbicideApplicatorCov>() {
      public productmodel.GL7PesticideOrHerbicideApplicatorCov newEmptyInstance() {
        return new productmodel.GL7PesticideOrHerbicideApplicatorCov();
      }
      
      
    });
  }
}