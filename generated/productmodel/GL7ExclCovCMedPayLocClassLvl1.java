package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclCovCMedPayLocClassLvl1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclCovCMedPayLocClassLvl1 extends entity.GL7ExposureSchedExcl {
  protected GL7ExclCovCMedPayLocClassLvl1()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclCovCMedPayLocClassLvl1(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclCovCMedPayLocClassLvl1");
  }
  
  public GL7ExclCovCMedPayLocClassLvl1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclCovCMedPayLocClassLvl1");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclCovCMedPayLocClassLvl1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclCovCMedPayLocClassLvl1>() {
      public productmodel.GL7ExclCovCMedPayLocClassLvl1 newEmptyInstance() {
        return new productmodel.GL7ExclCovCMedPayLocClassLvl1();
      }
      
      
    });
  }
}