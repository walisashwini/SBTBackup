package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtdFungiOrBacteriaCovOwnersContractorsProdsCom.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LmtdFungiOrBacteriaCovOwnersContractorsProdsCom extends entity.GL7SublineTypeCov {
  protected GL7LmtdFungiOrBacteriaCovOwnersContractorsProdsCom()  {
    super((java.lang.Void)null);
  }
  
  public GL7LmtdFungiOrBacteriaCovOwnersContractorsProdsCom(entity.PolicyPeriod branch)  {
    super(branch, "GL7LmtdFungiOrBacteriaCovOwnersContractorsProdsCom");
  }
  
  public GL7LmtdFungiOrBacteriaCovOwnersContractorsProdsCom(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LmtdFungiOrBacteriaCovOwnersContractorsProdsCom");
  }
  
  public productmodel.DirectGL7FungiBacteriaLiabAggLimit1Type getGL7FungiBacteriaLiabAggLimit1Term() {
    return (productmodel.DirectGL7FungiBacteriaLiabAggLimit1Type)getCovTerm("GL7FungiBacteriaLiabAggLimit1");
  }
  
  public productmodel.DirectGL7ManualPremium129Type getGL7ManualPremium129Term() {
    return (productmodel.DirectGL7ManualPremium129Type)getCovTerm("GL7ManualPremium129");
  }
  
  public boolean getHasGL7FungiBacteriaLiabAggLimit1Term() {
    return hasCovTerm("GL7FungiBacteriaLiabAggLimit1");
  }
  
  public boolean getHasGL7ManualPremium129Term() {
    return hasCovTerm("GL7ManualPremium129");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtdFungiOrBacteriaCovOwnersContractorsProdsComInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LmtdFungiOrBacteriaCovOwnersContractorsProdsCom>() {
      public productmodel.GL7LmtdFungiOrBacteriaCovOwnersContractorsProdsCom newEmptyInstance() {
        return new productmodel.GL7LmtdFungiOrBacteriaCovOwnersContractorsProdsCom();
      }
      
      
    });
  }
}