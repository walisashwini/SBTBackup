package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi1 extends entity.GL7SublineTypeSchedCov {
  protected GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi1()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi1(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi1");
  }
  
  public GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi1");
  }
  
  public productmodel.DirectGL7ManualPremium273Type getGL7ManualPremium273Term() {
    return (productmodel.DirectGL7ManualPremium273Type)getCovTerm("GL7ManualPremium273");
  }
  
  public boolean getHasGL7ManualPremium273Term() {
    return hasCovTerm("GL7ManualPremium273");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi1>() {
      public productmodel.GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi1 newEmptyInstance() {
        return new productmodel.GL7AmendmentOfCovTerritoryWorldwideCovWithSpecifi1();
      }
      
      
    });
  }
}