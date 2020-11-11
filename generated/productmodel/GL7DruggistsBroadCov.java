package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7DruggistsBroadCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7DruggistsBroadCov extends entity.GL7SublineTypeCov {
  protected GL7DruggistsBroadCov()  {
    super((java.lang.Void)null);
  }
  
  public GL7DruggistsBroadCov(entity.PolicyPeriod branch)  {
    super(branch, "GL7DruggistsBroadCov");
  }
  
  public GL7DruggistsBroadCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7DruggistsBroadCov");
  }
  
  public productmodel.DirectGL7ManualPremium41Type getGL7ManualPremium41Term() {
    return (productmodel.DirectGL7ManualPremium41Type)getCovTerm("GL7ManualPremium41");
  }
  
  public boolean getHasGL7ManualPremium41Term() {
    return hasCovTerm("GL7ManualPremium41");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7DruggistsBroadCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7DruggistsBroadCov>() {
      public productmodel.GL7DruggistsBroadCov newEmptyInstance() {
        return new productmodel.GL7DruggistsBroadCov();
      }
      
      
    });
  }
}