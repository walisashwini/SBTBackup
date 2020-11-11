package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7PersonalInjuryLiab.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7PersonalInjuryLiab extends entity.GL7SublineTypeCov {
  protected GL7PersonalInjuryLiab()  {
    super((java.lang.Void)null);
  }
  
  public GL7PersonalInjuryLiab(entity.PolicyPeriod branch)  {
    super(branch, "GL7PersonalInjuryLiab");
  }
  
  public GL7PersonalInjuryLiab(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7PersonalInjuryLiab");
  }
  
  public productmodel.DirectGL7ManualPremium136Type getGL7ManualPremium136Term() {
    return (productmodel.DirectGL7ManualPremium136Type)getCovTerm("GL7ManualPremium136");
  }
  
  public boolean getHasGL7ManualPremium136Term() {
    return hasCovTerm("GL7ManualPremium136");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7PersonalInjuryLiabInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7PersonalInjuryLiab>() {
      public productmodel.GL7PersonalInjuryLiab newEmptyInstance() {
        return new productmodel.GL7PersonalInjuryLiab();
      }
      
      
    });
  }
}