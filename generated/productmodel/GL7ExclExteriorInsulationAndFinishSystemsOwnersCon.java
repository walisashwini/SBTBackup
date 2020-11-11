package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclExteriorInsulationAndFinishSystemsOwnersCon.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclExteriorInsulationAndFinishSystemsOwnersCon extends entity.GL7SublineTypeExcl {
  protected GL7ExclExteriorInsulationAndFinishSystemsOwnersCon()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclExteriorInsulationAndFinishSystemsOwnersCon(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclExteriorInsulationAndFinishSystemsOwnersCon");
  }
  
  public GL7ExclExteriorInsulationAndFinishSystemsOwnersCon(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclExteriorInsulationAndFinishSystemsOwnersCon");
  }
  
  public productmodel.DirectGL7ManualPremium93Type getGL7ManualPremium93Term() {
    return (productmodel.DirectGL7ManualPremium93Type)getCovTerm("GL7ManualPremium93");
  }
  
  public boolean getHasGL7ManualPremium93Term() {
    return hasCovTerm("GL7ManualPremium93");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclExteriorInsulationAndFinishSystemsOwnersConInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclExteriorInsulationAndFinishSystemsOwnersCon>() {
      public productmodel.GL7ExclExteriorInsulationAndFinishSystemsOwnersCon newEmptyInstance() {
        return new productmodel.GL7ExclExteriorInsulationAndFinishSystemsOwnersCon();
      }
      
      
    });
  }
}