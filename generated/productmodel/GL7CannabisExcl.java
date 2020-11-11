package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CannabisExcl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CannabisExcl extends entity.GL7SublineTypeExcl {
  protected GL7CannabisExcl()  {
    super((java.lang.Void)null);
  }
  
  public GL7CannabisExcl(entity.PolicyPeriod branch)  {
    super(branch, "GL7CannabisExcl");
  }
  
  public GL7CannabisExcl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CannabisExcl");
  }
  
  public productmodel.DirectGL7ManualPremium285Type getGL7ManualPremium285Term() {
    return (productmodel.DirectGL7ManualPremium285Type)getCovTerm("GL7ManualPremium285");
  }
  
  public boolean getHasGL7ManualPremium285Term() {
    return hasCovTerm("GL7ManualPremium285");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CannabisExclInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CannabisExcl>() {
      public productmodel.GL7CannabisExcl newEmptyInstance() {
        return new productmodel.GL7CannabisExcl();
      }
      
      
    });
  }
}