package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7GeneticallyModifiedOrganismExclForDesignatedOp1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7GeneticallyModifiedOrganismExclForDesignatedOp1 extends entity.GL7SublineTypeSchedExcl {
  protected GL7GeneticallyModifiedOrganismExclForDesignatedOp1()  {
    super((java.lang.Void)null);
  }
  
  public GL7GeneticallyModifiedOrganismExclForDesignatedOp1(entity.PolicyPeriod branch)  {
    super(branch, "GL7GeneticallyModifiedOrganismExclForDesignatedOp1");
  }
  
  public GL7GeneticallyModifiedOrganismExclForDesignatedOp1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7GeneticallyModifiedOrganismExclForDesignatedOp1");
  }
  
  public productmodel.DirectGL7ManualPremium376Type getGL7ManualPremium376Term() {
    return (productmodel.DirectGL7ManualPremium376Type)getCovTerm("GL7ManualPremium376");
  }
  
  public boolean getHasGL7ManualPremium376Term() {
    return hasCovTerm("GL7ManualPremium376");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7GeneticallyModifiedOrganismExclForDesignatedOp1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7GeneticallyModifiedOrganismExclForDesignatedOp1>() {
      public productmodel.GL7GeneticallyModifiedOrganismExclForDesignatedOp1 newEmptyInstance() {
        return new productmodel.GL7GeneticallyModifiedOrganismExclForDesignatedOp1();
      }
      
      
    });
  }
}