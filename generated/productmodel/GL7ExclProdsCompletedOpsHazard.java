package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclProdsCompletedOpsHazard.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclProdsCompletedOpsHazard extends entity.GL7SublineTypeExcl {
  protected GL7ExclProdsCompletedOpsHazard()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclProdsCompletedOpsHazard(entity.PolicyPeriod branch)  {
    super(branch, "z0tj63admkslecp1112qo7m96ja");
  }
  
  public GL7ExclProdsCompletedOpsHazard(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z0tj63admkslecp1112qo7m96ja");
  }
  
  public productmodel.DirectGL7ManualPremium75Type getGL7ManualPremium75Term() {
    return (productmodel.DirectGL7ManualPremium75Type)getCovTerm("zrhjurhfj1evceoarroktsnh718");
  }
  
  public boolean getHasGL7ManualPremium75Term() {
    return hasCovTerm("zrhjurhfj1evceoarroktsnh718");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclProdsCompletedOpsHazardInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclProdsCompletedOpsHazard>() {
      public productmodel.GL7ExclProdsCompletedOpsHazard newEmptyInstance() {
        return new productmodel.GL7ExclProdsCompletedOpsHazard();
      }
      
      
    });
  }
}