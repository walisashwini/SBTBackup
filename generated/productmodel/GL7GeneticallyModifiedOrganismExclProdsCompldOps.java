package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7GeneticallyModifiedOrganismExclProdsCompldOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7GeneticallyModifiedOrganismExclProdsCompldOps extends entity.GL7SublineTypeExcl {
  protected GL7GeneticallyModifiedOrganismExclProdsCompldOps()  {
    super((java.lang.Void)null);
  }
  
  public GL7GeneticallyModifiedOrganismExclProdsCompldOps(entity.PolicyPeriod branch)  {
    super(branch, "GL7GeneticallyModifiedOrganismExclProdsCompldOps");
  }
  
  public GL7GeneticallyModifiedOrganismExclProdsCompldOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7GeneticallyModifiedOrganismExclProdsCompldOps");
  }
  
  public productmodel.DirectGL7ManualPremium378Type getGL7ManualPremium378Term() {
    return (productmodel.DirectGL7ManualPremium378Type)getCovTerm("GL7ManualPremium378");
  }
  
  public boolean getHasGL7ManualPremium378Term() {
    return hasCovTerm("GL7ManualPremium378");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7GeneticallyModifiedOrganismExclProdsCompldOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7GeneticallyModifiedOrganismExclProdsCompldOps>() {
      public productmodel.GL7GeneticallyModifiedOrganismExclProdsCompldOps newEmptyInstance() {
        return new productmodel.GL7GeneticallyModifiedOrganismExclProdsCompldOps();
      }
      
      
    });
  }
}