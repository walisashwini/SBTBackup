package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AbuseMolestationExcl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AbuseMolestationExcl extends entity.GL7SublineTypeExcl {
  protected GL7AbuseMolestationExcl()  {
    super((java.lang.Void)null);
  }
  
  public GL7AbuseMolestationExcl(entity.PolicyPeriod branch)  {
    super(branch, "GL7AbuseMolestationExcl");
  }
  
  public GL7AbuseMolestationExcl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AbuseMolestationExcl");
  }
  
  public productmodel.DirectGL7ManualPremiumType getGL7ManualPremiumTerm() {
    return (productmodel.DirectGL7ManualPremiumType)getCovTerm("GL7ManualPremium");
  }
  
  public boolean getHasGL7ManualPremiumTerm() {
    return hasCovTerm("GL7ManualPremium");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AbuseMolestationExclInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AbuseMolestationExcl>() {
      public productmodel.GL7AbuseMolestationExcl newEmptyInstance() {
        return new productmodel.GL7AbuseMolestationExcl();
      }
      
      
    });
  }
}