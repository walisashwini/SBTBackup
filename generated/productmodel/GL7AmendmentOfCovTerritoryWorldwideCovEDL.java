package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmendmentOfCovTerritoryWorldwideCovEDL.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmendmentOfCovTerritoryWorldwideCovEDL extends entity.GL7SublineTypeCov {
  protected GL7AmendmentOfCovTerritoryWorldwideCovEDL()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmendmentOfCovTerritoryWorldwideCovEDL(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmendmentOfCovTerritoryWorldwideCovEDL");
  }
  
  public GL7AmendmentOfCovTerritoryWorldwideCovEDL(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmendmentOfCovTerritoryWorldwideCovEDL");
  }
  
  public productmodel.DirectGL7ManualPremium269Type getGL7ManualPremium269Term() {
    return (productmodel.DirectGL7ManualPremium269Type)getCovTerm("GL7ManualPremium269");
  }
  
  public boolean getHasGL7ManualPremium269Term() {
    return hasCovTerm("GL7ManualPremium269");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmendmentOfCovTerritoryWorldwideCovEDLInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmendmentOfCovTerritoryWorldwideCovEDL>() {
      public productmodel.GL7AmendmentOfCovTerritoryWorldwideCovEDL newEmptyInstance() {
        return new productmodel.GL7AmendmentOfCovTerritoryWorldwideCovEDL();
      }
      
      
    });
  }
}