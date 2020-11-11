package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdLessorOfLeasedEquipmtAutomtcStatusWhenR.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdLessorOfLeasedEquipmtAutomtcStatusWhenR extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdLessorOfLeasedEquipmtAutomtcStatusWhenR()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdLessorOfLeasedEquipmtAutomtcStatusWhenR(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdLessorOfLeasedEquipmtAutomtcStatusWhenR");
  }
  
  public GL7AddlInsdLessorOfLeasedEquipmtAutomtcStatusWhenR(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdLessorOfLeasedEquipmtAutomtcStatusWhenR");
  }
  
  public productmodel.DirectGL7ManualPremium7Type getGL7ManualPremium7Term() {
    return (productmodel.DirectGL7ManualPremium7Type)getCovTerm("GL7ManualPremium7");
  }
  
  public boolean getHasGL7ManualPremium7Term() {
    return hasCovTerm("GL7ManualPremium7");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdLessorOfLeasedEquipmtAutomtcStatusWhenRInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdLessorOfLeasedEquipmtAutomtcStatusWhenR>() {
      public productmodel.GL7AddlInsdLessorOfLeasedEquipmtAutomtcStatusWhenR newEmptyInstance() {
        return new productmodel.GL7AddlInsdLessorOfLeasedEquipmtAutomtcStatusWhenR();
      }
      
      
    });
  }
}