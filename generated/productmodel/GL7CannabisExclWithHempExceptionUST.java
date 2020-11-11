package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CannabisExclWithHempExceptionUST.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CannabisExclWithHempExceptionUST extends entity.GL7SublineTypeExcl {
  protected GL7CannabisExclWithHempExceptionUST()  {
    super((java.lang.Void)null);
  }
  
  public GL7CannabisExclWithHempExceptionUST(entity.PolicyPeriod branch)  {
    super(branch, "GL7CannabisExclWithHempExceptionUST");
  }
  
  public GL7CannabisExclWithHempExceptionUST(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CannabisExclWithHempExceptionUST");
  }
  
  public productmodel.DirectGL7ManualPremium313Type getGL7ManualPremium313Term() {
    return (productmodel.DirectGL7ManualPremium313Type)getCovTerm("GL7ManualPremium313");
  }
  
  public boolean getHasGL7ManualPremium313Term() {
    return hasCovTerm("GL7ManualPremium313");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CannabisExclWithHempExceptionUSTInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CannabisExclWithHempExceptionUST>() {
      public productmodel.GL7CannabisExclWithHempExceptionUST newEmptyInstance() {
        return new productmodel.GL7CannabisExclWithHempExceptionUST();
      }
      
      
    });
  }
}