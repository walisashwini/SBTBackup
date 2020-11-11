package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclConstructionMngmtErrorsOmissions.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclConstructionMngmtErrorsOmissions extends entity.GL7SublineTypeExcl {
  protected GL7ExclConstructionMngmtErrorsOmissions()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclConstructionMngmtErrorsOmissions(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclConstructionMngmtErrorsOmissions");
  }
  
  public GL7ExclConstructionMngmtErrorsOmissions(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclConstructionMngmtErrorsOmissions");
  }
  
  public productmodel.DirectGL7ManualPremium53Type getGL7ManualPremium53Term() {
    return (productmodel.DirectGL7ManualPremium53Type)getCovTerm("GL7ManualPremium53");
  }
  
  public boolean getHasGL7ManualPremium53Term() {
    return hasCovTerm("GL7ManualPremium53");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclConstructionMngmtErrorsOmissionsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclConstructionMngmtErrorsOmissions>() {
      public productmodel.GL7ExclConstructionMngmtErrorsOmissions newEmptyInstance() {
        return new productmodel.GL7ExclConstructionMngmtErrorsOmissions();
      }
      
      
    });
  }
}