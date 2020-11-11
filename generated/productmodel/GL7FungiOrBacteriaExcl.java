package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7FungiOrBacteriaExcl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7FungiOrBacteriaExcl extends entity.GL7SublineTypeExcl {
  protected GL7FungiOrBacteriaExcl()  {
    super((java.lang.Void)null);
  }
  
  public GL7FungiOrBacteriaExcl(entity.PolicyPeriod branch)  {
    super(branch, "GL7FungiOrBacteriaExcl");
  }
  
  public GL7FungiOrBacteriaExcl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7FungiOrBacteriaExcl");
  }
  
  public productmodel.DirectGL7ManualPremium112Type getGL7ManualPremium112Term() {
    return (productmodel.DirectGL7ManualPremium112Type)getCovTerm("GL7ManualPremium112");
  }
  
  public boolean getHasGL7ManualPremium112Term() {
    return hasCovTerm("GL7ManualPremium112");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7FungiOrBacteriaExclInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7FungiOrBacteriaExcl>() {
      public productmodel.GL7FungiOrBacteriaExcl newEmptyInstance() {
        return new productmodel.GL7FungiOrBacteriaExcl();
      }
      
      
    });
  }
}