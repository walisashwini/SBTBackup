package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmndmtOfLiquorLiabExcl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmndmtOfLiquorLiabExcl extends entity.GL7SublineTypeExcl {
  protected GL7AmndmtOfLiquorLiabExcl()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmndmtOfLiquorLiabExcl(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmndmtOfLiquorLiabExcl");
  }
  
  public GL7AmndmtOfLiquorLiabExcl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmndmtOfLiquorLiabExcl");
  }
  
  public productmodel.DirectGL7ManualPremium17Type getGL7ManualPremium17Term() {
    return (productmodel.DirectGL7ManualPremium17Type)getCovTerm("GL7ManualPremium17");
  }
  
  public boolean getHasGL7ManualPremium17Term() {
    return hasCovTerm("GL7ManualPremium17");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmndmtOfLiquorLiabExclInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmndmtOfLiquorLiabExcl>() {
      public productmodel.GL7AmndmtOfLiquorLiabExcl newEmptyInstance() {
        return new productmodel.GL7AmndmtOfLiquorLiabExcl();
      }
      
      
    });
  }
}