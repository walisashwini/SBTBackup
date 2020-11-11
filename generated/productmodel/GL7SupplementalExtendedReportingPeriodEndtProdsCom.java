package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7SupplementalExtendedReportingPeriodEndtProdsCom.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7SupplementalExtendedReportingPeriodEndtProdsCom extends entity.GL7SublineTypeCov {
  protected GL7SupplementalExtendedReportingPeriodEndtProdsCom()  {
    super((java.lang.Void)null);
  }
  
  public GL7SupplementalExtendedReportingPeriodEndtProdsCom(entity.PolicyPeriod branch)  {
    super(branch, "GL7SupplementalExtendedReportingPeriodEndtProdsCom");
  }
  
  public GL7SupplementalExtendedReportingPeriodEndtProdsCom(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7SupplementalExtendedReportingPeriodEndtProdsCom");
  }
  
  public productmodel.DirectGL7ManualPremium159Type getGL7ManualPremium159Term() {
    return (productmodel.DirectGL7ManualPremium159Type)getCovTerm("GL7ManualPremium159");
  }
  
  public boolean getHasGL7ManualPremium159Term() {
    return hasCovTerm("GL7ManualPremium159");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7SupplementalExtendedReportingPeriodEndtProdsComInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7SupplementalExtendedReportingPeriodEndtProdsCom>() {
      public productmodel.GL7SupplementalExtendedReportingPeriodEndtProdsCom newEmptyInstance() {
        return new productmodel.GL7SupplementalExtendedReportingPeriodEndtProdsCom();
      }
      
      
    });
  }
}