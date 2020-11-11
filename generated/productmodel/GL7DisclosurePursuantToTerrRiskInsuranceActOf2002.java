package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7DisclosurePursuantToTerrRiskInsuranceActOf2002.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7DisclosurePursuantToTerrRiskInsuranceActOf2002 extends entity.GL7SublineTypeCov {
  protected GL7DisclosurePursuantToTerrRiskInsuranceActOf2002()  {
    super((java.lang.Void)null);
  }
  
  public GL7DisclosurePursuantToTerrRiskInsuranceActOf2002(entity.PolicyPeriod branch)  {
    super(branch, "GL7DisclosurePursuantToTerrRiskInsuranceActOf2002");
  }
  
  public GL7DisclosurePursuantToTerrRiskInsuranceActOf2002(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7DisclosurePursuantToTerrRiskInsuranceActOf2002");
  }
  
  public productmodel.DirectGL7ActualPremiumCertifiedActsType getGL7ActualPremiumCertifiedActsTerm() {
    return (productmodel.DirectGL7ActualPremiumCertifiedActsType)getCovTerm("GL7ActualPremiumCertifiedActs");
  }
  
  public productmodel.GenericGL7AdditionalInformation2Type getGL7AdditionalInformation2Term() {
    return (productmodel.GenericGL7AdditionalInformation2Type)getCovTerm("GL7AdditionalInformation2");
  }
  
  public productmodel.GenericGL7CovFormPartPolicy2Type getGL7CovFormPartPolicy2Term() {
    return (productmodel.GenericGL7CovFormPartPolicy2Type)getCovTerm("GL7CovFormPartPolicy2");
  }
  
  public productmodel.DirectGL7FedShareTerrLossesA2Type getGL7FedShareTerrLossesA2Term() {
    return (productmodel.DirectGL7FedShareTerrLossesA2Type)getCovTerm("GL7FedShareTerrLossesA2");
  }
  
  public productmodel.DirectGL7FedShareTerrLossesB2Type getGL7FedShareTerrLossesB2Term() {
    return (productmodel.DirectGL7FedShareTerrLossesB2Type)getCovTerm("GL7FedShareTerrLossesB2");
  }
  
  public productmodel.DirectGL7YearA2Type getGL7YearA2Term() {
    return (productmodel.DirectGL7YearA2Type)getCovTerm("GL7YearA2");
  }
  
  public productmodel.DirectGL7YearB2Type getGL7YearB2Term() {
    return (productmodel.DirectGL7YearB2Type)getCovTerm("GL7YearB2");
  }
  
  public boolean getHasGL7ActualPremiumCertifiedActsTerm() {
    return hasCovTerm("GL7ActualPremiumCertifiedActs");
  }
  
  public boolean getHasGL7AdditionalInformation2Term() {
    return hasCovTerm("GL7AdditionalInformation2");
  }
  
  public boolean getHasGL7CovFormPartPolicy2Term() {
    return hasCovTerm("GL7CovFormPartPolicy2");
  }
  
  public boolean getHasGL7FedShareTerrLossesA2Term() {
    return hasCovTerm("GL7FedShareTerrLossesA2");
  }
  
  public boolean getHasGL7FedShareTerrLossesB2Term() {
    return hasCovTerm("GL7FedShareTerrLossesB2");
  }
  
  public boolean getHasGL7YearA2Term() {
    return hasCovTerm("GL7YearA2");
  }
  
  public boolean getHasGL7YearB2Term() {
    return hasCovTerm("GL7YearB2");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7DisclosurePursuantToTerrRiskInsuranceActOf2002InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7DisclosurePursuantToTerrRiskInsuranceActOf2002>() {
      public productmodel.GL7DisclosurePursuantToTerrRiskInsuranceActOf2002 newEmptyInstance() {
        return new productmodel.GL7DisclosurePursuantToTerrRiskInsuranceActOf2002();
      }
      
      
    });
  }
}