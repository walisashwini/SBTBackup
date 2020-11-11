package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7FinancialInstitutionsRptgProvisionLmtnToFiducia.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7FinancialInstitutionsRptgProvisionLmtnToFiducia extends entity.GL7SublineTypeCov {
  protected GL7FinancialInstitutionsRptgProvisionLmtnToFiducia()  {
    super((java.lang.Void)null);
  }
  
  public GL7FinancialInstitutionsRptgProvisionLmtnToFiducia(entity.PolicyPeriod branch)  {
    super(branch, "GL7FinancialInstitutionsRptgProvisionLmtnToFiducia");
  }
  
  public GL7FinancialInstitutionsRptgProvisionLmtnToFiducia(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7FinancialInstitutionsRptgProvisionLmtnToFiducia");
  }
  
  public productmodel.DirectGL7ManualPremium111Type getGL7ManualPremium111Term() {
    return (productmodel.DirectGL7ManualPremium111Type)getCovTerm("GL7ManualPremium111");
  }
  
  public boolean getHasGL7ManualPremium111Term() {
    return hasCovTerm("GL7ManualPremium111");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7FinancialInstitutionsRptgProvisionLmtnToFiduciaInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7FinancialInstitutionsRptgProvisionLmtnToFiducia>() {
      public productmodel.GL7FinancialInstitutionsRptgProvisionLmtnToFiducia newEmptyInstance() {
        return new productmodel.GL7FinancialInstitutionsRptgProvisionLmtnToFiducia();
      }
      
      
    });
  }
}