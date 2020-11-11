package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7Druggists.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7Druggists extends entity.GL7SublineTypeCov {
  protected GL7Druggists()  {
    super((java.lang.Void)null);
  }
  
  public GL7Druggists(entity.PolicyPeriod branch)  {
    super(branch, "GL7Druggists");
  }
  
  public GL7Druggists(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7Druggists");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7DruggistsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7Druggists>() {
      public productmodel.GL7Druggists newEmptyInstance() {
        return new productmodel.GL7Druggists();
      }
      
      
    });
  }
}