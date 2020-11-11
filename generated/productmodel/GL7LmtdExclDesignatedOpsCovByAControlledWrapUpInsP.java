package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP extends entity.GL7SublineTypeSchedCov {
  protected GL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP()  {
    super((java.lang.Void)null);
  }
  
  public GL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP(entity.PolicyPeriod branch)  {
    super(branch, "GL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP");
  }
  
  public GL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP");
  }
  
  public productmodel.DirectGL7ManualPremium392Type getGL7ManualPremium392Term() {
    return (productmodel.DirectGL7ManualPremium392Type)getCovTerm("GL7ManualPremium392");
  }
  
  public boolean getHasGL7ManualPremium392Term() {
    return hasCovTerm("GL7ManualPremium392");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsPInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP>() {
      public productmodel.GL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP newEmptyInstance() {
        return new productmodel.GL7LmtdExclDesignatedOpsCovByAControlledWrapUpInsP();
      }
      
      
    });
  }
}