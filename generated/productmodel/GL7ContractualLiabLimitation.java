package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ContractualLiabLimitation.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ContractualLiabLimitation extends entity.GL7SublineTypeCond {
  protected GL7ContractualLiabLimitation()  {
    super((java.lang.Void)null);
  }
  
  public GL7ContractualLiabLimitation(entity.PolicyPeriod branch)  {
    super(branch, "GL7ContractualLiabLimitation");
  }
  
  public GL7ContractualLiabLimitation(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ContractualLiabLimitation");
  }
  
  public productmodel.DirectGL7ManualPremium35Type getGL7ManualPremium35Term() {
    return (productmodel.DirectGL7ManualPremium35Type)getCovTerm("GL7ManualPremium35");
  }
  
  public boolean getHasGL7ManualPremium35Term() {
    return hasCovTerm("GL7ManualPremium35");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ContractualLiabLimitationInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ContractualLiabLimitation>() {
      public productmodel.GL7ContractualLiabLimitation newEmptyInstance() {
        return new productmodel.GL7ContractualLiabLimitation();
      }
      
      
    });
  }
}