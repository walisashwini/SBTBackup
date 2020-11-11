package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifie.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifie extends entity.GL7SublineTypeSchedCov {
  protected GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifie()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifie(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifie");
  }
  
  public GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifie(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifie");
  }
  
  public productmodel.DirectGL7ManualPremium274Type getGL7ManualPremium274Term() {
    return (productmodel.DirectGL7ManualPremium274Type)getCovTerm("GL7ManualPremium274");
  }
  
  public boolean getHasGL7ManualPremium274Term() {
    return hasCovTerm("GL7ManualPremium274");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifieInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifie>() {
      public productmodel.GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifie newEmptyInstance() {
        return new productmodel.GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifie();
      }
      
      
    });
  }
}