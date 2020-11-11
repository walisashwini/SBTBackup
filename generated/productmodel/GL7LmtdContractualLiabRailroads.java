package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtdContractualLiabRailroads.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LmtdContractualLiabRailroads extends entity.GL7SublineTypeSchedCov {
  protected GL7LmtdContractualLiabRailroads()  {
    super((java.lang.Void)null);
  }
  
  public GL7LmtdContractualLiabRailroads(entity.PolicyPeriod branch)  {
    super(branch, "GL7LmtdContractualLiabRailroads");
  }
  
  public GL7LmtdContractualLiabRailroads(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LmtdContractualLiabRailroads");
  }
  
  public productmodel.DirectGL7ManualPremium121Type getGL7ManualPremium121Term() {
    return (productmodel.DirectGL7ManualPremium121Type)getCovTerm("GL7ManualPremium121");
  }
  
  public boolean getHasGL7ManualPremium121Term() {
    return hasCovTerm("GL7ManualPremium121");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtdContractualLiabRailroadsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LmtdContractualLiabRailroads>() {
      public productmodel.GL7LmtdContractualLiabRailroads newEmptyInstance() {
        return new productmodel.GL7LmtdContractualLiabRailroads();
      }
      
      
    });
  }
}