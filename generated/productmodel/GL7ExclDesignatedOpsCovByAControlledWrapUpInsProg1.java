package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg1 extends entity.GL7SublineTypeSchedExcl {
  protected GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg1()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg1(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg1");
  }
  
  public GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg1");
  }
  
  public productmodel.DirectGL7ManualPremium332Type getGL7ManualPremium332Term() {
    return (productmodel.DirectGL7ManualPremium332Type)getCovTerm("GL7ManualPremium332");
  }
  
  public boolean getHasGL7ManualPremium332Term() {
    return hasCovTerm("GL7ManualPremium332");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg1>() {
      public productmodel.GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg1 newEmptyInstance() {
        return new productmodel.GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg1();
      }
      
      
    });
  }
}