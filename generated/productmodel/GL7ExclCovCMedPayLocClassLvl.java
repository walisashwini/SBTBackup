package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclCovCMedPayLocClassLvl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclCovCMedPayLocClassLvl extends entity.GL7LocationSchedExcl {
  protected GL7ExclCovCMedPayLocClassLvl()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclCovCMedPayLocClassLvl(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclCovCMedPayLocClassLvl");
  }
  
  public GL7ExclCovCMedPayLocClassLvl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclCovCMedPayLocClassLvl");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclCovCMedPayLocClassLvlInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclCovCMedPayLocClassLvl>() {
      public productmodel.GL7ExclCovCMedPayLocClassLvl newEmptyInstance() {
        return new productmodel.GL7ExclCovCMedPayLocClassLvl();
      }
      
      
    });
  }
}