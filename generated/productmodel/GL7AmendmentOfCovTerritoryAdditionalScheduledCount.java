package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmendmentOfCovTerritoryAdditionalScheduledCount.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmendmentOfCovTerritoryAdditionalScheduledCount extends entity.GL7SublineTypeSchedCov {
  protected GL7AmendmentOfCovTerritoryAdditionalScheduledCount()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmendmentOfCovTerritoryAdditionalScheduledCount(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmendmentOfCovTerritoryAdditionalScheduledCount");
  }
  
  public GL7AmendmentOfCovTerritoryAdditionalScheduledCount(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmendmentOfCovTerritoryAdditionalScheduledCount");
  }
  
  public productmodel.DirectGL7ManualPremium263Type getGL7ManualPremium263Term() {
    return (productmodel.DirectGL7ManualPremium263Type)getCovTerm("GL7ManualPremium263");
  }
  
  public boolean getHasGL7ManualPremium263Term() {
    return hasCovTerm("GL7ManualPremium263");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmendmentOfCovTerritoryAdditionalScheduledCountInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmendmentOfCovTerritoryAdditionalScheduledCount>() {
      public productmodel.GL7AmendmentOfCovTerritoryAdditionalScheduledCount newEmptyInstance() {
        return new productmodel.GL7AmendmentOfCovTerritoryAdditionalScheduledCount();
      }
      
      
    });
  }
}