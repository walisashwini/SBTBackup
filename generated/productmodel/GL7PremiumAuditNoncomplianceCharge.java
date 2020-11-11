package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7PremiumAuditNoncomplianceCharge.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7PremiumAuditNoncomplianceCharge extends entity.GL7SublineTypeCond {
  protected GL7PremiumAuditNoncomplianceCharge()  {
    super((java.lang.Void)null);
  }
  
  public GL7PremiumAuditNoncomplianceCharge(entity.PolicyPeriod branch)  {
    super(branch, "GL7PremiumAuditNoncomplianceCharge");
  }
  
  public GL7PremiumAuditNoncomplianceCharge(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7PremiumAuditNoncomplianceCharge");
  }
  
  public productmodel.DirectGL7AuditNoncomplianceChargeFactorType getGL7AuditNoncomplianceChargeFactorTerm() {
    return (productmodel.DirectGL7AuditNoncomplianceChargeFactorType)getCovTerm("GL7AuditNoncomplianceChargeFactor");
  }
  
  public productmodel.DirectGL7NumberOfWrittenAttemptsType getGL7NumberOfWrittenAttemptsTerm() {
    return (productmodel.DirectGL7NumberOfWrittenAttemptsType)getCovTerm("GL7NumberOfWrittenAttempts");
  }
  
  public productmodel.DirectGL7ReassessmentChargeType getGL7ReassessmentChargeTerm() {
    return (productmodel.DirectGL7ReassessmentChargeType)getCovTerm("GL7ReassessmentCharge");
  }
  
  public productmodel.DirectGL7TotalAdvancePremiumType getGL7TotalAdvancePremiumTerm() {
    return (productmodel.DirectGL7TotalAdvancePremiumType)getCovTerm("GL7TotalAdvancePremium");
  }
  
  public boolean getHasGL7AuditNoncomplianceChargeFactorTerm() {
    return hasCovTerm("GL7AuditNoncomplianceChargeFactor");
  }
  
  public boolean getHasGL7NumberOfWrittenAttemptsTerm() {
    return hasCovTerm("GL7NumberOfWrittenAttempts");
  }
  
  public boolean getHasGL7ReassessmentChargeTerm() {
    return hasCovTerm("GL7ReassessmentCharge");
  }
  
  public boolean getHasGL7TotalAdvancePremiumTerm() {
    return hasCovTerm("GL7TotalAdvancePremium");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7PremiumAuditNoncomplianceChargeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7PremiumAuditNoncomplianceCharge>() {
      public productmodel.GL7PremiumAuditNoncomplianceCharge newEmptyInstance() {
        return new productmodel.GL7PremiumAuditNoncomplianceCharge();
      }
      
      
    });
  }
}