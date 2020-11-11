package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7SupplementalExtendedReportingPeriodEndtSpecifi1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7SupplementalExtendedReportingPeriodEndtSpecifi1 extends entity.GL7SublineTypeCov {
  protected GL7SupplementalExtendedReportingPeriodEndtSpecifi1()  {
    super((java.lang.Void)null);
  }
  
  public GL7SupplementalExtendedReportingPeriodEndtSpecifi1(entity.PolicyPeriod branch)  {
    super(branch, "GL7SupplementalExtendedReportingPeriodEndtSpecifi1");
  }
  
  public GL7SupplementalExtendedReportingPeriodEndtSpecifi1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7SupplementalExtendedReportingPeriodEndtSpecifi1");
  }
  
  public productmodel.DirectGL7ManualPremium161Type getGL7ManualPremium161Term() {
    return (productmodel.DirectGL7ManualPremium161Type)getCovTerm("GL7ManualPremium161");
  }
  
  public boolean getHasGL7ManualPremium161Term() {
    return hasCovTerm("GL7ManualPremium161");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7SupplementalExtendedReportingPeriodEndtSpecifi1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7SupplementalExtendedReportingPeriodEndtSpecifi1>() {
      public productmodel.GL7SupplementalExtendedReportingPeriodEndtSpecifi1 newEmptyInstance() {
        return new productmodel.GL7SupplementalExtendedReportingPeriodEndtSpecifi1();
      }
      
      
    });
  }
}