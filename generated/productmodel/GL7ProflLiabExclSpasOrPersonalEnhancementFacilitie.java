package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ProflLiabExclSpasOrPersonalEnhancementFacilitie.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ProflLiabExclSpasOrPersonalEnhancementFacilitie extends entity.GL7SublineTypeSchedExcl {
  protected GL7ProflLiabExclSpasOrPersonalEnhancementFacilitie()  {
    super((java.lang.Void)null);
  }
  
  public GL7ProflLiabExclSpasOrPersonalEnhancementFacilitie(entity.PolicyPeriod branch)  {
    super(branch, "GL7ProflLiabExclSpasOrPersonalEnhancementFacilitie");
  }
  
  public GL7ProflLiabExclSpasOrPersonalEnhancementFacilitie(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ProflLiabExclSpasOrPersonalEnhancementFacilitie");
  }
  
  public productmodel.DirectGL7ManualPremium147Type getGL7ManualPremium147Term() {
    return (productmodel.DirectGL7ManualPremium147Type)getCovTerm("GL7ManualPremium147");
  }
  
  public boolean getHasGL7ManualPremium147Term() {
    return hasCovTerm("GL7ManualPremium147");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ProflLiabExclSpasOrPersonalEnhancementFacilitieInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ProflLiabExclSpasOrPersonalEnhancementFacilitie>() {
      public productmodel.GL7ProflLiabExclSpasOrPersonalEnhancementFacilitie newEmptyInstance() {
        return new productmodel.GL7ProflLiabExclSpasOrPersonalEnhancementFacilitie();
      }
      
      
    });
  }
}