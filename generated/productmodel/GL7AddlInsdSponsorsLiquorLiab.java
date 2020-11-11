package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdSponsorsLiquorLiab.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdSponsorsLiquorLiab extends entity.GL7SublineTypeSchedCov {
  protected GL7AddlInsdSponsorsLiquorLiab()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdSponsorsLiquorLiab(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdSponsorsLiquorLiab");
  }
  
  public GL7AddlInsdSponsorsLiquorLiab(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdSponsorsLiquorLiab");
  }
  
  public productmodel.DirectGL7ManualPremium261Type getGL7ManualPremium261Term() {
    return (productmodel.DirectGL7ManualPremium261Type)getCovTerm("GL7ManualPremium261");
  }
  
  public boolean getHasGL7ManualPremium261Term() {
    return hasCovTerm("GL7ManualPremium261");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdSponsorsLiquorLiabInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdSponsorsLiquorLiab>() {
      public productmodel.GL7AddlInsdSponsorsLiquorLiab newEmptyInstance() {
        return new productmodel.GL7AddlInsdSponsorsLiquorLiab();
      }
      
      
    });
  }
}