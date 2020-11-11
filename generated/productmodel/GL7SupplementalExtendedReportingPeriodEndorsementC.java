package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7SupplementalExtendedReportingPeriodEndorsementC.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7SupplementalExtendedReportingPeriodEndorsementC extends entity.GL7SublineTypeCov {
  protected GL7SupplementalExtendedReportingPeriodEndorsementC()  {
    super((java.lang.Void)null);
  }
  
  public GL7SupplementalExtendedReportingPeriodEndorsementC(entity.PolicyPeriod branch)  {
    super(branch, "GL7SupplementalExtendedReportingPeriodEndorsementC");
  }
  
  public GL7SupplementalExtendedReportingPeriodEndorsementC(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7SupplementalExtendedReportingPeriodEndorsementC");
  }
  
  public productmodel.DirectGL7ManualPremium156Type getGL7ManualPremium156Term() {
    return (productmodel.DirectGL7ManualPremium156Type)getCovTerm("GL7ManualPremium156");
  }
  
  public boolean getHasGL7ManualPremium156Term() {
    return hasCovTerm("GL7ManualPremium156");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7SupplementalExtendedReportingPeriodEndorsementCInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7SupplementalExtendedReportingPeriodEndorsementC>() {
      public productmodel.GL7SupplementalExtendedReportingPeriodEndorsementC newEmptyInstance() {
        return new productmodel.GL7SupplementalExtendedReportingPeriodEndorsementC();
      }
      
      
    });
  }
}