package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclAccessDisclosureConfidentialPersonalInfoDat.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclAccessDisclosureConfidentialPersonalInfoDat extends entity.GL7SublineTypeExcl {
  protected GL7ExclAccessDisclosureConfidentialPersonalInfoDat()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclAccessDisclosureConfidentialPersonalInfoDat(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclAccessDisclosureConfidentialPersonalInfoDat");
  }
  
  public GL7ExclAccessDisclosureConfidentialPersonalInfoDat(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclAccessDisclosureConfidentialPersonalInfoDat");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclAccessDisclosureConfidentialPersonalInfoDatInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclAccessDisclosureConfidentialPersonalInfoDat>() {
      public productmodel.GL7ExclAccessDisclosureConfidentialPersonalInfoDat newEmptyInstance() {
        return new productmodel.GL7ExclAccessDisclosureConfidentialPersonalInfoDat();
      }
      
      
    });
  }
}