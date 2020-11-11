package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclHiredAutoLiab.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclHiredAutoLiab extends entity.GL7SublineTypeExcl {
  protected GL7ExclHiredAutoLiab()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclHiredAutoLiab(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclHiredAutoLiab");
  }
  
  public GL7ExclHiredAutoLiab(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclHiredAutoLiab");
  }
  
  public productmodel.DirectGL7ManualPremium371Type getGL7ManualPremium371Term() {
    return (productmodel.DirectGL7ManualPremium371Type)getCovTerm("GL7ManualPremium371");
  }
  
  public boolean getHasGL7ManualPremium371Term() {
    return hasCovTerm("GL7ManualPremium371");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclHiredAutoLiabInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclHiredAutoLiab>() {
      public productmodel.GL7ExclHiredAutoLiab newEmptyInstance() {
        return new productmodel.GL7ExclHiredAutoLiab();
      }
      
      
    });
  }
}