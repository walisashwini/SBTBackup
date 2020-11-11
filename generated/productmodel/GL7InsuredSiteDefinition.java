package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7InsuredSiteDefinition.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7InsuredSiteDefinition extends entity.GL7SublineTypeCov {
  protected GL7InsuredSiteDefinition()  {
    super((java.lang.Void)null);
  }
  
  public GL7InsuredSiteDefinition(entity.PolicyPeriod branch)  {
    super(branch, "GL7InsuredSiteDefinition");
  }
  
  public GL7InsuredSiteDefinition(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7InsuredSiteDefinition");
  }
  
  public productmodel.DirectGL7ManualPremium116Type getGL7ManualPremium116Term() {
    return (productmodel.DirectGL7ManualPremium116Type)getCovTerm("GL7ManualPremium116");
  }
  
  public boolean getHasGL7ManualPremium116Term() {
    return hasCovTerm("GL7ManualPremium116");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7InsuredSiteDefinitionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7InsuredSiteDefinition>() {
      public productmodel.GL7InsuredSiteDefinition newEmptyInstance() {
        return new productmodel.GL7InsuredSiteDefinition();
      }
      
      
    });
  }
}