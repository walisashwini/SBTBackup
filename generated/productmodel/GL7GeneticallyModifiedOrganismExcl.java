package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7GeneticallyModifiedOrganismExcl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7GeneticallyModifiedOrganismExcl extends entity.GL7SublineTypeExcl {
  protected GL7GeneticallyModifiedOrganismExcl()  {
    super((java.lang.Void)null);
  }
  
  public GL7GeneticallyModifiedOrganismExcl(entity.PolicyPeriod branch)  {
    super(branch, "GL7GeneticallyModifiedOrganismExcl");
  }
  
  public GL7GeneticallyModifiedOrganismExcl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7GeneticallyModifiedOrganismExcl");
  }
  
  public productmodel.DirectGL7ManualPremium370Type getGL7ManualPremium370Term() {
    return (productmodel.DirectGL7ManualPremium370Type)getCovTerm("GL7ManualPremium370");
  }
  
  public boolean getHasGL7ManualPremium370Term() {
    return hasCovTerm("GL7ManualPremium370");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7GeneticallyModifiedOrganismExclInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7GeneticallyModifiedOrganismExcl>() {
      public productmodel.GL7GeneticallyModifiedOrganismExcl newEmptyInstance() {
        return new productmodel.GL7GeneticallyModifiedOrganismExcl();
      }
      
      
    });
  }
}