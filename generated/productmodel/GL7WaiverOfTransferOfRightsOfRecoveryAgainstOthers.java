package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7WaiverOfTransferOfRightsOfRecoveryAgainstOthers.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7WaiverOfTransferOfRightsOfRecoveryAgainstOthers extends entity.GL7SublineTypeSchedCond {
  protected GL7WaiverOfTransferOfRightsOfRecoveryAgainstOthers()  {
    super((java.lang.Void)null);
  }
  
  public GL7WaiverOfTransferOfRightsOfRecoveryAgainstOthers(entity.PolicyPeriod branch)  {
    super(branch, "GL7WaiverOfTransferOfRightsOfRecoveryAgainstOthers");
  }
  
  public GL7WaiverOfTransferOfRightsOfRecoveryAgainstOthers(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7WaiverOfTransferOfRightsOfRecoveryAgainstOthers");
  }
  
  public productmodel.DirectGL7ManualPremium171Type getGL7ManualPremium171Term() {
    return (productmodel.DirectGL7ManualPremium171Type)getCovTerm("GL7ManualPremium171");
  }
  
  public boolean getHasGL7ManualPremium171Term() {
    return hasCovTerm("GL7ManualPremium171");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7WaiverOfTransferOfRightsOfRecoveryAgainstOthersInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7WaiverOfTransferOfRightsOfRecoveryAgainstOthers>() {
      public productmodel.GL7WaiverOfTransferOfRightsOfRecoveryAgainstOthers newEmptyInstance() {
        return new productmodel.GL7WaiverOfTransferOfRightsOfRecoveryAgainstOthers();
      }
      
      
    });
  }
}