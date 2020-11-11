package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusOthe.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusOthe extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusOthe()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusOthe(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusOthe");
  }
  
  public GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusOthe(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusOthe");
  }
  
  public productmodel.DirectGL7ManualPremium256Type getGL7ManualPremium256Term() {
    return (productmodel.DirectGL7ManualPremium256Type)getCovTerm("GL7ManualPremium256");
  }
  
  public boolean getHasGL7ManualPremium256Term() {
    return hasCovTerm("GL7ManualPremium256");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusOtheInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusOthe>() {
      public productmodel.GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusOthe newEmptyInstance() {
        return new productmodel.GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusOthe();
      }
      
      
    });
  }
}