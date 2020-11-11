package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns1 extends entity.GL7SublineTypeSchedCov {
  protected GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns1()  {
    super((java.lang.Void)null);
  }
  
  public GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns1(entity.PolicyPeriod branch)  {
    super(branch, "GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns1");
  }
  
  public GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns1");
  }
  
  public productmodel.DirectGL7ManualPremium388Type getGL7ManualPremium388Term() {
    return (productmodel.DirectGL7ManualPremium388Type)getCovTerm("GL7ManualPremium388");
  }
  
  public boolean getHasGL7ManualPremium388Term() {
    return hasCovTerm("GL7ManualPremium388");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns1>() {
      public productmodel.GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns1 newEmptyInstance() {
        return new productmodel.GL7LmtdExclDesignatedOpsCovByAControlledWrapUpIns1();
      }
      
      
    });
  }
}