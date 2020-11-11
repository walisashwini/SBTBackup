package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtdExclContractorsProfessionalLiab.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LmtdExclContractorsProfessionalLiab extends entity.GL7SublineTypeExcl {
  protected GL7LmtdExclContractorsProfessionalLiab()  {
    super((java.lang.Void)null);
  }
  
  public GL7LmtdExclContractorsProfessionalLiab(entity.PolicyPeriod branch)  {
    super(branch, "GL7LmtdExclContractorsProfessionalLiab");
  }
  
  public GL7LmtdExclContractorsProfessionalLiab(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LmtdExclContractorsProfessionalLiab");
  }
  
  public productmodel.DirectGL7ManualPremium125Type getGL7ManualPremium125Term() {
    return (productmodel.DirectGL7ManualPremium125Type)getCovTerm("GL7ManualPremium125");
  }
  
  public boolean getHasGL7ManualPremium125Term() {
    return hasCovTerm("GL7ManualPremium125");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtdExclContractorsProfessionalLiabInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LmtdExclContractorsProfessionalLiab>() {
      public productmodel.GL7LmtdExclContractorsProfessionalLiab newEmptyInstance() {
        return new productmodel.GL7LmtdExclContractorsProfessionalLiab();
      }
      
      
    });
  }
}