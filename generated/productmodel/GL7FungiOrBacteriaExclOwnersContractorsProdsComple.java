package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7FungiOrBacteriaExclOwnersContractorsProdsComple.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7FungiOrBacteriaExclOwnersContractorsProdsComple extends entity.GL7SublineTypeExcl {
  protected GL7FungiOrBacteriaExclOwnersContractorsProdsComple()  {
    super((java.lang.Void)null);
  }
  
  public GL7FungiOrBacteriaExclOwnersContractorsProdsComple(entity.PolicyPeriod branch)  {
    super(branch, "GL7FungiOrBacteriaExclOwnersContractorsProdsComple");
  }
  
  public GL7FungiOrBacteriaExclOwnersContractorsProdsComple(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7FungiOrBacteriaExclOwnersContractorsProdsComple");
  }
  
  public productmodel.DirectGL7ManualPremium113Type getGL7ManualPremium113Term() {
    return (productmodel.DirectGL7ManualPremium113Type)getCovTerm("GL7ManualPremium113");
  }
  
  public boolean getHasGL7ManualPremium113Term() {
    return hasCovTerm("GL7ManualPremium113");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7FungiOrBacteriaExclOwnersContractorsProdsCompleInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7FungiOrBacteriaExclOwnersContractorsProdsComple>() {
      public productmodel.GL7FungiOrBacteriaExclOwnersContractorsProdsComple newEmptyInstance() {
        return new productmodel.GL7FungiOrBacteriaExclOwnersContractorsProdsComple();
      }
      
      
    });
  }
}