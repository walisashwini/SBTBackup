package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclAllHazardsInConnectionWithDesignatedPrem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclAllHazardsInConnectionWithDesignatedPrem extends entity.GL7LocationSchedExcl {
  protected GL7ExclAllHazardsInConnectionWithDesignatedPrem()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclAllHazardsInConnectionWithDesignatedPrem(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclAllHazardsInConnectionWithDesignatedPrem");
  }
  
  public GL7ExclAllHazardsInConnectionWithDesignatedPrem(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclAllHazardsInConnectionWithDesignatedPrem");
  }
  
  public productmodel.GenericGL7Description7Type getGL7Description7Term() {
    return (productmodel.GenericGL7Description7Type)getCovTerm("GL7Description7");
  }
  
  public productmodel.DirectGL7ManualPremium181Type getGL7ManualPremium181Term() {
    return (productmodel.DirectGL7ManualPremium181Type)getCovTerm("GL7ManualPremium181");
  }
  
  public boolean getHasGL7Description7Term() {
    return hasCovTerm("GL7Description7");
  }
  
  public boolean getHasGL7ManualPremium181Term() {
    return hasCovTerm("GL7ManualPremium181");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclAllHazardsInConnectionWithDesignatedPremInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclAllHazardsInConnectionWithDesignatedPrem>() {
      public productmodel.GL7ExclAllHazardsInConnectionWithDesignatedPrem newEmptyInstance() {
        return new productmodel.GL7ExclAllHazardsInConnectionWithDesignatedPrem();
      }
      
      
    });
  }
}