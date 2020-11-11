package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CannabisExclProductWithdrawal.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CannabisExclProductWithdrawal extends entity.GL7SublineTypeExcl {
  protected GL7CannabisExclProductWithdrawal()  {
    super((java.lang.Void)null);
  }
  
  public GL7CannabisExclProductWithdrawal(entity.PolicyPeriod branch)  {
    super(branch, "GL7CannabisExclProductWithdrawal");
  }
  
  public GL7CannabisExclProductWithdrawal(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CannabisExclProductWithdrawal");
  }
  
  public productmodel.DirectGL7ManualPremium292Type getGL7ManualPremium292Term() {
    return (productmodel.DirectGL7ManualPremium292Type)getCovTerm("GL7ManualPremium292");
  }
  
  public boolean getHasGL7ManualPremium292Term() {
    return hasCovTerm("GL7ManualPremium292");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CannabisExclProductWithdrawalInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CannabisExclProductWithdrawal>() {
      public productmodel.GL7CannabisExclProductWithdrawal newEmptyInstance() {
        return new productmodel.GL7CannabisExclProductWithdrawal();
      }
      
      
    });
  }
}