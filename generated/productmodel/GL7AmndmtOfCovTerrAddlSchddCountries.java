package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmndmtOfCovTerrAddlSchddCountries.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmndmtOfCovTerrAddlSchddCountries extends entity.GL7SublineTypeSchedCond {
  protected GL7AmndmtOfCovTerrAddlSchddCountries()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmndmtOfCovTerrAddlSchddCountries(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmndmtOfCovTerrAddlSchddCountries");
  }
  
  public GL7AmndmtOfCovTerrAddlSchddCountries(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmndmtOfCovTerrAddlSchddCountries");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmndmtOfCovTerrAddlSchddCountriesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmndmtOfCovTerrAddlSchddCountries>() {
      public productmodel.GL7AmndmtOfCovTerrAddlSchddCountries newEmptyInstance() {
        return new productmodel.GL7AmndmtOfCovTerrAddlSchddCountries();
      }
      
      
    });
  }
}