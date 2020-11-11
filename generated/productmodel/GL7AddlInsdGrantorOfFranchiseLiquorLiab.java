package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdGrantorOfFranchiseLiquorLiab.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdGrantorOfFranchiseLiquorLiab extends entity.GL7SublineTypeSchedCov {
  protected GL7AddlInsdGrantorOfFranchiseLiquorLiab()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdGrantorOfFranchiseLiquorLiab(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdGrantorOfFranchiseLiquorLiab");
  }
  
  public GL7AddlInsdGrantorOfFranchiseLiquorLiab(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdGrantorOfFranchiseLiquorLiab");
  }
  
  public productmodel.DirectGL7ManualPremium257Type getGL7ManualPremium257Term() {
    return (productmodel.DirectGL7ManualPremium257Type)getCovTerm("GL7ManualPremium257");
  }
  
  public boolean getHasGL7ManualPremium257Term() {
    return hasCovTerm("GL7ManualPremium257");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdGrantorOfFranchiseLiquorLiabInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdGrantorOfFranchiseLiquorLiab>() {
      public productmodel.GL7AddlInsdGrantorOfFranchiseLiquorLiab newEmptyInstance() {
        return new productmodel.GL7AddlInsdGrantorOfFranchiseLiquorLiab();
      }
      
      
    });
  }
}