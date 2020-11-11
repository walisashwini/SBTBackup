package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtdExclPersonalAdvertisingInjLawyers.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LmtdExclPersonalAdvertisingInjLawyers extends entity.GL7SublineTypeExcl {
  protected GL7LmtdExclPersonalAdvertisingInjLawyers()  {
    super((java.lang.Void)null);
  }
  
  public GL7LmtdExclPersonalAdvertisingInjLawyers(entity.PolicyPeriod branch)  {
    super(branch, "GL7LmtdExclPersonalAdvertisingInjLawyers");
  }
  
  public GL7LmtdExclPersonalAdvertisingInjLawyers(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LmtdExclPersonalAdvertisingInjLawyers");
  }
  
  public productmodel.DirectGL7ManualPremium127Type getGL7ManualPremium127Term() {
    return (productmodel.DirectGL7ManualPremium127Type)getCovTerm("GL7ManualPremium127");
  }
  
  public boolean getHasGL7ManualPremium127Term() {
    return hasCovTerm("GL7ManualPremium127");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtdExclPersonalAdvertisingInjLawyersInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LmtdExclPersonalAdvertisingInjLawyers>() {
      public productmodel.GL7LmtdExclPersonalAdvertisingInjLawyers newEmptyInstance() {
        return new productmodel.GL7LmtdExclPersonalAdvertisingInjLawyers();
      }
      
      
    });
  }
}