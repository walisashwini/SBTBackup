package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CannabisExclWithHempExceptionOwnersContractors.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CannabisExclWithHempExceptionOwnersContractors extends entity.GL7SublineTypeExcl {
  protected GL7CannabisExclWithHempExceptionOwnersContractors()  {
    super((java.lang.Void)null);
  }
  
  public GL7CannabisExclWithHempExceptionOwnersContractors(entity.PolicyPeriod branch)  {
    super(branch, "GL7CannabisExclWithHempExceptionOwnersContractors");
  }
  
  public GL7CannabisExclWithHempExceptionOwnersContractors(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CannabisExclWithHempExceptionOwnersContractors");
  }
  
  public productmodel.DirectGL7ManualPremium308Type getGL7ManualPremium308Term() {
    return (productmodel.DirectGL7ManualPremium308Type)getCovTerm("GL7ManualPremium308");
  }
  
  public boolean getHasGL7ManualPremium308Term() {
    return hasCovTerm("GL7ManualPremium308");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CannabisExclWithHempExceptionOwnersContractorsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CannabisExclWithHempExceptionOwnersContractors>() {
      public productmodel.GL7CannabisExclWithHempExceptionOwnersContractors newEmptyInstance() {
        return new productmodel.GL7CannabisExclWithHempExceptionOwnersContractors();
      }
      
      
    });
  }
}