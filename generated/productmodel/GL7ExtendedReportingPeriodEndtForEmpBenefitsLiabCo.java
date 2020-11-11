package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExtendedReportingPeriodEndtForEmpBenefitsLiabCo.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExtendedReportingPeriodEndtForEmpBenefitsLiabCo extends entity.GL7SublineTypeCov {
  protected GL7ExtendedReportingPeriodEndtForEmpBenefitsLiabCo()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExtendedReportingPeriodEndtForEmpBenefitsLiabCo(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExtendedReportingPeriodEndtForEmpBenefitsLiabCo");
  }
  
  public GL7ExtendedReportingPeriodEndtForEmpBenefitsLiabCo(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExtendedReportingPeriodEndtForEmpBenefitsLiabCo");
  }
  
  public productmodel.DirectGL7ManualPremium109Type getGL7ManualPremium109Term() {
    return (productmodel.DirectGL7ManualPremium109Type)getCovTerm("GL7ManualPremium109");
  }
  
  public boolean getHasGL7ManualPremium109Term() {
    return hasCovTerm("GL7ManualPremium109");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExtendedReportingPeriodEndtForEmpBenefitsLiabCoInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExtendedReportingPeriodEndtForEmpBenefitsLiabCo>() {
      public productmodel.GL7ExtendedReportingPeriodEndtForEmpBenefitsLiabCo newEmptyInstance() {
        return new productmodel.GL7ExtendedReportingPeriodEndtForEmpBenefitsLiabCo();
      }
      
      
    });
  }
}