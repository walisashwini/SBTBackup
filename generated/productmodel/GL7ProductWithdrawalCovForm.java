package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ProductWithdrawalCovForm.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ProductWithdrawalCovForm extends entity.GL7SublineTypeCov {
  protected GL7ProductWithdrawalCovForm()  {
    super((java.lang.Void)null);
  }
  
  public GL7ProductWithdrawalCovForm(entity.PolicyPeriod branch)  {
    super(branch, "GL7ProductWithdrawalCovForm");
  }
  
  public GL7ProductWithdrawalCovForm(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ProductWithdrawalCovForm");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ProductWithdrawalCovFormInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ProductWithdrawalCovForm>() {
      public productmodel.GL7ProductWithdrawalCovForm newEmptyInstance() {
        return new productmodel.GL7ProductWithdrawalCovForm();
      }
      
      
    });
  }
}