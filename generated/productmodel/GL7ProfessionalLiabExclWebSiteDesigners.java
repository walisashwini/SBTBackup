package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ProfessionalLiabExclWebSiteDesigners.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ProfessionalLiabExclWebSiteDesigners extends entity.GL7SublineTypeExcl {
  protected GL7ProfessionalLiabExclWebSiteDesigners()  {
    super((java.lang.Void)null);
  }
  
  public GL7ProfessionalLiabExclWebSiteDesigners(entity.PolicyPeriod branch)  {
    super(branch, "GL7ProfessionalLiabExclWebSiteDesigners");
  }
  
  public GL7ProfessionalLiabExclWebSiteDesigners(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ProfessionalLiabExclWebSiteDesigners");
  }
  
  public productmodel.DirectGL7ManualPremium146Type getGL7ManualPremium146Term() {
    return (productmodel.DirectGL7ManualPremium146Type)getCovTerm("GL7ManualPremium146");
  }
  
  public boolean getHasGL7ManualPremium146Term() {
    return hasCovTerm("GL7ManualPremium146");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ProfessionalLiabExclWebSiteDesignersInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ProfessionalLiabExclWebSiteDesigners>() {
      public productmodel.GL7ProfessionalLiabExclWebSiteDesigners newEmptyInstance() {
        return new productmodel.GL7ProfessionalLiabExclWebSiteDesigners();
      }
      
      
    });
  }
}