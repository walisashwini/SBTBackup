package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ProfessionalLiabExclCompDataProcessing.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ProfessionalLiabExclCompDataProcessing extends entity.GL7SublineTypeExcl {
  protected GL7ProfessionalLiabExclCompDataProcessing()  {
    super((java.lang.Void)null);
  }
  
  public GL7ProfessionalLiabExclCompDataProcessing(entity.PolicyPeriod branch)  {
    super(branch, "GL7ProfessionalLiabExclCompDataProcessing");
  }
  
  public GL7ProfessionalLiabExclCompDataProcessing(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ProfessionalLiabExclCompDataProcessing");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ProfessionalLiabExclCompDataProcessingInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ProfessionalLiabExclCompDataProcessing>() {
      public productmodel.GL7ProfessionalLiabExclCompDataProcessing newEmptyInstance() {
        return new productmodel.GL7ProfessionalLiabExclCompDataProcessing();
      }
      
      
    });
  }
}