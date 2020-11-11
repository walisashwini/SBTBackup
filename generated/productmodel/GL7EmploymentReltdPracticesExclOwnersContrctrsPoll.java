package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7EmploymentReltdPracticesExclOwnersContrctrsPoll.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7EmploymentReltdPracticesExclOwnersContrctrsPoll extends entity.GL7SublineTypeExcl {
  protected GL7EmploymentReltdPracticesExclOwnersContrctrsPoll()  {
    super((java.lang.Void)null);
  }
  
  public GL7EmploymentReltdPracticesExclOwnersContrctrsPoll(entity.PolicyPeriod branch)  {
    super(branch, "GL7EmploymentReltdPracticesExclOwnersContrctrsPoll");
  }
  
  public GL7EmploymentReltdPracticesExclOwnersContrctrsPoll(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7EmploymentReltdPracticesExclOwnersContrctrsPoll");
  }
  
  public productmodel.DirectGL7ManualPremium48Type getGL7ManualPremium48Term() {
    return (productmodel.DirectGL7ManualPremium48Type)getCovTerm("GL7ManualPremium48");
  }
  
  public boolean getHasGL7ManualPremium48Term() {
    return hasCovTerm("GL7ManualPremium48");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7EmploymentReltdPracticesExclOwnersContrctrsPollInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7EmploymentReltdPracticesExclOwnersContrctrsPoll>() {
      public productmodel.GL7EmploymentReltdPracticesExclOwnersContrctrsPoll newEmptyInstance() {
        return new productmodel.GL7EmploymentReltdPracticesExclOwnersContrctrsPoll();
      }
      
      
    });
  }
}