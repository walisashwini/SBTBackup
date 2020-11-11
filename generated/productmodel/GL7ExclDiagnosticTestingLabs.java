package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclDiagnosticTestingLabs.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclDiagnosticTestingLabs extends entity.GL7SublineTypeExcl {
  protected GL7ExclDiagnosticTestingLabs()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclDiagnosticTestingLabs(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclDiagnosticTestingLabs");
  }
  
  public GL7ExclDiagnosticTestingLabs(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclDiagnosticTestingLabs");
  }
  
  public productmodel.DirectGL7ManualPremium62Type getGL7ManualPremium62Term() {
    return (productmodel.DirectGL7ManualPremium62Type)getCovTerm("GL7ManualPremium62");
  }
  
  public boolean getHasGL7ManualPremium62Term() {
    return hasCovTerm("GL7ManualPremium62");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclDiagnosticTestingLabsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclDiagnosticTestingLabs>() {
      public productmodel.GL7ExclDiagnosticTestingLabs newEmptyInstance() {
        return new productmodel.GL7ExclDiagnosticTestingLabs();
      }
      
      
    });
  }
}