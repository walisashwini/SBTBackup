package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7PrimaryAndNoncontributoryOtherInsuranceConditio.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7PrimaryAndNoncontributoryOtherInsuranceConditio extends entity.GL7SublineTypeCond {
  protected GL7PrimaryAndNoncontributoryOtherInsuranceConditio()  {
    super((java.lang.Void)null);
  }
  
  public GL7PrimaryAndNoncontributoryOtherInsuranceConditio(entity.PolicyPeriod branch)  {
    super(branch, "GL7PrimaryAndNoncontributoryOtherInsuranceConditio");
  }
  
  public GL7PrimaryAndNoncontributoryOtherInsuranceConditio(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7PrimaryAndNoncontributoryOtherInsuranceConditio");
  }
  
  public productmodel.DirectGL7ManualPremium143Type getGL7ManualPremium143Term() {
    return (productmodel.DirectGL7ManualPremium143Type)getCovTerm("GL7ManualPremium143");
  }
  
  public boolean getHasGL7ManualPremium143Term() {
    return hasCovTerm("GL7ManualPremium143");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7PrimaryAndNoncontributoryOtherInsuranceConditioInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7PrimaryAndNoncontributoryOtherInsuranceConditio>() {
      public productmodel.GL7PrimaryAndNoncontributoryOtherInsuranceConditio newEmptyInstance() {
        return new productmodel.GL7PrimaryAndNoncontributoryOtherInsuranceConditio();
      }
      
      
    });
  }
}