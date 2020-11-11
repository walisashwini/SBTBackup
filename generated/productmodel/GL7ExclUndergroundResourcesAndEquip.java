package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclUndergroundResourcesAndEquip.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclUndergroundResourcesAndEquip extends entity.GL7SublineTypeSchedExcl {
  protected GL7ExclUndergroundResourcesAndEquip()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclUndergroundResourcesAndEquip(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclUndergroundResourcesAndEquip");
  }
  
  public GL7ExclUndergroundResourcesAndEquip(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclUndergroundResourcesAndEquip");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclUndergroundResourcesAndEquipInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclUndergroundResourcesAndEquip>() {
      public productmodel.GL7ExclUndergroundResourcesAndEquip newEmptyInstance() {
        return new productmodel.GL7ExclUndergroundResourcesAndEquip();
      }
      
      
    });
  }
}