package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CannabisExclWithHempExceptionProductWithdrawal.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CannabisExclWithHempExceptionProductWithdrawal extends entity.GL7SublineTypeExcl {
  protected GL7CannabisExclWithHempExceptionProductWithdrawal()  {
    super((java.lang.Void)null);
  }
  
  public GL7CannabisExclWithHempExceptionProductWithdrawal(entity.PolicyPeriod branch)  {
    super(branch, "GL7CannabisExclWithHempExceptionProductWithdrawal");
  }
  
  public GL7CannabisExclWithHempExceptionProductWithdrawal(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CannabisExclWithHempExceptionProductWithdrawal");
  }
  
  public productmodel.DirectGL7ManualPremium309Type getGL7ManualPremium309Term() {
    return (productmodel.DirectGL7ManualPremium309Type)getCovTerm("GL7ManualPremium309");
  }
  
  public boolean getHasGL7ManualPremium309Term() {
    return hasCovTerm("GL7ManualPremium309");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CannabisExclWithHempExceptionProductWithdrawalInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CannabisExclWithHempExceptionProductWithdrawal>() {
      public productmodel.GL7CannabisExclWithHempExceptionProductWithdrawal newEmptyInstance() {
        return new productmodel.GL7CannabisExclWithHempExceptionProductWithdrawal();
      }
      
      
    });
  }
}