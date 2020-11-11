package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclExteriorInsulationAndFinishSystemsProdsComp.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclExteriorInsulationAndFinishSystemsProdsComp extends entity.GL7SublineTypeExcl {
  protected GL7ExclExteriorInsulationAndFinishSystemsProdsComp()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclExteriorInsulationAndFinishSystemsProdsComp(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclExteriorInsulationAndFinishSystemsProdsComp");
  }
  
  public GL7ExclExteriorInsulationAndFinishSystemsProdsComp(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclExteriorInsulationAndFinishSystemsProdsComp");
  }
  
  public productmodel.DirectGL7ManualPremium95Type getGL7ManualPremium95Term() {
    return (productmodel.DirectGL7ManualPremium95Type)getCovTerm("GL7ManualPremium95");
  }
  
  public boolean getHasGL7ManualPremium95Term() {
    return hasCovTerm("GL7ManualPremium95");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclExteriorInsulationAndFinishSystemsProdsCompInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclExteriorInsulationAndFinishSystemsProdsComp>() {
      public productmodel.GL7ExclExteriorInsulationAndFinishSystemsProdsComp newEmptyInstance() {
        return new productmodel.GL7ExclExteriorInsulationAndFinishSystemsProdsComp();
      }
      
      
    });
  }
}