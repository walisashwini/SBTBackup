package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmendmentOfCovTerritoryWorldwideCovProdsCompld1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmendmentOfCovTerritoryWorldwideCovProdsCompld1 extends entity.GL7SublineTypeCov {
  protected GL7AmendmentOfCovTerritoryWorldwideCovProdsCompld1()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmendmentOfCovTerritoryWorldwideCovProdsCompld1(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmendmentOfCovTerritoryWorldwideCovProdsCompld1");
  }
  
  public GL7AmendmentOfCovTerritoryWorldwideCovProdsCompld1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmendmentOfCovTerritoryWorldwideCovProdsCompld1");
  }
  
  public productmodel.DirectGL7ManualPremium268Type getGL7ManualPremium268Term() {
    return (productmodel.DirectGL7ManualPremium268Type)getCovTerm("GL7ManualPremium268");
  }
  
  public boolean getHasGL7ManualPremium268Term() {
    return hasCovTerm("GL7ManualPremium268");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmendmentOfCovTerritoryWorldwideCovProdsCompld1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmendmentOfCovTerritoryWorldwideCovProdsCompld1>() {
      public productmodel.GL7AmendmentOfCovTerritoryWorldwideCovProdsCompld1 newEmptyInstance() {
        return new productmodel.GL7AmendmentOfCovTerritoryWorldwideCovProdsCompld1();
      }
      
      
    });
  }
}