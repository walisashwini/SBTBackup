package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclOilGasProducingOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclOilGasProducingOps extends entity.GL7SublineTypeExcl {
  protected GL7ExclOilGasProducingOps()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclOilGasProducingOps(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclOilGasProducingOps");
  }
  
  public GL7ExclOilGasProducingOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclOilGasProducingOps");
  }
  
  public productmodel.DirectGL7ManualPremium73Type getGL7ManualPremium73Term() {
    return (productmodel.DirectGL7ManualPremium73Type)getCovTerm("GL7ManualPremium73");
  }
  
  public boolean getHasGL7ManualPremium73Term() {
    return hasCovTerm("GL7ManualPremium73");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclOilGasProducingOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclOilGasProducingOps>() {
      public productmodel.GL7ExclOilGasProducingOps newEmptyInstance() {
        return new productmodel.GL7ExclOilGasProducingOps();
      }
      
      
    });
  }
}