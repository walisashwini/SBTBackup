package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtdPollutionLiabExtensionEndt.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LmtdPollutionLiabExtensionEndt extends entity.GL7SublineTypeCond {
  protected GL7LmtdPollutionLiabExtensionEndt()  {
    super((java.lang.Void)null);
  }
  
  public GL7LmtdPollutionLiabExtensionEndt(entity.PolicyPeriod branch)  {
    super(branch, "GL7LmtdPollutionLiabExtensionEndt");
  }
  
  public GL7LmtdPollutionLiabExtensionEndt(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LmtdPollutionLiabExtensionEndt");
  }
  
  public productmodel.DirectGL7AggLimit7Type getGL7AggLimit7Term() {
    return (productmodel.DirectGL7AggLimit7Type)getCovTerm("GL7AggLimit7");
  }
  
  public productmodel.DirectGL7ManualPremium130Type getGL7ManualPremium130Term() {
    return (productmodel.DirectGL7ManualPremium130Type)getCovTerm("GL7ManualPremium130");
  }
  
  public boolean getHasGL7AggLimit7Term() {
    return hasCovTerm("GL7AggLimit7");
  }
  
  public boolean getHasGL7ManualPremium130Term() {
    return hasCovTerm("GL7ManualPremium130");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtdPollutionLiabExtensionEndtInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LmtdPollutionLiabExtensionEndt>() {
      public productmodel.GL7LmtdPollutionLiabExtensionEndt newEmptyInstance() {
        return new productmodel.GL7LmtdPollutionLiabExtensionEndt();
      }
      
      
    });
  }
}