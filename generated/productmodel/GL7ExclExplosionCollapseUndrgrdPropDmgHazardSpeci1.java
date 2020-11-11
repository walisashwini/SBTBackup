package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpeci1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpeci1 extends entity.GL7LocationSchedExcl {
  protected GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpeci1()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpeci1(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpeci1");
  }
  
  public GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpeci1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpeci1");
  }
  
  public productmodel.DirectGL7ManualPremium184Type getGL7ManualPremium184Term() {
    return (productmodel.DirectGL7ManualPremium184Type)getCovTerm("GL7ManualPremium184");
  }
  
  public boolean getHasGL7ManualPremium184Term() {
    return hasCovTerm("GL7ManualPremium184");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpeci1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpeci1>() {
      public productmodel.GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpeci1 newEmptyInstance() {
        return new productmodel.GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpeci1();
      }
      
      
    });
  }
}