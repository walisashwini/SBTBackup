package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CannabisExclWithHempExceptionEDL.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CannabisExclWithHempExceptionEDL extends entity.GL7SublineTypeExcl {
  protected GL7CannabisExclWithHempExceptionEDL()  {
    super((java.lang.Void)null);
  }
  
  public GL7CannabisExclWithHempExceptionEDL(entity.PolicyPeriod branch)  {
    super(branch, "GL7CannabisExclWithHempExceptionEDL");
  }
  
  public GL7CannabisExclWithHempExceptionEDL(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CannabisExclWithHempExceptionEDL");
  }
  
  public productmodel.DirectGL7ManualPremium302Type getGL7ManualPremium302Term() {
    return (productmodel.DirectGL7ManualPremium302Type)getCovTerm("GL7ManualPremium302");
  }
  
  public boolean getHasGL7ManualPremium302Term() {
    return hasCovTerm("GL7ManualPremium302");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CannabisExclWithHempExceptionEDLInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CannabisExclWithHempExceptionEDL>() {
      public productmodel.GL7CannabisExclWithHempExceptionEDL newEmptyInstance() {
        return new productmodel.GL7CannabisExclWithHempExceptionEDL();
      }
      
      
    });
  }
}