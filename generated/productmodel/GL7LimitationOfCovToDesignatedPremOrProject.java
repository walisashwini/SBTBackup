package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LimitationOfCovToDesignatedPremOrProject.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LimitationOfCovToDesignatedPremOrProject extends entity.GL7SublineTypeSchedCond {
  protected GL7LimitationOfCovToDesignatedPremOrProject()  {
    super((java.lang.Void)null);
  }
  
  public GL7LimitationOfCovToDesignatedPremOrProject(entity.PolicyPeriod branch)  {
    super(branch, "GL7LimitationOfCovToDesignatedPremOrProject");
  }
  
  public GL7LimitationOfCovToDesignatedPremOrProject(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LimitationOfCovToDesignatedPremOrProject");
  }
  
  public productmodel.DirectGL7ManualPremium118Type getGL7ManualPremium118Term() {
    return (productmodel.DirectGL7ManualPremium118Type)getCovTerm("GL7ManualPremium118");
  }
  
  public boolean getHasGL7ManualPremium118Term() {
    return hasCovTerm("GL7ManualPremium118");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LimitationOfCovToDesignatedPremOrProjectInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LimitationOfCovToDesignatedPremOrProject>() {
      public productmodel.GL7LimitationOfCovToDesignatedPremOrProject newEmptyInstance() {
        return new productmodel.GL7LimitationOfCovToDesignatedPremOrProject();
      }
      
      
    });
  }
}