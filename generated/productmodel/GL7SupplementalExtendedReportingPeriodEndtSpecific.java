package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7SupplementalExtendedReportingPeriodEndtSpecific.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7SupplementalExtendedReportingPeriodEndtSpecific extends entity.GL7SublineTypeCov {
  protected GL7SupplementalExtendedReportingPeriodEndtSpecific()  {
    super((java.lang.Void)null);
  }
  
  public GL7SupplementalExtendedReportingPeriodEndtSpecific(entity.PolicyPeriod branch)  {
    super(branch, "GL7SupplementalExtendedReportingPeriodEndtSpecific");
  }
  
  public GL7SupplementalExtendedReportingPeriodEndtSpecific(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7SupplementalExtendedReportingPeriodEndtSpecific");
  }
  
  public productmodel.DirectGL7ManualPremium160Type getGL7ManualPremium160Term() {
    return (productmodel.DirectGL7ManualPremium160Type)getCovTerm("GL7ManualPremium160");
  }
  
  public boolean getHasGL7ManualPremium160Term() {
    return hasCovTerm("GL7ManualPremium160");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7SupplementalExtendedReportingPeriodEndtSpecificInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7SupplementalExtendedReportingPeriodEndtSpecific>() {
      public productmodel.GL7SupplementalExtendedReportingPeriodEndtSpecific newEmptyInstance() {
        return new productmodel.GL7SupplementalExtendedReportingPeriodEndtSpecific();
      }
      
      
    });
  }
}