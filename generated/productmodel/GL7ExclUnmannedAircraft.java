package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclUnmannedAircraft.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclUnmannedAircraft extends entity.GL7SublineTypeExcl {
  protected GL7ExclUnmannedAircraft()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclUnmannedAircraft(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclUnmannedAircraft");
  }
  
  public GL7ExclUnmannedAircraft(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclUnmannedAircraft");
  }
  
  public productmodel.DirectGL7ManualPremium103Type getGL7ManualPremium103Term() {
    return (productmodel.DirectGL7ManualPremium103Type)getCovTerm("GL7ManualPremium103");
  }
  
  public boolean getHasGL7ManualPremium103Term() {
    return hasCovTerm("GL7ManualPremium103");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclUnmannedAircraftInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclUnmannedAircraft>() {
      public productmodel.GL7ExclUnmannedAircraft newEmptyInstance() {
        return new productmodel.GL7ExclUnmannedAircraft();
      }
      
      
    });
  }
}