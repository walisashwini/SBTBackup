package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ProfessionalLiabExclCompSoftware.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ProfessionalLiabExclCompSoftware extends entity.GL7SublineTypeExcl {
  protected GL7ProfessionalLiabExclCompSoftware()  {
    super((java.lang.Void)null);
  }
  
  public GL7ProfessionalLiabExclCompSoftware(entity.PolicyPeriod branch)  {
    super(branch, "GL7ProfessionalLiabExclCompSoftware");
  }
  
  public GL7ProfessionalLiabExclCompSoftware(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ProfessionalLiabExclCompSoftware");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ProfessionalLiabExclCompSoftwareInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ProfessionalLiabExclCompSoftware>() {
      public productmodel.GL7ProfessionalLiabExclCompSoftware newEmptyInstance() {
        return new productmodel.GL7ProfessionalLiabExclCompSoftware();
      }
      
      
    });
  }
}