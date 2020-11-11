package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7PremiumAuditNoncomplianceChargeOwnersContractor.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7PremiumAuditNoncomplianceChargeOwnersContractor extends entity.GL7SublineTypeCond {
  protected GL7PremiumAuditNoncomplianceChargeOwnersContractor()  {
    super((java.lang.Void)null);
  }
  
  public GL7PremiumAuditNoncomplianceChargeOwnersContractor(entity.PolicyPeriod branch)  {
    super(branch, "GL7PremiumAuditNoncomplianceChargeOwnersContractor");
  }
  
  public GL7PremiumAuditNoncomplianceChargeOwnersContractor(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7PremiumAuditNoncomplianceChargeOwnersContractor");
  }
  
  public productmodel.DirectGL7AuditNoncomplianceChargeFactor1Type getGL7AuditNoncomplianceChargeFactor1Term() {
    return (productmodel.DirectGL7AuditNoncomplianceChargeFactor1Type)getCovTerm("GL7AuditNoncomplianceChargeFactor1");
  }
  
  public productmodel.DirectGL7NumberOfWrittenAttempts1Type getGL7NumberOfWrittenAttempts1Term() {
    return (productmodel.DirectGL7NumberOfWrittenAttempts1Type)getCovTerm("GL7NumberOfWrittenAttempts1");
  }
  
  public productmodel.DirectGL7ReassessmentCharge1Type getGL7ReassessmentCharge1Term() {
    return (productmodel.DirectGL7ReassessmentCharge1Type)getCovTerm("GL7ReassessmentCharge1");
  }
  
  public productmodel.DirectGL7TotalAdvancePremium1Type getGL7TotalAdvancePremium1Term() {
    return (productmodel.DirectGL7TotalAdvancePremium1Type)getCovTerm("GL7TotalAdvancePremium1");
  }
  
  public boolean getHasGL7AuditNoncomplianceChargeFactor1Term() {
    return hasCovTerm("GL7AuditNoncomplianceChargeFactor1");
  }
  
  public boolean getHasGL7NumberOfWrittenAttempts1Term() {
    return hasCovTerm("GL7NumberOfWrittenAttempts1");
  }
  
  public boolean getHasGL7ReassessmentCharge1Term() {
    return hasCovTerm("GL7ReassessmentCharge1");
  }
  
  public boolean getHasGL7TotalAdvancePremium1Term() {
    return hasCovTerm("GL7TotalAdvancePremium1");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7PremiumAuditNoncomplianceChargeOwnersContractorInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7PremiumAuditNoncomplianceChargeOwnersContractor>() {
      public productmodel.GL7PremiumAuditNoncomplianceChargeOwnersContractor newEmptyInstance() {
        return new productmodel.GL7PremiumAuditNoncomplianceChargeOwnersContractor();
      }
      
      
    });
  }
}