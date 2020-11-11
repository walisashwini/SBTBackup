package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpecif.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpecif extends entity.GL7LocationSchedExcl {
  protected GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpecif()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpecif(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpecif");
  }
  
  public GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpecif(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpecif");
  }
  
  public productmodel.DirectGL7ManualPremium183Type getGL7ManualPremium183Term() {
    return (productmodel.DirectGL7ManualPremium183Type)getCovTerm("GL7ManualPremium183");
  }
  
  public boolean getHasGL7ManualPremium183Term() {
    return hasCovTerm("GL7ManualPremium183");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpecifInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpecif>() {
      public productmodel.GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpecif newEmptyInstance() {
        return new productmodel.GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpecif();
      }
      
      
    });
  }
}