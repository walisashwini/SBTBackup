package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclFiduciaryOrRepLiabOfFinclInstitutions.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclFiduciaryOrRepLiabOfFinclInstitutions extends entity.GL7SublineTypeExcl {
  protected GL7ExclFiduciaryOrRepLiabOfFinclInstitutions()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclFiduciaryOrRepLiabOfFinclInstitutions(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclFiduciaryOrRepLiabOfFinclInstitutions");
  }
  
  public GL7ExclFiduciaryOrRepLiabOfFinclInstitutions(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclFiduciaryOrRepLiabOfFinclInstitutions");
  }
  
  public productmodel.DirectGL7ManualPremium65Type getGL7ManualPremium65Term() {
    return (productmodel.DirectGL7ManualPremium65Type)getCovTerm("GL7ManualPremium65");
  }
  
  public boolean getHasGL7ManualPremium65Term() {
    return hasCovTerm("GL7ManualPremium65");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclFiduciaryOrRepLiabOfFinclInstitutionsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclFiduciaryOrRepLiabOfFinclInstitutions>() {
      public productmodel.GL7ExclFiduciaryOrRepLiabOfFinclInstitutions newEmptyInstance() {
        return new productmodel.GL7ExclFiduciaryOrRepLiabOfFinclInstitutions();
      }
      
      
    });
  }
}