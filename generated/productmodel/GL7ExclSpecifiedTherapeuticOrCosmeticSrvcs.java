package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclSpecifiedTherapeuticOrCosmeticSrvcs.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclSpecifiedTherapeuticOrCosmeticSrvcs extends entity.GL7SublineTypeSchedExcl {
  protected GL7ExclSpecifiedTherapeuticOrCosmeticSrvcs()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclSpecifiedTherapeuticOrCosmeticSrvcs(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclSpecifiedTherapeuticOrCosmeticSrvcs");
  }
  
  public GL7ExclSpecifiedTherapeuticOrCosmeticSrvcs(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclSpecifiedTherapeuticOrCosmeticSrvcs");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclSpecifiedTherapeuticOrCosmeticSrvcsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclSpecifiedTherapeuticOrCosmeticSrvcs>() {
      public productmodel.GL7ExclSpecifiedTherapeuticOrCosmeticSrvcs newEmptyInstance() {
        return new productmodel.GL7ExclSpecifiedTherapeuticOrCosmeticSrvcs();
      }
      
      
    });
  }
}