package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExtendedReportingPeriodEndorsementPollutionLia1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExtendedReportingPeriodEndorsementPollutionLia1 extends entity.GL7SublineCov {
  protected GL7ExtendedReportingPeriodEndorsementPollutionLia1()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExtendedReportingPeriodEndorsementPollutionLia1(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExtendedReportingPeriodEndorsementPollutionLia1");
  }
  
  public GL7ExtendedReportingPeriodEndorsementPollutionLia1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExtendedReportingPeriodEndorsementPollutionLia1");
  }
  
  public productmodel.DirectGL7ManualPremium196Type getGL7ManualPremium196Term() {
    return (productmodel.DirectGL7ManualPremium196Type)getCovTerm("GL7ManualPremium196");
  }
  
  public boolean getHasGL7ManualPremium196Term() {
    return hasCovTerm("GL7ManualPremium196");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExtendedReportingPeriodEndorsementPollutionLia1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExtendedReportingPeriodEndorsementPollutionLia1>() {
      public productmodel.GL7ExtendedReportingPeriodEndorsementPollutionLia1 newEmptyInstance() {
        return new productmodel.GL7ExtendedReportingPeriodEndorsementPollutionLia1();
      }
      
      
    });
  }
}