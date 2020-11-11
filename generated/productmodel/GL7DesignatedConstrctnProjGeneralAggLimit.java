package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7DesignatedConstrctnProjGeneralAggLimit.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7DesignatedConstrctnProjGeneralAggLimit extends entity.GL7SublineTypeSchedCov {
  protected GL7DesignatedConstrctnProjGeneralAggLimit()  {
    super((java.lang.Void)null);
  }
  
  public GL7DesignatedConstrctnProjGeneralAggLimit(entity.PolicyPeriod branch)  {
    super(branch, "GL7DesignatedConstrctnProjGeneralAggLimit");
  }
  
  public GL7DesignatedConstrctnProjGeneralAggLimit(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7DesignatedConstrctnProjGeneralAggLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7DesignatedConstrctnProjGeneralAggLimitInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7DesignatedConstrctnProjGeneralAggLimit>() {
      public productmodel.GL7DesignatedConstrctnProjGeneralAggLimit newEmptyInstance() {
        return new productmodel.GL7DesignatedConstrctnProjGeneralAggLimit();
      }
      
      
    });
  }
}