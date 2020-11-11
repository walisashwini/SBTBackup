package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclEngineersArchitectsOrSurveyorsProfessionalL.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclEngineersArchitectsOrSurveyorsProfessionalL extends entity.GL7SublineTypeExcl {
  protected GL7ExclEngineersArchitectsOrSurveyorsProfessionalL()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclEngineersArchitectsOrSurveyorsProfessionalL(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclEngineersArchitectsOrSurveyorsProfessionalL");
  }
  
  public GL7ExclEngineersArchitectsOrSurveyorsProfessionalL(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclEngineersArchitectsOrSurveyorsProfessionalL");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclEngineersArchitectsOrSurveyorsProfessionalLInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclEngineersArchitectsOrSurveyorsProfessionalL>() {
      public productmodel.GL7ExclEngineersArchitectsOrSurveyorsProfessionalL newEmptyInstance() {
        return new productmodel.GL7ExclEngineersArchitectsOrSurveyorsProfessionalL();
      }
      
      
    });
  }
}