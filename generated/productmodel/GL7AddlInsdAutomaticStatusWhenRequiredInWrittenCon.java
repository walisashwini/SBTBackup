package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdAutomaticStatusWhenRequiredInWrittenCon.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdAutomaticStatusWhenRequiredInWrittenCon extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdAutomaticStatusWhenRequiredInWrittenCon()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdAutomaticStatusWhenRequiredInWrittenCon(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdAutomaticStatusWhenRequiredInWrittenCon");
  }
  
  public GL7AddlInsdAutomaticStatusWhenRequiredInWrittenCon(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdAutomaticStatusWhenRequiredInWrittenCon");
  }
  
  public productmodel.DirectGL7ManualPremium253Type getGL7ManualPremium253Term() {
    return (productmodel.DirectGL7ManualPremium253Type)getCovTerm("GL7ManualPremium253");
  }
  
  public boolean getHasGL7ManualPremium253Term() {
    return hasCovTerm("GL7ManualPremium253");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdAutomaticStatusWhenRequiredInWrittenConInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdAutomaticStatusWhenRequiredInWrittenCon>() {
      public productmodel.GL7AddlInsdAutomaticStatusWhenRequiredInWrittenCon newEmptyInstance() {
        return new productmodel.GL7AddlInsdAutomaticStatusWhenRequiredInWrittenCon();
      }
      
      
    });
  }
}