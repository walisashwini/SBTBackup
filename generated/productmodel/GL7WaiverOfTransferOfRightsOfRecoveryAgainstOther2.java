package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther2.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther2 extends entity.GL7SublineTypeCond {
  protected GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther2()  {
    super((java.lang.Void)null);
  }
  
  public GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther2(entity.PolicyPeriod branch)  {
    super(branch, "GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther2");
  }
  
  public GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther2(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther2");
  }
  
  public productmodel.DirectGL7ManualPremium398Type getGL7ManualPremium398Term() {
    return (productmodel.DirectGL7ManualPremium398Type)getCovTerm("GL7ManualPremium398");
  }
  
  public boolean getHasGL7ManualPremium398Term() {
    return hasCovTerm("GL7ManualPremium398");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther2InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther2>() {
      public productmodel.GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther2 newEmptyInstance() {
        return new productmodel.GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther2();
      }
      
      
    });
  }
}