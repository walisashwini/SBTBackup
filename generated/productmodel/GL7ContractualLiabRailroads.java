package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ContractualLiabRailroads.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ContractualLiabRailroads extends entity.GL7SublineTypeSchedCov {
  protected GL7ContractualLiabRailroads()  {
    super((java.lang.Void)null);
  }
  
  public GL7ContractualLiabRailroads(entity.PolicyPeriod branch)  {
    super(branch, "GL7ContractualLiabRailroads");
  }
  
  public GL7ContractualLiabRailroads(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ContractualLiabRailroads");
  }
  
  public productmodel.DirectGL7ManualPremium36Type getGL7ManualPremium36Term() {
    return (productmodel.DirectGL7ManualPremium36Type)getCovTerm("GL7ManualPremium36");
  }
  
  public boolean getHasGL7ManualPremium36Term() {
    return hasCovTerm("GL7ManualPremium36");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ContractualLiabRailroadsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ContractualLiabRailroads>() {
      public productmodel.GL7ContractualLiabRailroads newEmptyInstance() {
        return new productmodel.GL7ContractualLiabRailroads();
      }
      
      
    });
  }
}