package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7PesticideOrHerbicideApplicatorCovOwnersContract.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7PesticideOrHerbicideApplicatorCovOwnersContract extends entity.GL7SublineTypeSchedCov {
  protected GL7PesticideOrHerbicideApplicatorCovOwnersContract()  {
    super((java.lang.Void)null);
  }
  
  public GL7PesticideOrHerbicideApplicatorCovOwnersContract(entity.PolicyPeriod branch)  {
    super(branch, "GL7PesticideOrHerbicideApplicatorCovOwnersContract");
  }
  
  public GL7PesticideOrHerbicideApplicatorCovOwnersContract(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7PesticideOrHerbicideApplicatorCovOwnersContract");
  }
  
  public productmodel.DirectGL7ManualPremium138Type getGL7ManualPremium138Term() {
    return (productmodel.DirectGL7ManualPremium138Type)getCovTerm("GL7ManualPremium138");
  }
  
  public boolean getHasGL7ManualPremium138Term() {
    return hasCovTerm("GL7ManualPremium138");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7PesticideOrHerbicideApplicatorCovOwnersContractInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7PesticideOrHerbicideApplicatorCovOwnersContract>() {
      public productmodel.GL7PesticideOrHerbicideApplicatorCovOwnersContract newEmptyInstance() {
        return new productmodel.GL7PesticideOrHerbicideApplicatorCovOwnersContract();
      }
      
      
    });
  }
}