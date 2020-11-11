package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther5.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther5 extends entity.GL7SublineTypeSchedCond {
  protected GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther5()  {
    super((java.lang.Void)null);
  }
  
  public GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther5(entity.PolicyPeriod branch)  {
    super(branch, "GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther5");
  }
  
  public GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther5(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther5");
  }
  
  public productmodel.DirectGL7ManualPremium407Type getGL7ManualPremium407Term() {
    return (productmodel.DirectGL7ManualPremium407Type)getCovTerm("GL7ManualPremium407");
  }
  
  public boolean getHasGL7ManualPremium407Term() {
    return hasCovTerm("GL7ManualPremium407");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther5InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther5>() {
      public productmodel.GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther5 newEmptyInstance() {
        return new productmodel.GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther5();
      }
      
      
    });
  }
}