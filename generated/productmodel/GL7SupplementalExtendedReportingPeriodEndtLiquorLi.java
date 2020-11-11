package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7SupplementalExtendedReportingPeriodEndtLiquorLi.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7SupplementalExtendedReportingPeriodEndtLiquorLi extends entity.GL7SublineTypeCov {
  protected GL7SupplementalExtendedReportingPeriodEndtLiquorLi()  {
    super((java.lang.Void)null);
  }
  
  public GL7SupplementalExtendedReportingPeriodEndtLiquorLi(entity.PolicyPeriod branch)  {
    super(branch, "GL7SupplementalExtendedReportingPeriodEndtLiquorLi");
  }
  
  public GL7SupplementalExtendedReportingPeriodEndtLiquorLi(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7SupplementalExtendedReportingPeriodEndtLiquorLi");
  }
  
  public productmodel.DirectGL7ManualPremium158Type getGL7ManualPremium158Term() {
    return (productmodel.DirectGL7ManualPremium158Type)getCovTerm("GL7ManualPremium158");
  }
  
  public boolean getHasGL7ManualPremium158Term() {
    return hasCovTerm("GL7ManualPremium158");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7SupplementalExtendedReportingPeriodEndtLiquorLiInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7SupplementalExtendedReportingPeriodEndtLiquorLi>() {
      public productmodel.GL7SupplementalExtendedReportingPeriodEndtLiquorLi newEmptyInstance() {
        return new productmodel.GL7SupplementalExtendedReportingPeriodEndtLiquorLi();
      }
      
      
    });
  }
}