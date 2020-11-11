package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclMovementBuildingsStructures.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclMovementBuildingsStructures extends entity.GL7SublineTypeExcl {
  protected GL7ExclMovementBuildingsStructures()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclMovementBuildingsStructures(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclMovementBuildingsStructures");
  }
  
  public GL7ExclMovementBuildingsStructures(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclMovementBuildingsStructures");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclMovementBuildingsStructuresInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclMovementBuildingsStructures>() {
      public productmodel.GL7ExclMovementBuildingsStructures newEmptyInstance() {
        return new productmodel.GL7ExclMovementBuildingsStructures();
      }
      
      
    });
  }
}