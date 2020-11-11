package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7GeneticallyModifiedOrganismExclForDesignatedOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7GeneticallyModifiedOrganismExclForDesignatedOps extends entity.GL7SublineTypeSchedExcl {
  protected GL7GeneticallyModifiedOrganismExclForDesignatedOps()  {
    super((java.lang.Void)null);
  }
  
  public GL7GeneticallyModifiedOrganismExclForDesignatedOps(entity.PolicyPeriod branch)  {
    super(branch, "GL7GeneticallyModifiedOrganismExclForDesignatedOps");
  }
  
  public GL7GeneticallyModifiedOrganismExclForDesignatedOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7GeneticallyModifiedOrganismExclForDesignatedOps");
  }
  
  public productmodel.DirectGL7ManualPremium382Type getGL7ManualPremium382Term() {
    return (productmodel.DirectGL7ManualPremium382Type)getCovTerm("GL7ManualPremium382");
  }
  
  public boolean getHasGL7ManualPremium382Term() {
    return hasCovTerm("GL7ManualPremium382");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7GeneticallyModifiedOrganismExclForDesignatedOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7GeneticallyModifiedOrganismExclForDesignatedOps>() {
      public productmodel.GL7GeneticallyModifiedOrganismExclForDesignatedOps newEmptyInstance() {
        return new productmodel.GL7GeneticallyModifiedOrganismExclForDesignatedOps();
      }
      
      
    });
  }
}