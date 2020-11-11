package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7RealEstatePropertyManaged.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7RealEstatePropertyManaged extends entity.GL7SublineTypeCov {
  protected GL7RealEstatePropertyManaged()  {
    super((java.lang.Void)null);
  }
  
  public GL7RealEstatePropertyManaged(entity.PolicyPeriod branch)  {
    super(branch, "GL7RealEstatePropertyManaged");
  }
  
  public GL7RealEstatePropertyManaged(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7RealEstatePropertyManaged");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7RealEstatePropertyManagedInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7RealEstatePropertyManaged>() {
      public productmodel.GL7RealEstatePropertyManaged newEmptyInstance() {
        return new productmodel.GL7RealEstatePropertyManaged();
      }
      
      
    });
  }
}