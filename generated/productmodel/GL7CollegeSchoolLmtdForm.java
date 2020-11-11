package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CollegeSchoolLmtdForm.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CollegeSchoolLmtdForm extends entity.GL7SublineTypeCond {
  protected GL7CollegeSchoolLmtdForm()  {
    super((java.lang.Void)null);
  }
  
  public GL7CollegeSchoolLmtdForm(entity.PolicyPeriod branch)  {
    super(branch, "GL7CollegeSchoolLmtdForm");
  }
  
  public GL7CollegeSchoolLmtdForm(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CollegeSchoolLmtdForm");
  }
  
  public productmodel.DirectGL7ManualPremium29Type getGL7ManualPremium29Term() {
    return (productmodel.DirectGL7ManualPremium29Type)getCovTerm("GL7ManualPremium29");
  }
  
  public boolean getHasGL7ManualPremium29Term() {
    return hasCovTerm("GL7ManualPremium29");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CollegeSchoolLmtdFormInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CollegeSchoolLmtdForm>() {
      public productmodel.GL7CollegeSchoolLmtdForm newEmptyInstance() {
        return new productmodel.GL7CollegeSchoolLmtdForm();
      }
      
      
    });
  }
}