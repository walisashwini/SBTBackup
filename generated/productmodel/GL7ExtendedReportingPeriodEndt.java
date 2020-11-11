package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExtendedReportingPeriodEndt.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExtendedReportingPeriodEndt extends entity.GL7SublineTypeCov {
  protected GL7ExtendedReportingPeriodEndt()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExtendedReportingPeriodEndt(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExtendedReportingPeriodEndt");
  }
  
  public GL7ExtendedReportingPeriodEndt(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExtendedReportingPeriodEndt");
  }
  
  public productmodel.DirectGL7ManualPremium108Type getGL7ManualPremium108Term() {
    return (productmodel.DirectGL7ManualPremium108Type)getCovTerm("GL7ManualPremium108");
  }
  
  public boolean getHasGL7ManualPremium108Term() {
    return hasCovTerm("GL7ManualPremium108");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExtendedReportingPeriodEndtInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExtendedReportingPeriodEndt>() {
      public productmodel.GL7ExtendedReportingPeriodEndt newEmptyInstance() {
        return new productmodel.GL7ExtendedReportingPeriodEndt();
      }
      
      
    });
  }
}