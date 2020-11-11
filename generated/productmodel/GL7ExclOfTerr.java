package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclOfTerr.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclOfTerr extends entity.GL7SublineTypeExcl {
  protected GL7ExclOfTerr()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclOfTerr(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclOfTerr");
  }
  
  public GL7ExclOfTerr(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclOfTerr");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclOfTerrInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclOfTerr>() {
      public productmodel.GL7ExclOfTerr newEmptyInstance() {
        return new productmodel.GL7ExclOfTerr();
      }
      
      
    });
  }
}