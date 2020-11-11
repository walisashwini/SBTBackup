package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclIntercompanyProdsSuits.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclIntercompanyProdsSuits extends entity.GL7SublineTypeExcl {
  protected GL7ExclIntercompanyProdsSuits()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclIntercompanyProdsSuits(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclIntercompanyProdsSuits");
  }
  
  public GL7ExclIntercompanyProdsSuits(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclIntercompanyProdsSuits");
  }
  
  public productmodel.DirectGL7ManualPremium69Type getGL7ManualPremium69Term() {
    return (productmodel.DirectGL7ManualPremium69Type)getCovTerm("GL7ManualPremium69");
  }
  
  public boolean getHasGL7ManualPremium69Term() {
    return hasCovTerm("GL7ManualPremium69");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclIntercompanyProdsSuitsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclIntercompanyProdsSuits>() {
      public productmodel.GL7ExclIntercompanyProdsSuits newEmptyInstance() {
        return new productmodel.GL7ExclIntercompanyProdsSuits();
      }
      
      
    });
  }
}