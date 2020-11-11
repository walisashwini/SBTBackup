package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusForO.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusForO extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusForO()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusForO(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusForO");
  }
  
  public GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusForO(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusForO");
  }
  
  public productmodel.DirectGL7ManualPremium8Type getGL7ManualPremium8Term() {
    return (productmodel.DirectGL7ManualPremium8Type)getCovTerm("GL7ManualPremium8");
  }
  
  public boolean getHasGL7ManualPremium8Term() {
    return hasCovTerm("GL7ManualPremium8");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusForOInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusForO>() {
      public productmodel.GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusForO newEmptyInstance() {
        return new productmodel.GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusForO();
      }
      
      
    });
  }
}