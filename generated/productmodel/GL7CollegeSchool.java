package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CollegeSchool.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CollegeSchool extends entity.GL7SublineTypeCov {
  protected GL7CollegeSchool()  {
    super((java.lang.Void)null);
  }
  
  public GL7CollegeSchool(entity.PolicyPeriod branch)  {
    super(branch, "GL7CollegeSchool");
  }
  
  public GL7CollegeSchool(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CollegeSchool");
  }
  
  public productmodel.DirectGL7ManualPremium28Type getGL7ManualPremium28Term() {
    return (productmodel.DirectGL7ManualPremium28Type)getCovTerm("GL7ManualPremium28");
  }
  
  public boolean getHasGL7ManualPremium28Term() {
    return hasCovTerm("GL7ManualPremium28");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CollegeSchoolInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CollegeSchool>() {
      public productmodel.GL7CollegeSchool newEmptyInstance() {
        return new productmodel.GL7CollegeSchool();
      }
      
      
    });
  }
}