package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclCrossSuitsLiabOwnersContractors.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclCrossSuitsLiabOwnersContractors extends entity.GL7SublineTypeExcl {
  protected GL7ExclCrossSuitsLiabOwnersContractors()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclCrossSuitsLiabOwnersContractors(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclCrossSuitsLiabOwnersContractors");
  }
  
  public GL7ExclCrossSuitsLiabOwnersContractors(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclCrossSuitsLiabOwnersContractors");
  }
  
  public productmodel.DirectGL7ManualPremium348Type getGL7ManualPremium348Term() {
    return (productmodel.DirectGL7ManualPremium348Type)getCovTerm("GL7ManualPremium348");
  }
  
  public boolean getHasGL7ManualPremium348Term() {
    return hasCovTerm("GL7ManualPremium348");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclCrossSuitsLiabOwnersContractorsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclCrossSuitsLiabOwnersContractors>() {
      public productmodel.GL7ExclCrossSuitsLiabOwnersContractors newEmptyInstance() {
        return new productmodel.GL7ExclCrossSuitsLiabOwnersContractors();
      }
      
      
    });
  }
}