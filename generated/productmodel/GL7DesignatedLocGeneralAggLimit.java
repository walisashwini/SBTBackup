package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7DesignatedLocGeneralAggLimit.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7DesignatedLocGeneralAggLimit extends entity.GL7LocationCov {
  protected GL7DesignatedLocGeneralAggLimit()  {
    super((java.lang.Void)null);
  }
  
  public GL7DesignatedLocGeneralAggLimit(entity.PolicyPeriod branch)  {
    super(branch, "GL7DesignatedLocGeneralAggLimit");
  }
  
  public GL7DesignatedLocGeneralAggLimit(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7DesignatedLocGeneralAggLimit");
  }
  
  public productmodel.GenericGL7DesignatedLocation1Type getGL7DesignatedLocation1Term() {
    return (productmodel.GenericGL7DesignatedLocation1Type)getCovTerm("GL7DesignatedLocation1");
  }
  
  public productmodel.DirectGL7ManualPremium179Type getGL7ManualPremium179Term() {
    return (productmodel.DirectGL7ManualPremium179Type)getCovTerm("GL7ManualPremium179");
  }
  
  public boolean getHasGL7DesignatedLocation1Term() {
    return hasCovTerm("GL7DesignatedLocation1");
  }
  
  public boolean getHasGL7ManualPremium179Term() {
    return hasCovTerm("GL7ManualPremium179");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7DesignatedLocGeneralAggLimitInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7DesignatedLocGeneralAggLimit>() {
      public productmodel.GL7DesignatedLocGeneralAggLimit newEmptyInstance() {
        return new productmodel.GL7DesignatedLocGeneralAggLimit();
      }
      
      
    });
  }
}