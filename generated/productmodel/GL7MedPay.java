package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7MedPay.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7MedPay extends entity.GL7SublineTypeCov {
  protected GL7MedPay()  {
    super((java.lang.Void)null);
  }
  
  public GL7MedPay(entity.PolicyPeriod branch)  {
    super(branch, "GL7MedPay");
  }
  
  public GL7MedPay(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7MedPay");
  }
  
  public productmodel.OptionGL7Limit2Type getGL7Limit2Term() {
    return (productmodel.OptionGL7Limit2Type)getCovTerm("GL7Limit2");
  }
  
  public boolean getHasGL7Limit2Term() {
    return hasCovTerm("GL7Limit2");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7MedPayInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7MedPay>() {
      public productmodel.GL7MedPay newEmptyInstance() {
        return new productmodel.GL7MedPay();
      }
      
      
    });
  }
}