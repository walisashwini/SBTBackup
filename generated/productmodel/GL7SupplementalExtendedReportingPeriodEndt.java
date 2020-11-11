package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7SupplementalExtendedReportingPeriodEndt.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7SupplementalExtendedReportingPeriodEndt extends entity.GL7SublineTypeCov {
  protected GL7SupplementalExtendedReportingPeriodEndt()  {
    super((java.lang.Void)null);
  }
  
  public GL7SupplementalExtendedReportingPeriodEndt(entity.PolicyPeriod branch)  {
    super(branch, "GL7SupplementalExtendedReportingPeriodEndt");
  }
  
  public GL7SupplementalExtendedReportingPeriodEndt(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7SupplementalExtendedReportingPeriodEndt");
  }
  
  public productmodel.DirectGL7ManualPremium157Type getGL7ManualPremium157Term() {
    return (productmodel.DirectGL7ManualPremium157Type)getCovTerm("GL7ManualPremium157");
  }
  
  public boolean getHasGL7ManualPremium157Term() {
    return hasCovTerm("GL7ManualPremium157");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7SupplementalExtendedReportingPeriodEndtInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7SupplementalExtendedReportingPeriodEndt>() {
      public productmodel.GL7SupplementalExtendedReportingPeriodEndt newEmptyInstance() {
        return new productmodel.GL7SupplementalExtendedReportingPeriodEndt();
      }
      
      
    });
  }
}