package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7UndergroundResourcesAndEquipmtCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7UndergroundResourcesAndEquipmtCov extends entity.GL7SublineTypeSchedCov {
  protected GL7UndergroundResourcesAndEquipmtCov()  {
    super((java.lang.Void)null);
  }
  
  public GL7UndergroundResourcesAndEquipmtCov(entity.PolicyPeriod branch)  {
    super(branch, "GL7UndergroundResourcesAndEquipmtCov");
  }
  
  public GL7UndergroundResourcesAndEquipmtCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7UndergroundResourcesAndEquipmtCov");
  }
  
  public productmodel.DirectGL7AggLimit9Type getGL7AggLimit9Term() {
    return (productmodel.DirectGL7AggLimit9Type)getCovTerm("GL7AggLimit9");
  }
  
  public productmodel.DirectGL7ManualPremium167Type getGL7ManualPremium167Term() {
    return (productmodel.DirectGL7ManualPremium167Type)getCovTerm("GL7ManualPremium167");
  }
  
  public boolean getHasGL7AggLimit9Term() {
    return hasCovTerm("GL7AggLimit9");
  }
  
  public boolean getHasGL7ManualPremium167Term() {
    return hasCovTerm("GL7ManualPremium167");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7UndergroundResourcesAndEquipmtCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7UndergroundResourcesAndEquipmtCov>() {
      public productmodel.GL7UndergroundResourcesAndEquipmtCov newEmptyInstance() {
        return new productmodel.GL7UndergroundResourcesAndEquipmtCov();
      }
      
      
    });
  }
}