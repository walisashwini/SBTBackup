package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdMortgageeAssigneeOrRecvr.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdMortgageeAssigneeOrRecvr extends entity.GL7LocationSchedCov {
  protected GL7AddlInsdMortgageeAssigneeOrRecvr()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdMortgageeAssigneeOrRecvr(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdMortgageeAssigneeOrRecvr");
  }
  
  public GL7AddlInsdMortgageeAssigneeOrRecvr(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdMortgageeAssigneeOrRecvr");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdMortgageeAssigneeOrRecvrInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdMortgageeAssigneeOrRecvr>() {
      public productmodel.GL7AddlInsdMortgageeAssigneeOrRecvr newEmptyInstance() {
        return new productmodel.GL7AddlInsdMortgageeAssigneeOrRecvr();
      }
      
      
    });
  }
}