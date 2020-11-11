package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmndmtOfLiquorLiabExclProdsCompldOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmndmtOfLiquorLiabExclProdsCompldOps extends entity.GL7SublineTypeExcl {
  protected GL7AmndmtOfLiquorLiabExclProdsCompldOps()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmndmtOfLiquorLiabExclProdsCompldOps(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmndmtOfLiquorLiabExclProdsCompldOps");
  }
  
  public GL7AmndmtOfLiquorLiabExclProdsCompldOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmndmtOfLiquorLiabExclProdsCompldOps");
  }
  
  public productmodel.DirectGL7ManualPremium20Type getGL7ManualPremium20Term() {
    return (productmodel.DirectGL7ManualPremium20Type)getCovTerm("GL7ManualPremium20");
  }
  
  public boolean getHasGL7ManualPremium20Term() {
    return hasCovTerm("GL7ManualPremium20");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmndmtOfLiquorLiabExclProdsCompldOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmndmtOfLiquorLiabExclProdsCompldOps>() {
      public productmodel.GL7AmndmtOfLiquorLiabExclProdsCompldOps newEmptyInstance() {
        return new productmodel.GL7AmndmtOfLiquorLiabExclProdsCompldOps();
      }
      
      
    });
  }
}