package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclOfCertifiedActsOfTerrAndOtherActsOfTerr.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclOfCertifiedActsOfTerrAndOtherActsOfTerr extends entity.GL7SublineTypeExcl {
  protected GL7ExclOfCertifiedActsOfTerrAndOtherActsOfTerr()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclOfCertifiedActsOfTerrAndOtherActsOfTerr(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclOfCertifiedActsOfTerrAndOtherActsOfTerr");
  }
  
  public GL7ExclOfCertifiedActsOfTerrAndOtherActsOfTerr(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclOfCertifiedActsOfTerrAndOtherActsOfTerr");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclOfCertifiedActsOfTerrAndOtherActsOfTerrInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclOfCertifiedActsOfTerrAndOtherActsOfTerr>() {
      public productmodel.GL7ExclOfCertifiedActsOfTerrAndOtherActsOfTerr newEmptyInstance() {
        return new productmodel.GL7ExclOfCertifiedActsOfTerrAndOtherActsOfTerr();
      }
      
      
    });
  }
}