package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclPersonalAdvertisingInjury.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclPersonalAdvertisingInjury extends entity.GL7SublineTypeExcl {
  protected GL7ExclPersonalAdvertisingInjury()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclPersonalAdvertisingInjury(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclPersonalAdvertisingInjury");
  }
  
  public GL7ExclPersonalAdvertisingInjury(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclPersonalAdvertisingInjury");
  }
  
  public productmodel.DirectGL7ManualPremium74Type getGL7ManualPremium74Term() {
    return (productmodel.DirectGL7ManualPremium74Type)getCovTerm("GL7ManualPremium74");
  }
  
  public boolean getHasGL7ManualPremium74Term() {
    return hasCovTerm("GL7ManualPremium74");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclPersonalAdvertisingInjuryInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclPersonalAdvertisingInjury>() {
      public productmodel.GL7ExclPersonalAdvertisingInjury newEmptyInstance() {
        return new productmodel.GL7ExclPersonalAdvertisingInjury();
      }
      
      
    });
  }
}