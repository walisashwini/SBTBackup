package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclAccessOrDisclosureOfConfidentialOrPersonal2.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclAccessOrDisclosureOfConfidentialOrPersonal2 extends entity.GL7SublineTypeExcl {
  protected GL7ExclAccessOrDisclosureOfConfidentialOrPersonal2()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclAccessOrDisclosureOfConfidentialOrPersonal2(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclAccessOrDisclosureOfConfidentialOrPersonal2");
  }
  
  public GL7ExclAccessOrDisclosureOfConfidentialOrPersonal2(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclAccessOrDisclosureOfConfidentialOrPersonal2");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclAccessOrDisclosureOfConfidentialOrPersonal2InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclAccessOrDisclosureOfConfidentialOrPersonal2>() {
      public productmodel.GL7ExclAccessOrDisclosureOfConfidentialOrPersonal2 newEmptyInstance() {
        return new productmodel.GL7ExclAccessOrDisclosureOfConfidentialOrPersonal2();
      }
      
      
    });
  }
}