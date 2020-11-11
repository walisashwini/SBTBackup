package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclContractorsProfessionalLiab.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclContractorsProfessionalLiab extends entity.GL7SublineTypeExcl {
  protected GL7ExclContractorsProfessionalLiab()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclContractorsProfessionalLiab(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclContractorsProfessionalLiab");
  }
  
  public GL7ExclContractorsProfessionalLiab(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclContractorsProfessionalLiab");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclContractorsProfessionalLiabInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclContractorsProfessionalLiab>() {
      public productmodel.GL7ExclContractorsProfessionalLiab newEmptyInstance() {
        return new productmodel.GL7ExclContractorsProfessionalLiab();
      }
      
      
    });
  }
}