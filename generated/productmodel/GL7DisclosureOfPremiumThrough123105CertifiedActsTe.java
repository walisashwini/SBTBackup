package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7DisclosureOfPremiumThrough123105CertifiedActsTe.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7DisclosureOfPremiumThrough123105CertifiedActsTe extends entity.GL7SublineTypeCov {
  protected GL7DisclosureOfPremiumThrough123105CertifiedActsTe()  {
    super((java.lang.Void)null);
  }
  
  public GL7DisclosureOfPremiumThrough123105CertifiedActsTe(entity.PolicyPeriod branch)  {
    super(branch, "GL7DisclosureOfPremiumThrough123105CertifiedActsTe");
  }
  
  public GL7DisclosureOfPremiumThrough123105CertifiedActsTe(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7DisclosureOfPremiumThrough123105CertifiedActsTe");
  }
  
  public productmodel.DirectGL7ActualPremiumThrough1231051Type getGL7ActualPremiumThrough1231051Term() {
    return (productmodel.DirectGL7ActualPremiumThrough1231051Type)getCovTerm("GL7ActualPremiumThrough1231051");
  }
  
  public productmodel.GenericGL7AdditionalInformation1Type getGL7AdditionalInformation1Term() {
    return (productmodel.GenericGL7AdditionalInformation1Type)getCovTerm("GL7AdditionalInformation1");
  }
  
  public productmodel.GenericGL7CovFormPartPolicy1Type getGL7CovFormPartPolicy1Term() {
    return (productmodel.GenericGL7CovFormPartPolicy1Type)getCovTerm("GL7CovFormPartPolicy1");
  }
  
  public productmodel.GenericGL7EndOfYear1Type getGL7EndOfYear1Term() {
    return (productmodel.GenericGL7EndOfYear1Type)getCovTerm("GL7EndOfYear1");
  }
  
  public productmodel.DirectGL7FedShareTerrLossesA1Type getGL7FedShareTerrLossesA1Term() {
    return (productmodel.DirectGL7FedShareTerrLossesA1Type)getCovTerm("GL7FedShareTerrLossesA1");
  }
  
  public productmodel.DirectGL7FedShareTerrLossesB1Type getGL7FedShareTerrLossesB1Term() {
    return (productmodel.DirectGL7FedShareTerrLossesB1Type)getCovTerm("GL7FedShareTerrLossesB1");
  }
  
  public productmodel.DirectGL7YearA1Type getGL7YearA1Term() {
    return (productmodel.DirectGL7YearA1Type)getCovTerm("GL7YearA1");
  }
  
  public productmodel.DirectGL7YearB1Type getGL7YearB1Term() {
    return (productmodel.DirectGL7YearB1Type)getCovTerm("GL7YearB1");
  }
  
  public boolean getHasGL7ActualPremiumThrough1231051Term() {
    return hasCovTerm("GL7ActualPremiumThrough1231051");
  }
  
  public boolean getHasGL7AdditionalInformation1Term() {
    return hasCovTerm("GL7AdditionalInformation1");
  }
  
  public boolean getHasGL7CovFormPartPolicy1Term() {
    return hasCovTerm("GL7CovFormPartPolicy1");
  }
  
  public boolean getHasGL7EndOfYear1Term() {
    return hasCovTerm("GL7EndOfYear1");
  }
  
  public boolean getHasGL7FedShareTerrLossesA1Term() {
    return hasCovTerm("GL7FedShareTerrLossesA1");
  }
  
  public boolean getHasGL7FedShareTerrLossesB1Term() {
    return hasCovTerm("GL7FedShareTerrLossesB1");
  }
  
  public boolean getHasGL7YearA1Term() {
    return hasCovTerm("GL7YearA1");
  }
  
  public boolean getHasGL7YearB1Term() {
    return hasCovTerm("GL7YearB1");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7DisclosureOfPremiumThrough123105CertifiedActsTeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7DisclosureOfPremiumThrough123105CertifiedActsTe>() {
      public productmodel.GL7DisclosureOfPremiumThrough123105CertifiedActsTe newEmptyInstance() {
        return new productmodel.GL7DisclosureOfPremiumThrough123105CertifiedActsTe();
      }
      
      
    });
  }
}