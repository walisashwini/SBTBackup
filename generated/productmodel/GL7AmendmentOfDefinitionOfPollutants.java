package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmendmentOfDefinitionOfPollutants.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmendmentOfDefinitionOfPollutants extends entity.GL7SublineSchedCov {
  protected GL7AmendmentOfDefinitionOfPollutants()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmendmentOfDefinitionOfPollutants(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmendmentOfDefinitionOfPollutants");
  }
  
  public GL7AmendmentOfDefinitionOfPollutants(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmendmentOfDefinitionOfPollutants");
  }
  
  public productmodel.DirectGL7ManualPremium13Type getGL7ManualPremium13Term() {
    return (productmodel.DirectGL7ManualPremium13Type)getCovTerm("GL7ManualPremium13");
  }
  
  public boolean getHasGL7ManualPremium13Term() {
    return hasCovTerm("GL7ManualPremium13");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmendmentOfDefinitionOfPollutantsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmendmentOfDefinitionOfPollutants>() {
      public productmodel.GL7AmendmentOfDefinitionOfPollutants newEmptyInstance() {
        return new productmodel.GL7AmendmentOfDefinitionOfPollutants();
      }
      
      
    });
  }
}