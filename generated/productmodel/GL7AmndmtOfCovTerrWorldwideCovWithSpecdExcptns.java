package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmndmtOfCovTerrWorldwideCovWithSpecdExcptns.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmndmtOfCovTerrWorldwideCovWithSpecdExcptns extends entity.GL7SublineTypeSchedCond {
  protected GL7AmndmtOfCovTerrWorldwideCovWithSpecdExcptns()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmndmtOfCovTerrWorldwideCovWithSpecdExcptns(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmndmtOfCovTerrWorldwideCovWithSpecdExcptns");
  }
  
  public GL7AmndmtOfCovTerrWorldwideCovWithSpecdExcptns(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmndmtOfCovTerrWorldwideCovWithSpecdExcptns");
  }
  
  public productmodel.DirectGL7ManualPremium15Type getGL7ManualPremium15Term() {
    return (productmodel.DirectGL7ManualPremium15Type)getCovTerm("GL7ManualPremium15");
  }
  
  public boolean getHasGL7ManualPremium15Term() {
    return hasCovTerm("GL7ManualPremium15");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmndmtOfCovTerrWorldwideCovWithSpecdExcptnsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmndmtOfCovTerrWorldwideCovWithSpecdExcptns>() {
      public productmodel.GL7AmndmtOfCovTerrWorldwideCovWithSpecdExcptns newEmptyInstance() {
        return new productmodel.GL7AmndmtOfCovTerrWorldwideCovWithSpecdExcptns();
      }
      
      
    });
  }
}