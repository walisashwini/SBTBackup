package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmendmentOfCovTerritoryAdditionalScheduledCoun1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmendmentOfCovTerritoryAdditionalScheduledCoun1 extends entity.GL7SublineTypeSchedCov {
  protected GL7AmendmentOfCovTerritoryAdditionalScheduledCoun1()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmendmentOfCovTerritoryAdditionalScheduledCoun1(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmendmentOfCovTerritoryAdditionalScheduledCoun1");
  }
  
  public GL7AmendmentOfCovTerritoryAdditionalScheduledCoun1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmendmentOfCovTerritoryAdditionalScheduledCoun1");
  }
  
  public productmodel.DirectGL7ManualPremium264Type getGL7ManualPremium264Term() {
    return (productmodel.DirectGL7ManualPremium264Type)getCovTerm("GL7ManualPremium264");
  }
  
  public boolean getHasGL7ManualPremium264Term() {
    return hasCovTerm("GL7ManualPremium264");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmendmentOfCovTerritoryAdditionalScheduledCoun1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmendmentOfCovTerritoryAdditionalScheduledCoun1>() {
      public productmodel.GL7AmendmentOfCovTerritoryAdditionalScheduledCoun1 newEmptyInstance() {
        return new productmodel.GL7AmendmentOfCovTerritoryAdditionalScheduledCoun1();
      }
      
      
    });
  }
}