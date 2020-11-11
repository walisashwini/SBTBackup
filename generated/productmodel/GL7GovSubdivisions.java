package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7GovSubdivisions.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7GovSubdivisions extends entity.GL7SublineTypeCov {
  protected GL7GovSubdivisions()  {
    super((java.lang.Void)null);
  }
  
  public GL7GovSubdivisions(entity.PolicyPeriod branch)  {
    super(branch, "GL7GovSubdivisions");
  }
  
  public GL7GovSubdivisions(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7GovSubdivisions");
  }
  
  public productmodel.DirectGL7ManualPremium114Type getGL7ManualPremium114Term() {
    return (productmodel.DirectGL7ManualPremium114Type)getCovTerm("GL7ManualPremium114");
  }
  
  public boolean getHasGL7ManualPremium114Term() {
    return hasCovTerm("GL7ManualPremium114");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7GovSubdivisionsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7GovSubdivisions>() {
      public productmodel.GL7GovSubdivisions newEmptyInstance() {
        return new productmodel.GL7GovSubdivisions();
      }
      
      
    });
  }
}