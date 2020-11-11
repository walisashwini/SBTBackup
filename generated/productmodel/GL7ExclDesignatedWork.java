package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclDesignatedWork.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclDesignatedWork extends entity.GL7SublineTypeSchedExcl {
  protected GL7ExclDesignatedWork()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclDesignatedWork(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclDesignatedWork");
  }
  
  public GL7ExclDesignatedWork(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclDesignatedWork");
  }
  
  public productmodel.DirectGL7ManualPremium61Type getGL7ManualPremium61Term() {
    return (productmodel.DirectGL7ManualPremium61Type)getCovTerm("GL7ManualPremium61");
  }
  
  public boolean getHasGL7ManualPremium61Term() {
    return hasCovTerm("GL7ManualPremium61");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclDesignatedWorkInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclDesignatedWork>() {
      public productmodel.GL7ExclDesignatedWork newEmptyInstance() {
        return new productmodel.GL7ExclDesignatedWork();
      }
      
      
    });
  }
}