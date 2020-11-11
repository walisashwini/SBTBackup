package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExtendedReportingPeriodEndorsementForElectrData.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExtendedReportingPeriodEndorsementForElectrData extends entity.GL7SublineTypeCov {
  protected GL7ExtendedReportingPeriodEndorsementForElectrData()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExtendedReportingPeriodEndorsementForElectrData(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExtendedReportingPeriodEndorsementForElectrData");
  }
  
  public GL7ExtendedReportingPeriodEndorsementForElectrData(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExtendedReportingPeriodEndorsementForElectrData");
  }
  
  public productmodel.DirectGL7ManualPremium107Type getGL7ManualPremium107Term() {
    return (productmodel.DirectGL7ManualPremium107Type)getCovTerm("GL7ManualPremium107");
  }
  
  public boolean getHasGL7ManualPremium107Term() {
    return hasCovTerm("GL7ManualPremium107");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExtendedReportingPeriodEndorsementForElectrDataInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExtendedReportingPeriodEndorsementForElectrData>() {
      public productmodel.GL7ExtendedReportingPeriodEndorsementForElectrData newEmptyInstance() {
        return new productmodel.GL7ExtendedReportingPeriodEndorsementForElectrData();
      }
      
      
    });
  }
}