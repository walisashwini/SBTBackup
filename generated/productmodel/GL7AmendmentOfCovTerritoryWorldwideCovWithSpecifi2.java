package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi2.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi2 extends entity.GL7SublineTypeSchedCov {
  protected GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi2()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi2(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi2");
  }
  
  public GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi2(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi2");
  }
  
  public productmodel.DirectGL7ManualPremium272Type getGL7ManualPremium272Term() {
    return (productmodel.DirectGL7ManualPremium272Type)getCovTerm("GL7ManualPremium272");
  }
  
  public boolean getHasGL7ManualPremium272Term() {
    return hasCovTerm("GL7ManualPremium272");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi2InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi2>() {
      public productmodel.GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi2 newEmptyInstance() {
        return new productmodel.GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi2();
      }
      
      
    });
  }
}