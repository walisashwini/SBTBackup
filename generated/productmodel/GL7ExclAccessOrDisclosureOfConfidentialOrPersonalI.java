package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclAccessOrDisclosureOfConfidentialOrPersonalI.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclAccessOrDisclosureOfConfidentialOrPersonalI extends entity.GL7SublineTypeExcl {
  protected GL7ExclAccessOrDisclosureOfConfidentialOrPersonalI()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclAccessOrDisclosureOfConfidentialOrPersonalI(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclAccessOrDisclosureOfConfidentialOrPersonalI");
  }
  
  public GL7ExclAccessOrDisclosureOfConfidentialOrPersonalI(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclAccessOrDisclosureOfConfidentialOrPersonalI");
  }
  
  public productmodel.DirectGL7ManualPremium91Type getGL7ManualPremium91Term() {
    return (productmodel.DirectGL7ManualPremium91Type)getCovTerm("GL7ManualPremium91");
  }
  
  public boolean getHasGL7ManualPremium91Term() {
    return hasCovTerm("GL7ManualPremium91");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclAccessOrDisclosureOfConfidentialOrPersonalIInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclAccessOrDisclosureOfConfidentialOrPersonalI>() {
      public productmodel.GL7ExclAccessOrDisclosureOfConfidentialOrPersonalI newEmptyInstance() {
        return new productmodel.GL7ExclAccessOrDisclosureOfConfidentialOrPersonalI();
      }
      
      
    });
  }
}