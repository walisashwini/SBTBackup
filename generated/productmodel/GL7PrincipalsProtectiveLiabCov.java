package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7PrincipalsProtectiveLiabCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7PrincipalsProtectiveLiabCov extends entity.GL7SublineTypeCov {
  protected GL7PrincipalsProtectiveLiabCov()  {
    super((java.lang.Void)null);
  }
  
  public GL7PrincipalsProtectiveLiabCov(entity.PolicyPeriod branch)  {
    super(branch, "GL7PrincipalsProtectiveLiabCov");
  }
  
  public GL7PrincipalsProtectiveLiabCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7PrincipalsProtectiveLiabCov");
  }
  
  public productmodel.DirectGL7ManualPremium144Type getGL7ManualPremium144Term() {
    return (productmodel.DirectGL7ManualPremium144Type)getCovTerm("GL7ManualPremium144");
  }
  
  public productmodel.DirectGL7WorkersCompensationRateType getGL7WorkersCompensationRateTerm() {
    return (productmodel.DirectGL7WorkersCompensationRateType)getCovTerm("GL7WorkersCompensationRate");
  }
  
  public boolean getHasGL7ManualPremium144Term() {
    return hasCovTerm("GL7ManualPremium144");
  }
  
  public boolean getHasGL7WorkersCompensationRateTerm() {
    return hasCovTerm("GL7WorkersCompensationRate");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7PrincipalsProtectiveLiabCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7PrincipalsProtectiveLiabCov>() {
      public productmodel.GL7PrincipalsProtectiveLiabCov newEmptyInstance() {
        return new productmodel.GL7PrincipalsProtectiveLiabCov();
      }
      
      
    });
  }
}