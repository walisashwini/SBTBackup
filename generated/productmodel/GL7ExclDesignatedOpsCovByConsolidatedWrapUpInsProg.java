package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclDesignatedOpsCovByConsolidatedWrapUpInsProg.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclDesignatedOpsCovByConsolidatedWrapUpInsProg extends entity.GL7SublineTypeSchedExcl {
  protected GL7ExclDesignatedOpsCovByConsolidatedWrapUpInsProg()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclDesignatedOpsCovByConsolidatedWrapUpInsProg(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclDesignatedOpsCovByConsolidatedWrapUpInsProg");
  }
  
  public GL7ExclDesignatedOpsCovByConsolidatedWrapUpInsProg(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclDesignatedOpsCovByConsolidatedWrapUpInsProg");
  }
  
  public productmodel.DirectGL7ManualPremium58Type getGL7ManualPremium58Term() {
    return (productmodel.DirectGL7ManualPremium58Type)getCovTerm("GL7ManualPremium58");
  }
  
  public boolean getHasGL7ManualPremium58Term() {
    return hasCovTerm("GL7ManualPremium58");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclDesignatedOpsCovByConsolidatedWrapUpInsProgInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclDesignatedOpsCovByConsolidatedWrapUpInsProg>() {
      public productmodel.GL7ExclDesignatedOpsCovByConsolidatedWrapUpInsProg newEmptyInstance() {
        return new productmodel.GL7ExclDesignatedOpsCovByConsolidatedWrapUpInsProg();
      }
      
      
    });
  }
}