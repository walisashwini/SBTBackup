package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7EarthMovementExclForDesignatedOpsOrProjects.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7EarthMovementExclForDesignatedOpsOrProjects extends entity.GL7SublineTypeSchedExcl {
  protected GL7EarthMovementExclForDesignatedOpsOrProjects()  {
    super((java.lang.Void)null);
  }
  
  public GL7EarthMovementExclForDesignatedOpsOrProjects(entity.PolicyPeriod branch)  {
    super(branch, "GL7EarthMovementExclForDesignatedOpsOrProjects");
  }
  
  public GL7EarthMovementExclForDesignatedOpsOrProjects(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7EarthMovementExclForDesignatedOpsOrProjects");
  }
  
  public productmodel.DirectGL7ManualPremium321Type getGL7ManualPremium321Term() {
    return (productmodel.DirectGL7ManualPremium321Type)getCovTerm("GL7ManualPremium321");
  }
  
  public boolean getHasGL7ManualPremium321Term() {
    return hasCovTerm("GL7ManualPremium321");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7EarthMovementExclForDesignatedOpsOrProjectsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7EarthMovementExclForDesignatedOpsOrProjects>() {
      public productmodel.GL7EarthMovementExclForDesignatedOpsOrProjects newEmptyInstance() {
        return new productmodel.GL7EarthMovementExclForDesignatedOpsOrProjects();
      }
      
      
    });
  }
}