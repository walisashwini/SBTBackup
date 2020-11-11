package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7EmploymentReltdPracticesExcl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7EmploymentReltdPracticesExcl extends entity.GL7SublineTypeExcl {
  protected GL7EmploymentReltdPracticesExcl()  {
    super((java.lang.Void)null);
  }
  
  public GL7EmploymentReltdPracticesExcl(entity.PolicyPeriod branch)  {
    super(branch, "GL7EmploymentReltdPracticesExcl");
  }
  
  public GL7EmploymentReltdPracticesExcl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7EmploymentReltdPracticesExcl");
  }
  
  public productmodel.DirectGL7ManualPremium47Type getGL7ManualPremium47Term() {
    return (productmodel.DirectGL7ManualPremium47Type)getCovTerm("GL7ManualPremium47");
  }
  
  public boolean getHasGL7ManualPremium47Term() {
    return hasCovTerm("GL7ManualPremium47");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7EmploymentReltdPracticesExclInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7EmploymentReltdPracticesExcl>() {
      public productmodel.GL7EmploymentReltdPracticesExcl newEmptyInstance() {
        return new productmodel.GL7EmploymentReltdPracticesExcl();
      }
      
      
    });
  }
}