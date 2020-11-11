package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ElectrDataLiabCovForm.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ElectrDataLiabCovForm extends entity.GL7SublineTypeCov {
  protected GL7ElectrDataLiabCovForm()  {
    super((java.lang.Void)null);
  }
  
  public GL7ElectrDataLiabCovForm(entity.PolicyPeriod branch)  {
    super(branch, "GL7ElectrDataLiabCovForm");
  }
  
  public GL7ElectrDataLiabCovForm(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ElectrDataLiabCovForm");
  }
  
  public productmodel.DirectGL7ManualPremium45Type getGL7ManualPremium45Term() {
    return (productmodel.DirectGL7ManualPremium45Type)getCovTerm("GL7ManualPremium45");
  }
  
  public boolean getHasGL7ManualPremium45Term() {
    return hasCovTerm("GL7ManualPremium45");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ElectrDataLiabCovFormInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ElectrDataLiabCovForm>() {
      public productmodel.GL7ElectrDataLiabCovForm newEmptyInstance() {
        return new productmodel.GL7ElectrDataLiabCovForm();
      }
      
      
    });
  }
}