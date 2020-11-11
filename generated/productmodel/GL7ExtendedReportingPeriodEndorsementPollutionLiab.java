package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExtendedReportingPeriodEndorsementPollutionLiab.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExtendedReportingPeriodEndorsementPollutionLiab extends entity.GL7SublineCov {
  protected GL7ExtendedReportingPeriodEndorsementPollutionLiab()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExtendedReportingPeriodEndorsementPollutionLiab(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExtendedReportingPeriodEndorsementPollutionLiab");
  }
  
  public GL7ExtendedReportingPeriodEndorsementPollutionLiab(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExtendedReportingPeriodEndorsementPollutionLiab");
  }
  
  public productmodel.DirectGL7ManualPremium177Type getGL7ManualPremium177Term() {
    return (productmodel.DirectGL7ManualPremium177Type)getCovTerm("GL7ManualPremium177");
  }
  
  public boolean getHasGL7ManualPremium177Term() {
    return hasCovTerm("GL7ManualPremium177");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExtendedReportingPeriodEndorsementPollutionLiabInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExtendedReportingPeriodEndorsementPollutionLiab>() {
      public productmodel.GL7ExtendedReportingPeriodEndorsementPollutionLiab newEmptyInstance() {
        return new productmodel.GL7ExtendedReportingPeriodEndorsementPollutionLiab();
      }
      
      
    });
  }
}