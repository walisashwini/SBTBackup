package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmendmentOfCovTerritoryWorldwideCovProdsCompldO.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmendmentOfCovTerritoryWorldwideCovProdsCompldO extends entity.GL7SublineTypeCov {
  protected GL7AmendmentOfCovTerritoryWorldwideCovProdsCompldO()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmendmentOfCovTerritoryWorldwideCovProdsCompldO(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmendmentOfCovTerritoryWorldwideCovProdsCompldO");
  }
  
  public GL7AmendmentOfCovTerritoryWorldwideCovProdsCompldO(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmendmentOfCovTerritoryWorldwideCovProdsCompldO");
  }
  
  public productmodel.DirectGL7ManualPremium267Type getGL7ManualPremium267Term() {
    return (productmodel.DirectGL7ManualPremium267Type)getCovTerm("GL7ManualPremium267");
  }
  
  public boolean getHasGL7ManualPremium267Term() {
    return hasCovTerm("GL7ManualPremium267");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmendmentOfCovTerritoryWorldwideCovProdsCompldOInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmendmentOfCovTerritoryWorldwideCovProdsCompldO>() {
      public productmodel.GL7AmendmentOfCovTerritoryWorldwideCovProdsCompldO newEmptyInstance() {
        return new productmodel.GL7AmendmentOfCovTerritoryWorldwideCovProdsCompldO();
      }
      
      
    });
  }
}