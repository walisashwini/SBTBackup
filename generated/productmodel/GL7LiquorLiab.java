package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LiquorLiab.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LiquorLiab extends entity.GL7SublineTypeCov {
  protected GL7LiquorLiab()  {
    super((java.lang.Void)null);
  }
  
  public GL7LiquorLiab(entity.PolicyPeriod branch)  {
    super(branch, "GL7LiquorLiab");
  }
  
  public GL7LiquorLiab(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LiquorLiab");
  }
  
  public productmodel.OptionGL7LiquorClassCodeType getGL7LiquorClassCodeTerm() {
    return (productmodel.OptionGL7LiquorClassCodeType)getCovTerm("GL7LiquorClassCode");
  }
  
  public productmodel.DirectGL7ManualPremium133Type getGL7ManualPremium133Term() {
    return (productmodel.DirectGL7ManualPremium133Type)getCovTerm("GL7ManualPremium133");
  }
  
  public boolean getHasGL7LiquorClassCodeTerm() {
    return hasCovTerm("GL7LiquorClassCode");
  }
  
  public boolean getHasGL7ManualPremium133Term() {
    return hasCovTerm("GL7ManualPremium133");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LiquorLiabInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LiquorLiab>() {
      public productmodel.GL7LiquorLiab newEmptyInstance() {
        return new productmodel.GL7LiquorLiab();
      }
      
      
    });
  }
}