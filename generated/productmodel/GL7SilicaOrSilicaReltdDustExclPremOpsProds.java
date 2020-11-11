package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7SilicaOrSilicaReltdDustExclPremOpsProds.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7SilicaOrSilicaReltdDustExclPremOpsProds extends entity.GL7SublineTypeExcl {
  protected GL7SilicaOrSilicaReltdDustExclPremOpsProds()  {
    super((java.lang.Void)null);
  }
  
  public GL7SilicaOrSilicaReltdDustExclPremOpsProds(entity.PolicyPeriod branch)  {
    super(branch, "GL7SilicaOrSilicaReltdDustExclPremOpsProds");
  }
  
  public GL7SilicaOrSilicaReltdDustExclPremOpsProds(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7SilicaOrSilicaReltdDustExclPremOpsProds");
  }
  
  public productmodel.DirectGL7ManualPremium153Type getGL7ManualPremium153Term() {
    return (productmodel.DirectGL7ManualPremium153Type)getCovTerm("GL7ManualPremium153");
  }
  
  public boolean getHasGL7ManualPremium153Term() {
    return hasCovTerm("GL7ManualPremium153");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7SilicaOrSilicaReltdDustExclPremOpsProdsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7SilicaOrSilicaReltdDustExclPremOpsProds>() {
      public productmodel.GL7SilicaOrSilicaReltdDustExclPremOpsProds newEmptyInstance() {
        return new productmodel.GL7SilicaOrSilicaReltdDustExclPremOpsProds();
      }
      
      
    });
  }
}