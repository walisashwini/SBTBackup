package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CannabisExclUST.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CannabisExclUST extends entity.GL7SublineTypeExcl {
  protected GL7CannabisExclUST()  {
    super((java.lang.Void)null);
  }
  
  public GL7CannabisExclUST(entity.PolicyPeriod branch)  {
    super(branch, "GL7CannabisExclUST");
  }
  
  public GL7CannabisExclUST(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CannabisExclUST");
  }
  
  public productmodel.DirectGL7ManualPremium297Type getGL7ManualPremium297Term() {
    return (productmodel.DirectGL7ManualPremium297Type)getCovTerm("GL7ManualPremium297");
  }
  
  public boolean getHasGL7ManualPremium297Term() {
    return hasCovTerm("GL7ManualPremium297");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CannabisExclUSTInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CannabisExclUST>() {
      public productmodel.GL7CannabisExclUST newEmptyInstance() {
        return new productmodel.GL7CannabisExclUST();
      }
      
      
    });
  }
}