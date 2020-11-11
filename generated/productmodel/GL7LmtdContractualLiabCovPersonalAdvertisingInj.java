package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtdContractualLiabCovPersonalAdvertisingInj.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LmtdContractualLiabCovPersonalAdvertisingInj extends entity.GL7SublineTypeSchedCond {
  protected GL7LmtdContractualLiabCovPersonalAdvertisingInj()  {
    super((java.lang.Void)null);
  }
  
  public GL7LmtdContractualLiabCovPersonalAdvertisingInj(entity.PolicyPeriod branch)  {
    super(branch, "GL7LmtdContractualLiabCovPersonalAdvertisingInj");
  }
  
  public GL7LmtdContractualLiabCovPersonalAdvertisingInj(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LmtdContractualLiabCovPersonalAdvertisingInj");
  }
  
  public productmodel.DirectGL7ManualPremium120Type getGL7ManualPremium120Term() {
    return (productmodel.DirectGL7ManualPremium120Type)getCovTerm("GL7ManualPremium120");
  }
  
  public boolean getHasGL7ManualPremium120Term() {
    return hasCovTerm("GL7ManualPremium120");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtdContractualLiabCovPersonalAdvertisingInjInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LmtdContractualLiabCovPersonalAdvertisingInj>() {
      public productmodel.GL7LmtdContractualLiabCovPersonalAdvertisingInj newEmptyInstance() {
        return new productmodel.GL7LmtdContractualLiabCovPersonalAdvertisingInj();
      }
      
      
    });
  }
}