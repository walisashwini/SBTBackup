package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclDesignatedOpsCovByAControlledWrapUpInsProgr.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclDesignatedOpsCovByAControlledWrapUpInsProgr extends entity.GL7SublineTypeSchedExcl {
  protected GL7ExclDesignatedOpsCovByAControlledWrapUpInsProgr()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclDesignatedOpsCovByAControlledWrapUpInsProgr(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclDesignatedOpsCovByAControlledWrapUpInsProgr");
  }
  
  public GL7ExclDesignatedOpsCovByAControlledWrapUpInsProgr(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclDesignatedOpsCovByAControlledWrapUpInsProgr");
  }
  
  public productmodel.DirectGL7ManualPremium330Type getGL7ManualPremium330Term() {
    return (productmodel.DirectGL7ManualPremium330Type)getCovTerm("GL7ManualPremium330");
  }
  
  public boolean getHasGL7ManualPremium330Term() {
    return hasCovTerm("GL7ManualPremium330");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclDesignatedOpsCovByAControlledWrapUpInsProgrInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclDesignatedOpsCovByAControlledWrapUpInsProgr>() {
      public productmodel.GL7ExclDesignatedOpsCovByAControlledWrapUpInsProgr newEmptyInstance() {
        return new productmodel.GL7ExclDesignatedOpsCovByAControlledWrapUpInsProgr();
      }
      
      
    });
  }
}