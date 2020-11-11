package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CannabisExclEDL.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CannabisExclEDL extends entity.GL7SublineTypeExcl {
  protected GL7CannabisExclEDL()  {
    super((java.lang.Void)null);
  }
  
  public GL7CannabisExclEDL(entity.PolicyPeriod branch)  {
    super(branch, "GL7CannabisExclEDL");
  }
  
  public GL7CannabisExclEDL(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CannabisExclEDL");
  }
  
  public productmodel.DirectGL7ManualPremium288Type getGL7ManualPremium288Term() {
    return (productmodel.DirectGL7ManualPremium288Type)getCovTerm("GL7ManualPremium288");
  }
  
  public boolean getHasGL7ManualPremium288Term() {
    return hasCovTerm("GL7ManualPremium288");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CannabisExclEDLInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CannabisExclEDL>() {
      public productmodel.GL7CannabisExclEDL newEmptyInstance() {
        return new productmodel.GL7CannabisExclEDL();
      }
      
      
    });
  }
}