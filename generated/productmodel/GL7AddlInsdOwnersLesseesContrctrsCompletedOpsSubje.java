package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje extends entity.GL7LocationSchedCov {
  protected GL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje");
  }
  
  public GL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje");
  }
  
  public productmodel.DirectGL7ManualPremium245Type getGL7ManualPremium245Term() {
    return (productmodel.DirectGL7ManualPremium245Type)getCovTerm("GL7ManualPremium245");
  }
  
  public boolean getHasGL7ManualPremium245Term() {
    return hasCovTerm("GL7ManualPremium245");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubjeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje>() {
      public productmodel.GL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje newEmptyInstance() {
        return new productmodel.GL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje();
      }
      
      
    });
  }
}