package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdDesigntdPersonOrg.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdDesigntdPersonOrg extends entity.GL7SublineTypeSchedCov {
  protected GL7AddlInsdDesigntdPersonOrg()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdDesigntdPersonOrg(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdDesigntdPersonOrg");
  }
  
  public GL7AddlInsdDesigntdPersonOrg(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdDesigntdPersonOrg");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdDesigntdPersonOrgInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdDesigntdPersonOrg>() {
      public productmodel.GL7AddlInsdDesigntdPersonOrg newEmptyInstance() {
        return new productmodel.GL7AddlInsdDesigntdPersonOrg();
      }
      
      
    });
  }
}