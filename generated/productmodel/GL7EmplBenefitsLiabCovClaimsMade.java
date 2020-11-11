package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7EmplBenefitsLiabCovClaimsMade.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7EmplBenefitsLiabCovClaimsMade extends entity.GL7SublineTypeCov {
  protected GL7EmplBenefitsLiabCovClaimsMade()  {
    super((java.lang.Void)null);
  }
  
  public GL7EmplBenefitsLiabCovClaimsMade(entity.PolicyPeriod branch)  {
    super(branch, "GL7EmplBenefitsLiabCovClaimsMade");
  }
  
  public GL7EmplBenefitsLiabCovClaimsMade(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7EmplBenefitsLiabCovClaimsMade");
  }
  
  public productmodel.DirectGL7AggLimitIntType getGL7AggLimitIntTerm() {
    return (productmodel.DirectGL7AggLimitIntType)getCovTerm("GL7AggLimitInt");
  }
  
  public productmodel.DirectGL7DedIntType getGL7DedIntTerm() {
    return (productmodel.DirectGL7DedIntType)getCovTerm("GL7DedInt");
  }
  
  public productmodel.DirectGL7LimitEachEmplIntType getGL7LimitEachEmplIntTerm() {
    return (productmodel.DirectGL7LimitEachEmplIntType)getCovTerm("GL7LimitEachEmplInt");
  }
  
  public productmodel.DirectGL7ManualPremium46Type getGL7ManualPremium46Term() {
    return (productmodel.DirectGL7ManualPremium46Type)getCovTerm("GL7ManualPremium46");
  }
  
  public productmodel.GenericGL7RetroactiveDateType getGL7RetroactiveDateTerm() {
    return (productmodel.GenericGL7RetroactiveDateType)getCovTerm("GL7RetroactiveDate");
  }
  
  public boolean getHasGL7AggLimitIntTerm() {
    return hasCovTerm("GL7AggLimitInt");
  }
  
  public boolean getHasGL7DedIntTerm() {
    return hasCovTerm("GL7DedInt");
  }
  
  public boolean getHasGL7LimitEachEmplIntTerm() {
    return hasCovTerm("GL7LimitEachEmplInt");
  }
  
  public boolean getHasGL7ManualPremium46Term() {
    return hasCovTerm("GL7ManualPremium46");
  }
  
  public boolean getHasGL7RetroactiveDateTerm() {
    return hasCovTerm("GL7RetroactiveDate");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7EmplBenefitsLiabCovClaimsMadeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7EmplBenefitsLiabCovClaimsMade>() {
      public productmodel.GL7EmplBenefitsLiabCovClaimsMade newEmptyInstance() {
        return new productmodel.GL7EmplBenefitsLiabCovClaimsMade();
      }
      
      
    });
  }
}