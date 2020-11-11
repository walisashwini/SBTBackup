package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmndmtOfCovTerrWorldwideCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmndmtOfCovTerrWorldwideCov extends entity.GL7SublineTypeCond {
  protected GL7AmndmtOfCovTerrWorldwideCov()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmndmtOfCovTerrWorldwideCov(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmndmtOfCovTerrWorldwideCov");
  }
  
  public GL7AmndmtOfCovTerrWorldwideCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmndmtOfCovTerrWorldwideCov");
  }
  
  public productmodel.DirectGL7ManualPremium14Type getGL7ManualPremium14Term() {
    return (productmodel.DirectGL7ManualPremium14Type)getCovTerm("GL7ManualPremium14");
  }
  
  public boolean getHasGL7ManualPremium14Term() {
    return hasCovTerm("GL7ManualPremium14");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmndmtOfCovTerrWorldwideCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmndmtOfCovTerrWorldwideCov>() {
      public productmodel.GL7AmndmtOfCovTerrWorldwideCov newEmptyInstance() {
        return new productmodel.GL7AmndmtOfCovTerrWorldwideCov();
      }
      
      
    });
  }
}