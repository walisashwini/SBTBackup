package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7DisclosureOfPremiumEstimatedPremiumCertifiedAct.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7DisclosureOfPremiumEstimatedPremiumCertifiedAct extends entity.GL7SublineTypeCov {
  protected GL7DisclosureOfPremiumEstimatedPremiumCertifiedAct()  {
    super((java.lang.Void)null);
  }
  
  public GL7DisclosureOfPremiumEstimatedPremiumCertifiedAct(entity.PolicyPeriod branch)  {
    super(branch, "GL7DisclosureOfPremiumEstimatedPremiumCertifiedAct");
  }
  
  public GL7DisclosureOfPremiumEstimatedPremiumCertifiedAct(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7DisclosureOfPremiumEstimatedPremiumCertifiedAct");
  }
  
  public productmodel.DirectGL7ActualPremiumThrough123105Type getGL7ActualPremiumThrough123105Term() {
    return (productmodel.DirectGL7ActualPremiumThrough123105Type)getCovTerm("GL7ActualPremiumThrough123105");
  }
  
  public productmodel.GenericGL7AdditionalInformationType getGL7AdditionalInformationTerm() {
    return (productmodel.GenericGL7AdditionalInformationType)getCovTerm("GL7AdditionalInformation");
  }
  
  public productmodel.GenericGL7CovFormPartPolicyType getGL7CovFormPartPolicyTerm() {
    return (productmodel.GenericGL7CovFormPartPolicyType)getCovTerm("GL7CovFormPartPolicy");
  }
  
  public productmodel.GenericGL7EndOfYearType getGL7EndOfYearTerm() {
    return (productmodel.GenericGL7EndOfYearType)getCovTerm("GL7EndOfYear");
  }
  
  public productmodel.DirectGL7EstimatedPremiumPast123105Type getGL7EstimatedPremiumPast123105Term() {
    return (productmodel.DirectGL7EstimatedPremiumPast123105Type)getCovTerm("GL7EstimatedPremiumPast123105");
  }
  
  public productmodel.DirectGL7FedShareTerrLossesAType getGL7FedShareTerrLossesATerm() {
    return (productmodel.DirectGL7FedShareTerrLossesAType)getCovTerm("GL7FedShareTerrLossesA");
  }
  
  public productmodel.DirectGL7FedShareTerrLossesBType getGL7FedShareTerrLossesBTerm() {
    return (productmodel.DirectGL7FedShareTerrLossesBType)getCovTerm("GL7FedShareTerrLossesB");
  }
  
  public productmodel.DirectGL7YearAType getGL7YearATerm() {
    return (productmodel.DirectGL7YearAType)getCovTerm("GL7YearA");
  }
  
  public productmodel.DirectGL7YearBType getGL7YearBTerm() {
    return (productmodel.DirectGL7YearBType)getCovTerm("GL7YearB");
  }
  
  public boolean getHasGL7ActualPremiumThrough123105Term() {
    return hasCovTerm("GL7ActualPremiumThrough123105");
  }
  
  public boolean getHasGL7AdditionalInformationTerm() {
    return hasCovTerm("GL7AdditionalInformation");
  }
  
  public boolean getHasGL7CovFormPartPolicyTerm() {
    return hasCovTerm("GL7CovFormPartPolicy");
  }
  
  public boolean getHasGL7EndOfYearTerm() {
    return hasCovTerm("GL7EndOfYear");
  }
  
  public boolean getHasGL7EstimatedPremiumPast123105Term() {
    return hasCovTerm("GL7EstimatedPremiumPast123105");
  }
  
  public boolean getHasGL7FedShareTerrLossesATerm() {
    return hasCovTerm("GL7FedShareTerrLossesA");
  }
  
  public boolean getHasGL7FedShareTerrLossesBTerm() {
    return hasCovTerm("GL7FedShareTerrLossesB");
  }
  
  public boolean getHasGL7YearATerm() {
    return hasCovTerm("GL7YearA");
  }
  
  public boolean getHasGL7YearBTerm() {
    return hasCovTerm("GL7YearB");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7DisclosureOfPremiumEstimatedPremiumCertifiedActInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7DisclosureOfPremiumEstimatedPremiumCertifiedAct>() {
      public productmodel.GL7DisclosureOfPremiumEstimatedPremiumCertifiedAct newEmptyInstance() {
        return new productmodel.GL7DisclosureOfPremiumEstimatedPremiumCertifiedAct();
      }
      
      
    });
  }
}