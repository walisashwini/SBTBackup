package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7DesignatedLocsAggLimitProdsCompldOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7DesignatedLocsAggLimitProdsCompldOps extends entity.GL7LocationSchedCov {
  protected GL7DesignatedLocsAggLimitProdsCompldOps()  {
    super((java.lang.Void)null);
  }
  
  public GL7DesignatedLocsAggLimitProdsCompldOps(entity.PolicyPeriod branch)  {
    super(branch, "GL7DesignatedLocsAggLimitProdsCompldOps");
  }
  
  public GL7DesignatedLocsAggLimitProdsCompldOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7DesignatedLocsAggLimitProdsCompldOps");
  }
  
  public productmodel.DirectGL7ManualPremium252Type getGL7ManualPremium252Term() {
    return (productmodel.DirectGL7ManualPremium252Type)getCovTerm("GL7ManualPremium252");
  }
  
  public boolean getHasGL7ManualPremium252Term() {
    return hasCovTerm("GL7ManualPremium252");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7DesignatedLocsAggLimitProdsCompldOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7DesignatedLocsAggLimitProdsCompldOps>() {
      public productmodel.GL7DesignatedLocsAggLimitProdsCompldOps newEmptyInstance() {
        return new productmodel.GL7DesignatedLocsAggLimitProdsCompldOps();
      }
      
      
    });
  }
}