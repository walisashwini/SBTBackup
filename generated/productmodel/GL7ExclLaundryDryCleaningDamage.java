package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclLaundryDryCleaningDamage.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclLaundryDryCleaningDamage extends entity.GL7SublineTypeExcl {
  protected GL7ExclLaundryDryCleaningDamage()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclLaundryDryCleaningDamage(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclLaundryDryCleaningDamage");
  }
  
  public GL7ExclLaundryDryCleaningDamage(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclLaundryDryCleaningDamage");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclLaundryDryCleaningDamageInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclLaundryDryCleaningDamage>() {
      public productmodel.GL7ExclLaundryDryCleaningDamage newEmptyInstance() {
        return new productmodel.GL7ExclLaundryDryCleaningDamage();
      }
      
      
    });
  }
}