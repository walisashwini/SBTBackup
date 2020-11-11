package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclTestingConsultingErrorsOmissions.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclTestingConsultingErrorsOmissions extends entity.GL7SublineTypeExcl {
  protected GL7ExclTestingConsultingErrorsOmissions()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclTestingConsultingErrorsOmissions(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclTestingConsultingErrorsOmissions");
  }
  
  public GL7ExclTestingConsultingErrorsOmissions(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclTestingConsultingErrorsOmissions");
  }
  
  public productmodel.DirectGL7ManualPremium85Type getGL7ManualPremium85Term() {
    return (productmodel.DirectGL7ManualPremium85Type)getCovTerm("GL7ManualPremium85");
  }
  
  public boolean getHasGL7ManualPremium85Term() {
    return hasCovTerm("GL7ManualPremium85");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclTestingConsultingErrorsOmissionsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclTestingConsultingErrorsOmissions>() {
      public productmodel.GL7ExclTestingConsultingErrorsOmissions newEmptyInstance() {
        return new productmodel.GL7ExclTestingConsultingErrorsOmissions();
      }
      
      
    });
  }
}