package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CovExtensionCovAProductRestorationExpense.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CovExtensionCovAProductRestorationExpense extends entity.GL7SublineTypeCov {
  protected GL7CovExtensionCovAProductRestorationExpense()  {
    super((java.lang.Void)null);
  }
  
  public GL7CovExtensionCovAProductRestorationExpense(entity.PolicyPeriod branch)  {
    super(branch, "GL7CovExtensionCovAProductRestorationExpense");
  }
  
  public GL7CovExtensionCovAProductRestorationExpense(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CovExtensionCovAProductRestorationExpense");
  }
  
  public productmodel.DirectGL7EachWithdrawalLimit2Type getGL7EachWithdrawalLimit2Term() {
    return (productmodel.DirectGL7EachWithdrawalLimit2Type)getCovTerm("GL7EachWithdrawalLimit2");
  }
  
  public productmodel.DirectGL7ManualPremium39Type getGL7ManualPremium39Term() {
    return (productmodel.DirectGL7ManualPremium39Type)getCovTerm("GL7ManualPremium39");
  }
  
  public boolean getHasGL7EachWithdrawalLimit2Term() {
    return hasCovTerm("GL7EachWithdrawalLimit2");
  }
  
  public boolean getHasGL7ManualPremium39Term() {
    return hasCovTerm("GL7ManualPremium39");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CovExtensionCovAProductRestorationExpenseInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CovExtensionCovAProductRestorationExpense>() {
      public productmodel.GL7CovExtensionCovAProductRestorationExpense newEmptyInstance() {
        return new productmodel.GL7CovExtensionCovAProductRestorationExpense();
      }
      
      
    });
  }
}