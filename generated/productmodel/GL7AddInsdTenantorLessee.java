package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddInsdTenantorLessee.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddInsdTenantorLessee extends entity.GL7SublineTypeSchedCov {
  protected GL7AddInsdTenantorLessee()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddInsdTenantorLessee(entity.PolicyPeriod branch)  {
    super(branch, "zn8gm2rukefo3cjo3huj72g3ch8");
  }
  
  public GL7AddInsdTenantorLessee(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zn8gm2rukefo3cjo3huj72g3ch8");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddInsdTenantorLesseeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddInsdTenantorLessee>() {
      public productmodel.GL7AddInsdTenantorLessee newEmptyInstance() {
        return new productmodel.GL7AddInsdTenantorLessee();
      }
      
      
    });
  }
}