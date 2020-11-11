package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther3.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther3 extends entity.GL7SublineTypeCond {
  protected GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther3()  {
    super((java.lang.Void)null);
  }
  
  public GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther3(entity.PolicyPeriod branch)  {
    super(branch, "GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther3");
  }
  
  public GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther3(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther3");
  }
  
  public productmodel.DirectGL7ManualPremium406Type getGL7ManualPremium406Term() {
    return (productmodel.DirectGL7ManualPremium406Type)getCovTerm("GL7ManualPremium406");
  }
  
  public boolean getHasGL7ManualPremium406Term() {
    return hasCovTerm("GL7ManualPremium406");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther3InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther3>() {
      public productmodel.GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther3 newEmptyInstance() {
        return new productmodel.GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther3();
      }
      
      
    });
  }
}