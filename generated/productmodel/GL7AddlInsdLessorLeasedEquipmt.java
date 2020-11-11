package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdLessorLeasedEquipmt.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdLessorLeasedEquipmt extends entity.GL7SublineTypeSchedCov {
  protected GL7AddlInsdLessorLeasedEquipmt()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdLessorLeasedEquipmt(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdLessorLeasedEquipmt");
  }
  
  public GL7AddlInsdLessorLeasedEquipmt(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdLessorLeasedEquipmt");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdLessorLeasedEquipmtInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdLessorLeasedEquipmt>() {
      public productmodel.GL7AddlInsdLessorLeasedEquipmt newEmptyInstance() {
        return new productmodel.GL7AddlInsdLessorLeasedEquipmt();
      }
      
      
    });
  }
}