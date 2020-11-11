package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7TotalPollutionExclOwnersContractors.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7TotalPollutionExclOwnersContractors extends entity.GL7SublineTypeExcl {
  protected GL7TotalPollutionExclOwnersContractors()  {
    super((java.lang.Void)null);
  }
  
  public GL7TotalPollutionExclOwnersContractors(entity.PolicyPeriod branch)  {
    super(branch, "GL7TotalPollutionExclOwnersContractors");
  }
  
  public GL7TotalPollutionExclOwnersContractors(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7TotalPollutionExclOwnersContractors");
  }
  
  public productmodel.DirectGL7ManualPremium391Type getGL7ManualPremium391Term() {
    return (productmodel.DirectGL7ManualPremium391Type)getCovTerm("GL7ManualPremium391");
  }
  
  public boolean getHasGL7ManualPremium391Term() {
    return hasCovTerm("GL7ManualPremium391");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7TotalPollutionExclOwnersContractorsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7TotalPollutionExclOwnersContractors>() {
      public productmodel.GL7TotalPollutionExclOwnersContractors newEmptyInstance() {
        return new productmodel.GL7TotalPollutionExclOwnersContractors();
      }
      
      
    });
  }
}