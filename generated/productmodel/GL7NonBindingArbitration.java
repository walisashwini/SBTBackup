package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7NonBindingArbitration.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7NonBindingArbitration extends entity.GL7SublineTypeCond {
  protected GL7NonBindingArbitration()  {
    super((java.lang.Void)null);
  }
  
  public GL7NonBindingArbitration(entity.PolicyPeriod branch)  {
    super(branch, "GL7NonBindingArbitration");
  }
  
  public GL7NonBindingArbitration(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7NonBindingArbitration");
  }
  
  public productmodel.DirectGL7ManualPremium134Type getGL7ManualPremium134Term() {
    return (productmodel.DirectGL7ManualPremium134Type)getCovTerm("GL7ManualPremium134");
  }
  
  public boolean getHasGL7ManualPremium134Term() {
    return hasCovTerm("GL7ManualPremium134");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7NonBindingArbitrationInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7NonBindingArbitration>() {
      public productmodel.GL7NonBindingArbitration newEmptyInstance() {
        return new productmodel.GL7NonBindingArbitration();
      }
      
      
    });
  }
}