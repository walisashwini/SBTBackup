package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7SilicaOrSilicaReltdDustExclOwnersContractorsPro.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7SilicaOrSilicaReltdDustExclOwnersContractorsPro extends entity.GL7SublineTypeExcl {
  protected GL7SilicaOrSilicaReltdDustExclOwnersContractorsPro()  {
    super((java.lang.Void)null);
  }
  
  public GL7SilicaOrSilicaReltdDustExclOwnersContractorsPro(entity.PolicyPeriod branch)  {
    super(branch, "GL7SilicaOrSilicaReltdDustExclOwnersContractorsPro");
  }
  
  public GL7SilicaOrSilicaReltdDustExclOwnersContractorsPro(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7SilicaOrSilicaReltdDustExclOwnersContractorsPro");
  }
  
  public productmodel.DirectGL7ManualPremium152Type getGL7ManualPremium152Term() {
    return (productmodel.DirectGL7ManualPremium152Type)getCovTerm("GL7ManualPremium152");
  }
  
  public boolean getHasGL7ManualPremium152Term() {
    return hasCovTerm("GL7ManualPremium152");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7SilicaOrSilicaReltdDustExclOwnersContractorsProInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7SilicaOrSilicaReltdDustExclOwnersContractorsPro>() {
      public productmodel.GL7SilicaOrSilicaReltdDustExclOwnersContractorsPro newEmptyInstance() {
        return new productmodel.GL7SilicaOrSilicaReltdDustExclOwnersContractorsPro();
      }
      
      
    });
  }
}