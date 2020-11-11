package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ChangesInGL7FormsForCommercialPackagePolicies.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ChangesInGL7FormsForCommercialPackagePolicies extends entity.GL7SublineTypeCond {
  protected GL7ChangesInGL7FormsForCommercialPackagePolicies()  {
    super((java.lang.Void)null);
  }
  
  public GL7ChangesInGL7FormsForCommercialPackagePolicies(entity.PolicyPeriod branch)  {
    super(branch, "GL7ChangesInGL7FormsForCommercialPackagePolicies");
  }
  
  public GL7ChangesInGL7FormsForCommercialPackagePolicies(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ChangesInGL7FormsForCommercialPackagePolicies");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ChangesInGL7FormsForCommercialPackagePoliciesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ChangesInGL7FormsForCommercialPackagePolicies>() {
      public productmodel.GL7ChangesInGL7FormsForCommercialPackagePolicies newEmptyInstance() {
        return new productmodel.GL7ChangesInGL7FormsForCommercialPackagePolicies();
      }
      
      
    });
  }
}