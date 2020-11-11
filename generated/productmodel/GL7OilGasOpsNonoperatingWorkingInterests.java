package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7OilGasOpsNonoperatingWorkingInterests.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7OilGasOpsNonoperatingWorkingInterests extends entity.GL7SublineTypeCov {
  protected GL7OilGasOpsNonoperatingWorkingInterests()  {
    super((java.lang.Void)null);
  }
  
  public GL7OilGasOpsNonoperatingWorkingInterests(entity.PolicyPeriod branch)  {
    super(branch, "GL7OilGasOpsNonoperatingWorkingInterests");
  }
  
  public GL7OilGasOpsNonoperatingWorkingInterests(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7OilGasOpsNonoperatingWorkingInterests");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7OilGasOpsNonoperatingWorkingInterestsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7OilGasOpsNonoperatingWorkingInterests>() {
      public productmodel.GL7OilGasOpsNonoperatingWorkingInterests newEmptyInstance() {
        return new productmodel.GL7OilGasOpsNonoperatingWorkingInterests();
      }
      
      
    });
  }
}