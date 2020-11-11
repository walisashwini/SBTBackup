package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7StevedoringOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7StevedoringOps extends entity.GL7SublineTypeCov {
  protected GL7StevedoringOps()  {
    super((java.lang.Void)null);
  }
  
  public GL7StevedoringOps(entity.PolicyPeriod branch)  {
    super(branch, "GL7StevedoringOps");
  }
  
  public GL7StevedoringOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7StevedoringOps");
  }
  
  public productmodel.DirectGL7ManualPremium155Type getGL7ManualPremium155Term() {
    return (productmodel.DirectGL7ManualPremium155Type)getCovTerm("GL7ManualPremium155");
  }
  
  public boolean getHasGL7ManualPremium155Term() {
    return hasCovTerm("GL7ManualPremium155");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7StevedoringOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7StevedoringOps>() {
      public productmodel.GL7StevedoringOps newEmptyInstance() {
        return new productmodel.GL7StevedoringOps();
      }
      
      
    });
  }
}