package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclPropertyEntrusted.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclPropertyEntrusted extends entity.GL7SublineTypeSchedExcl {
  protected GL7ExclPropertyEntrusted()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclPropertyEntrusted(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclPropertyEntrusted");
  }
  
  public GL7ExclPropertyEntrusted(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclPropertyEntrusted");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclPropertyEntrustedInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclPropertyEntrusted>() {
      public productmodel.GL7ExclPropertyEntrusted newEmptyInstance() {
        return new productmodel.GL7ExclPropertyEntrusted();
      }
      
      
    });
  }
}