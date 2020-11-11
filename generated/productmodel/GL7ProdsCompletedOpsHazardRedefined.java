package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ProdsCompletedOpsHazardRedefined.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ProdsCompletedOpsHazardRedefined extends entity.GL7SublineTypeSchedCov {
  protected GL7ProdsCompletedOpsHazardRedefined()  {
    super((java.lang.Void)null);
  }
  
  public GL7ProdsCompletedOpsHazardRedefined(entity.PolicyPeriod branch)  {
    super(branch, "GL7ProdsCompletedOpsHazardRedefined");
  }
  
  public GL7ProdsCompletedOpsHazardRedefined(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ProdsCompletedOpsHazardRedefined");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ProdsCompletedOpsHazardRedefinedInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ProdsCompletedOpsHazardRedefined>() {
      public productmodel.GL7ProdsCompletedOpsHazardRedefined newEmptyInstance() {
        return new productmodel.GL7ProdsCompletedOpsHazardRedefined();
      }
      
      
    });
  }
}