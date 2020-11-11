package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclUnmannedAircraftCovBOnly.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclUnmannedAircraftCovBOnly extends entity.GL7SublineTypeExcl {
  protected GL7ExclUnmannedAircraftCovBOnly()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclUnmannedAircraftCovBOnly(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclUnmannedAircraftCovBOnly");
  }
  
  public GL7ExclUnmannedAircraftCovBOnly(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclUnmannedAircraftCovBOnly");
  }
  
  public productmodel.DirectGL7ManualPremium105Type getGL7ManualPremium105Term() {
    return (productmodel.DirectGL7ManualPremium105Type)getCovTerm("GL7ManualPremium105");
  }
  
  public boolean getHasGL7ManualPremium105Term() {
    return hasCovTerm("GL7ManualPremium105");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclUnmannedAircraftCovBOnlyInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclUnmannedAircraftCovBOnly>() {
      public productmodel.GL7ExclUnmannedAircraftCovBOnly newEmptyInstance() {
        return new productmodel.GL7ExclUnmannedAircraftCovBOnly();
      }
      
      
    });
  }
}