package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExtendedReportingPeriodForTerr.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExtendedReportingPeriodForTerr extends entity.GL7SublineTypeCov {
  protected GL7ExtendedReportingPeriodForTerr()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExtendedReportingPeriodForTerr(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExtendedReportingPeriodForTerr");
  }
  
  public GL7ExtendedReportingPeriodForTerr(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExtendedReportingPeriodForTerr");
  }
  
  public productmodel.DirectGL7ManualPremium110Type getGL7ManualPremium110Term() {
    return (productmodel.DirectGL7ManualPremium110Type)getCovTerm("GL7ManualPremium110");
  }
  
  public boolean getHasGL7ManualPremium110Term() {
    return hasCovTerm("GL7ManualPremium110");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExtendedReportingPeriodForTerrInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExtendedReportingPeriodForTerr>() {
      public productmodel.GL7ExtendedReportingPeriodForTerr newEmptyInstance() {
        return new productmodel.GL7ExtendedReportingPeriodForTerr();
      }
      
      
    });
  }
}