package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7WaiverTransferRightsRecovery.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7WaiverTransferRightsRecovery extends entity.GL7SublineTypeSchedCond {
  protected GL7WaiverTransferRightsRecovery()  {
    super((java.lang.Void)null);
  }
  
  public GL7WaiverTransferRightsRecovery(entity.PolicyPeriod branch)  {
    super(branch, "GL7WaiverTransferRightsRecovery");
  }
  
  public GL7WaiverTransferRightsRecovery(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7WaiverTransferRightsRecovery");
  }
  
  public productmodel.DirectGL7ManualPremium172Type getGL7ManualPremium172Term() {
    return (productmodel.DirectGL7ManualPremium172Type)getCovTerm("GL7ManualPremium172");
  }
  
  public boolean getHasGL7ManualPremium172Term() {
    return hasCovTerm("GL7ManualPremium172");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7WaiverTransferRightsRecoveryInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7WaiverTransferRightsRecovery>() {
      public productmodel.GL7WaiverTransferRightsRecovery newEmptyInstance() {
        return new productmodel.GL7WaiverTransferRightsRecovery();
      }
      
      
    });
  }
}