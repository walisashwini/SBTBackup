package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclOfPunitiveDamagesReltdToACertifiedActOfTerr.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclOfPunitiveDamagesReltdToACertifiedActOfTerr extends entity.GL7SublineTypeExcl {
  protected GL7ExclOfPunitiveDamagesReltdToACertifiedActOfTerr()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclOfPunitiveDamagesReltdToACertifiedActOfTerr(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclOfPunitiveDamagesReltdToACertifiedActOfTerr");
  }
  
  public GL7ExclOfPunitiveDamagesReltdToACertifiedActOfTerr(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclOfPunitiveDamagesReltdToACertifiedActOfTerr");
  }
  
  public productmodel.DirectGL7ManualPremium99Type getGL7ManualPremium99Term() {
    return (productmodel.DirectGL7ManualPremium99Type)getCovTerm("GL7ManualPremium99");
  }
  
  public boolean getHasGL7ManualPremium99Term() {
    return hasCovTerm("GL7ManualPremium99");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclOfPunitiveDamagesReltdToACertifiedActOfTerrInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclOfPunitiveDamagesReltdToACertifiedActOfTerr>() {
      public productmodel.GL7ExclOfPunitiveDamagesReltdToACertifiedActOfTerr newEmptyInstance() {
        return new productmodel.GL7ExclOfPunitiveDamagesReltdToACertifiedActOfTerr();
      }
      
      
    });
  }
}