package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdTownhouseAssocs.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdTownhouseAssocs extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdTownhouseAssocs()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdTownhouseAssocs(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdTownhouseAssocs");
  }
  
  public GL7AddlInsdTownhouseAssocs(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdTownhouseAssocs");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdTownhouseAssocsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdTownhouseAssocs>() {
      public productmodel.GL7AddlInsdTownhouseAssocs newEmptyInstance() {
        return new productmodel.GL7AddlInsdTownhouseAssocs();
      }
      
      
    });
  }
}