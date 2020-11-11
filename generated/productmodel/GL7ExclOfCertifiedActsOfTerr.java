package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclOfCertifiedActsOfTerr.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclOfCertifiedActsOfTerr extends entity.GL7SublineTypeExcl {
  protected GL7ExclOfCertifiedActsOfTerr()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclOfCertifiedActsOfTerr(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclOfCertifiedActsOfTerr");
  }
  
  public GL7ExclOfCertifiedActsOfTerr(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclOfCertifiedActsOfTerr");
  }
  
  public productmodel.DirectGL7ManualPremium97Type getGL7ManualPremium97Term() {
    return (productmodel.DirectGL7ManualPremium97Type)getCovTerm("GL7ManualPremium97");
  }
  
  public boolean getHasGL7ManualPremium97Term() {
    return hasCovTerm("GL7ManualPremium97");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclOfCertifiedActsOfTerrInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclOfCertifiedActsOfTerr>() {
      public productmodel.GL7ExclOfCertifiedActsOfTerr newEmptyInstance() {
        return new productmodel.GL7ExclOfCertifiedActsOfTerr();
      }
      
      
    });
  }
}