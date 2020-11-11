package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2 extends entity.GL7SublineTypeSchedExcl {
  protected GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2");
  }
  
  public GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2>() {
      public productmodel.GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2 newEmptyInstance() {
        return new productmodel.GL7ExclDesignatedOpsCovByAControlledWrapUpInsProg2();
      }
      
      
    });
  }
}