package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclExteriorInsulationAndFinishSystemsPremOpsPr.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclExteriorInsulationAndFinishSystemsPremOpsPr extends entity.GL7SublineTypeExcl {
  protected GL7ExclExteriorInsulationAndFinishSystemsPremOpsPr()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclExteriorInsulationAndFinishSystemsPremOpsPr(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclExteriorInsulationAndFinishSystemsPremOpsPr");
  }
  
  public GL7ExclExteriorInsulationAndFinishSystemsPremOpsPr(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclExteriorInsulationAndFinishSystemsPremOpsPr");
  }
  
  public productmodel.DirectGL7ManualPremium94Type getGL7ManualPremium94Term() {
    return (productmodel.DirectGL7ManualPremium94Type)getCovTerm("GL7ManualPremium94");
  }
  
  public boolean getHasGL7ManualPremium94Term() {
    return hasCovTerm("GL7ManualPremium94");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclExteriorInsulationAndFinishSystemsPremOpsPrInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclExteriorInsulationAndFinishSystemsPremOpsPr>() {
      public productmodel.GL7ExclExteriorInsulationAndFinishSystemsPremOpsPr newEmptyInstance() {
        return new productmodel.GL7ExclExteriorInsulationAndFinishSystemsPremOpsPr();
      }
      
      
    });
  }
}