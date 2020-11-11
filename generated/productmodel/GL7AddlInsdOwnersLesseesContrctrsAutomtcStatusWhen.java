package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusWhen.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusWhen extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusWhen()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusWhen(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusWhen");
  }
  
  public GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusWhen(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusWhen");
  }
  
  public productmodel.DirectGL7ManualPremium9Type getGL7ManualPremium9Term() {
    return (productmodel.DirectGL7ManualPremium9Type)getCovTerm("GL7ManualPremium9");
  }
  
  public boolean getHasGL7ManualPremium9Term() {
    return hasCovTerm("GL7ManualPremium9");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusWhenInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusWhen>() {
      public productmodel.GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusWhen newEmptyInstance() {
        return new productmodel.GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusWhen();
      }
      
      
    });
  }
}