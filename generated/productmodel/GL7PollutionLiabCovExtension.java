package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7PollutionLiabCovExtension.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7PollutionLiabCovExtension extends entity.GL7SublineTypeCov {
  protected GL7PollutionLiabCovExtension()  {
    super((java.lang.Void)null);
  }
  
  public GL7PollutionLiabCovExtension(entity.PolicyPeriod branch)  {
    super(branch, "GL7PollutionLiabCovExtension");
  }
  
  public GL7PollutionLiabCovExtension(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7PollutionLiabCovExtension");
  }
  
  public productmodel.DirectGL7ManualPremium142Type getGL7ManualPremium142Term() {
    return (productmodel.DirectGL7ManualPremium142Type)getCovTerm("GL7ManualPremium142");
  }
  
  public boolean getHasGL7ManualPremium142Term() {
    return hasCovTerm("GL7ManualPremium142");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7PollutionLiabCovExtensionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7PollutionLiabCovExtension>() {
      public productmodel.GL7PollutionLiabCovExtension newEmptyInstance() {
        return new productmodel.GL7PollutionLiabCovExtension();
      }
      
      
    });
  }
}