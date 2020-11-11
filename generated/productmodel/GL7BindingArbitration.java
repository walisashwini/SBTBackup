package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7BindingArbitration.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7BindingArbitration extends entity.GL7SublineTypeCond {
  protected GL7BindingArbitration()  {
    super((java.lang.Void)null);
  }
  
  public GL7BindingArbitration(entity.PolicyPeriod branch)  {
    super(branch, "GL7BindingArbitration");
  }
  
  public GL7BindingArbitration(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7BindingArbitration");
  }
  
  public productmodel.DirectGL7ManualPremium23Type getGL7ManualPremium23Term() {
    return (productmodel.DirectGL7ManualPremium23Type)getCovTerm("GL7ManualPremium23");
  }
  
  public boolean getHasGL7ManualPremium23Term() {
    return hasCovTerm("GL7ManualPremium23");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7BindingArbitrationInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7BindingArbitration>() {
      public productmodel.GL7BindingArbitration newEmptyInstance() {
        return new productmodel.GL7BindingArbitration();
      }
      
      
    });
  }
}