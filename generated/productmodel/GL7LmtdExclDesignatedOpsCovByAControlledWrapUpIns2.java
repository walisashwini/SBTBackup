package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2 extends entity.GL7SublineTypeSchedCov {
  protected GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2()  {
    super((java.lang.Void)null);
  }
  
  public GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2(entity.PolicyPeriod branch)  {
    super(branch, "GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2");
  }
  
  public GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2>() {
      public productmodel.GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2 newEmptyInstance() {
        return new productmodel.GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns2();
      }
      
      
    });
  }
}