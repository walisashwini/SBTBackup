package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns extends entity.GL7SublineTypeSchedCov {
  protected GL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns()  {
    super((java.lang.Void)null);
  }
  
  public GL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns(entity.PolicyPeriod branch)  {
    super(branch, "GL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns");
  }
  
  public GL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns");
  }
  
  public productmodel.DirectGL7ManualPremium700Type getGL7ManualPremium700Term() {
    return (productmodel.DirectGL7ManualPremium700Type)getCovTerm("GL7ManualPremium700");
  }
  
  public boolean getHasGL7ManualPremium700Term() {
    return hasCovTerm("GL7ManualPremium700");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1nsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns>() {
      public productmodel.GL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns newEmptyInstance() {
        return new productmodel.GL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns();
      }
      
      
    });
  }
}