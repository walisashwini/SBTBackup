package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclAccessDisclosureConfidentialPrsnlInfoDataRe.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclAccessDisclosureConfidentialPrsnlInfoDataRe extends entity.GL7SublineTypeExcl {
  protected GL7ExclAccessDisclosureConfidentialPrsnlInfoDataRe()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclAccessDisclosureConfidentialPrsnlInfoDataRe(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclAccessDisclosureConfidentialPrsnlInfoDataRe");
  }
  
  public GL7ExclAccessDisclosureConfidentialPrsnlInfoDataRe(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclAccessDisclosureConfidentialPrsnlInfoDataRe");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclAccessDisclosureConfidentialPrsnlInfoDataReInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclAccessDisclosureConfidentialPrsnlInfoDataRe>() {
      public productmodel.GL7ExclAccessDisclosureConfidentialPrsnlInfoDataRe newEmptyInstance() {
        return new productmodel.GL7ExclAccessDisclosureConfidentialPrsnlInfoDataRe();
      }
      
      
    });
  }
}