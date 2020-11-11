package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CannabisExclWithHempException.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CannabisExclWithHempException extends entity.GL7SublineTypeExcl {
  protected GL7CannabisExclWithHempException()  {
    super((java.lang.Void)null);
  }
  
  public GL7CannabisExclWithHempException(entity.PolicyPeriod branch)  {
    super(branch, "GL7CannabisExclWithHempException");
  }
  
  public GL7CannabisExclWithHempException(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CannabisExclWithHempException");
  }
  
  public productmodel.DirectGL7ManualPremium299Type getGL7ManualPremium299Term() {
    return (productmodel.DirectGL7ManualPremium299Type)getCovTerm("GL7ManualPremium299");
  }
  
  public boolean getHasGL7ManualPremium299Term() {
    return hasCovTerm("GL7ManualPremium299");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CannabisExclWithHempExceptionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CannabisExclWithHempException>() {
      public productmodel.GL7CannabisExclWithHempException newEmptyInstance() {
        return new productmodel.GL7CannabisExclWithHempException();
      }
      
      
    });
  }
}