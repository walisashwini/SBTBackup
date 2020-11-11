package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclInspectionAppraisalAndSurveyCompanies.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclInspectionAppraisalAndSurveyCompanies extends entity.GL7SublineTypeExcl {
  protected GL7ExclInspectionAppraisalAndSurveyCompanies()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclInspectionAppraisalAndSurveyCompanies(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclInspectionAppraisalAndSurveyCompanies");
  }
  
  public GL7ExclInspectionAppraisalAndSurveyCompanies(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclInspectionAppraisalAndSurveyCompanies");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclInspectionAppraisalAndSurveyCompaniesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclInspectionAppraisalAndSurveyCompanies>() {
      public productmodel.GL7ExclInspectionAppraisalAndSurveyCompanies newEmptyInstance() {
        return new productmodel.GL7ExclInspectionAppraisalAndSurveyCompanies();
      }
      
      
    });
  }
}