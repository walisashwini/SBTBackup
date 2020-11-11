package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ClassificationRailroad.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ClassificationRailroad extends entity.GL7ExposureCov {
  protected GL7ClassificationRailroad()  {
    super((java.lang.Void)null);
  }
  
  public GL7ClassificationRailroad(entity.PolicyPeriod branch)  {
    super(branch, "GL7ClassificationRailroad");
  }
  
  public GL7ClassificationRailroad(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ClassificationRailroad");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ClassificationRailroadInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ClassificationRailroad>() {
      public productmodel.GL7ClassificationRailroad newEmptyInstance() {
        return new productmodel.GL7ClassificationRailroad();
      }
      
      
    });
  }
}