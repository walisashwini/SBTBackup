package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclUnmannedAircraftCovAOnly.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclUnmannedAircraftCovAOnly extends entity.GL7SublineTypeExcl {
  protected GL7ExclUnmannedAircraftCovAOnly()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclUnmannedAircraftCovAOnly(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclUnmannedAircraftCovAOnly");
  }
  
  public GL7ExclUnmannedAircraftCovAOnly(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclUnmannedAircraftCovAOnly");
  }
  
  public productmodel.DirectGL7ManualPremium104Type getGL7ManualPremium104Term() {
    return (productmodel.DirectGL7ManualPremium104Type)getCovTerm("GL7ManualPremium104");
  }
  
  public boolean getHasGL7ManualPremium104Term() {
    return hasCovTerm("GL7ManualPremium104");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclUnmannedAircraftCovAOnlyInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclUnmannedAircraftCovAOnly>() {
      public productmodel.GL7ExclUnmannedAircraftCovAOnly newEmptyInstance() {
        return new productmodel.GL7ExclUnmannedAircraftCovAOnly();
      }
      
      
    });
  }
}