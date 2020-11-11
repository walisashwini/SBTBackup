package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclSpecificAccidentsProdsWorkOrLocation.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclSpecificAccidentsProdsWorkOrLocation extends entity.GL7SublineTypeSchedExcl {
  protected GL7ExclSpecificAccidentsProdsWorkOrLocation()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclSpecificAccidentsProdsWorkOrLocation(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclSpecificAccidentsProdsWorkOrLocation");
  }
  
  public GL7ExclSpecificAccidentsProdsWorkOrLocation(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclSpecificAccidentsProdsWorkOrLocation");
  }
  
  public productmodel.DirectGL7ManualPremium83Type getGL7ManualPremium83Term() {
    return (productmodel.DirectGL7ManualPremium83Type)getCovTerm("GL7ManualPremium83");
  }
  
  public boolean getHasGL7ManualPremium83Term() {
    return hasCovTerm("GL7ManualPremium83");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclSpecificAccidentsProdsWorkOrLocationInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclSpecificAccidentsProdsWorkOrLocation>() {
      public productmodel.GL7ExclSpecificAccidentsProdsWorkOrLocation newEmptyInstance() {
        return new productmodel.GL7ExclSpecificAccidentsProdsWorkOrLocation();
      }
      
      
    });
  }
}