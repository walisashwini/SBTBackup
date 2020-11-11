package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7PesticideOrHerbicideApplicatorCovForPropertyInC.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7PesticideOrHerbicideApplicatorCovForPropertyInC extends entity.GL7SublineSchedCov {
  protected GL7PesticideOrHerbicideApplicatorCovForPropertyInC()  {
    super((java.lang.Void)null);
  }
  
  public GL7PesticideOrHerbicideApplicatorCovForPropertyInC(entity.PolicyPeriod branch)  {
    super(branch, "GL7PesticideOrHerbicideApplicatorCovForPropertyInC");
  }
  
  public GL7PesticideOrHerbicideApplicatorCovForPropertyInC(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7PesticideOrHerbicideApplicatorCovForPropertyInC");
  }
  
  public productmodel.DirectGL7AggLimit4Type getGL7AggLimit4Term() {
    return (productmodel.DirectGL7AggLimit4Type)getCovTerm("GL7AggLimit4");
  }
  
  public productmodel.DirectGL7EachOccurrenceLimit3Type getGL7EachOccurrenceLimit3Term() {
    return (productmodel.DirectGL7EachOccurrenceLimit3Type)getCovTerm("GL7EachOccurrenceLimit3");
  }
  
  public productmodel.DirectGL7ManualPremium237Type getGL7ManualPremium237Term() {
    return (productmodel.DirectGL7ManualPremium237Type)getCovTerm("GL7ManualPremium237");
  }
  
  public productmodel.DirectGL7ProdsCompletedOpsAggLimitType getGL7ProdsCompletedOpsAggLimitTerm() {
    return (productmodel.DirectGL7ProdsCompletedOpsAggLimitType)getCovTerm("GL7ProdsCompletedOpsAggLimit");
  }
  
  public boolean getHasGL7AggLimit4Term() {
    return hasCovTerm("GL7AggLimit4");
  }
  
  public boolean getHasGL7EachOccurrenceLimit3Term() {
    return hasCovTerm("GL7EachOccurrenceLimit3");
  }
  
  public boolean getHasGL7ManualPremium237Term() {
    return hasCovTerm("GL7ManualPremium237");
  }
  
  public boolean getHasGL7ProdsCompletedOpsAggLimitTerm() {
    return hasCovTerm("GL7ProdsCompletedOpsAggLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7PesticideOrHerbicideApplicatorCovForPropertyInCInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7PesticideOrHerbicideApplicatorCovForPropertyInC>() {
      public productmodel.GL7PesticideOrHerbicideApplicatorCovForPropertyInC newEmptyInstance() {
        return new productmodel.GL7PesticideOrHerbicideApplicatorCovForPropertyInC();
      }
      
      
    });
  }
}