package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther4.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther4 extends entity.GL7SublineTypeCond {
  protected GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther4()  {
    super((java.lang.Void)null);
  }
  
  public GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther4(entity.PolicyPeriod branch)  {
    super(branch, "GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther4");
  }
  
  public GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther4(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther4");
  }
  
  public productmodel.DirectGL7ManualPremium403Type getGL7ManualPremium403Term() {
    return (productmodel.DirectGL7ManualPremium403Type)getCovTerm("GL7ManualPremium403");
  }
  
  public boolean getHasGL7ManualPremium403Term() {
    return hasCovTerm("GL7ManualPremium403");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther4InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther4>() {
      public productmodel.GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther4 newEmptyInstance() {
        return new productmodel.GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther4();
      }
      
      
    });
  }
}