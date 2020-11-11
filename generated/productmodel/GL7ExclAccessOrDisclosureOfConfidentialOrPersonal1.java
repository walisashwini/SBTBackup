package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclAccessOrDisclosureOfConfidentialOrPersonal1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclAccessOrDisclosureOfConfidentialOrPersonal1 extends entity.GL7SublineTypeExcl {
  protected GL7ExclAccessOrDisclosureOfConfidentialOrPersonal1()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclAccessOrDisclosureOfConfidentialOrPersonal1(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclAccessOrDisclosureOfConfidentialOrPersonal1");
  }
  
  public GL7ExclAccessOrDisclosureOfConfidentialOrPersonal1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclAccessOrDisclosureOfConfidentialOrPersonal1");
  }
  
  public productmodel.OptionGL7ExposureBasis1Type getGL7ExposureBasis1Term() {
    return (productmodel.OptionGL7ExposureBasis1Type)getCovTerm("GL7ExposureBasis1");
  }
  
  public productmodel.DirectGL7ManualPremium92Type getGL7ManualPremium92Term() {
    return (productmodel.DirectGL7ManualPremium92Type)getCovTerm("GL7ManualPremium92");
  }
  
  public boolean getHasGL7ExposureBasis1Term() {
    return hasCovTerm("GL7ExposureBasis1");
  }
  
  public boolean getHasGL7ManualPremium92Term() {
    return hasCovTerm("GL7ManualPremium92");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclAccessOrDisclosureOfConfidentialOrPersonal1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclAccessOrDisclosureOfConfidentialOrPersonal1>() {
      public productmodel.GL7ExclAccessOrDisclosureOfConfidentialOrPersonal1 newEmptyInstance() {
        return new productmodel.GL7ExclAccessOrDisclosureOfConfidentialOrPersonal1();
      }
      
      
    });
  }
}