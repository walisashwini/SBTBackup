package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdExecsAdminsTrstesBenefics.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdExecsAdminsTrstesBenefics extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdExecsAdminsTrstesBenefics()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdExecsAdminsTrstesBenefics(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdExecsAdminsTrstesBenefics");
  }
  
  public GL7AddlInsdExecsAdminsTrstesBenefics(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdExecsAdminsTrstesBenefics");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdExecsAdminsTrstesBeneficsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdExecsAdminsTrstesBenefics>() {
      public productmodel.GL7AddlInsdExecsAdminsTrstesBenefics newEmptyInstance() {
        return new productmodel.GL7AddlInsdExecsAdminsTrstesBenefics();
      }
      
      
    });
  }
}