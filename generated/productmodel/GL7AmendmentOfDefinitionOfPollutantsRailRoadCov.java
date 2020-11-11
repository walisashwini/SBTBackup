package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmendmentOfDefinitionOfPollutantsRailRoadCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmendmentOfDefinitionOfPollutantsRailRoadCov extends entity.GL7SublineSchedCov {
  protected GL7AmendmentOfDefinitionOfPollutantsRailRoadCov()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmendmentOfDefinitionOfPollutantsRailRoadCov(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmendmentOfDefinitionOfPollutantsRailRoadCov");
  }
  
  public GL7AmendmentOfDefinitionOfPollutantsRailRoadCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmendmentOfDefinitionOfPollutantsRailRoadCov");
  }
  
  public productmodel.DirectGL7ManualPremium18Type getGL7ManualPremium18Term() {
    return (productmodel.DirectGL7ManualPremium18Type)getCovTerm("GL7ManualPremium18");
  }
  
  public boolean getHasGL7ManualPremium18Term() {
    return hasCovTerm("GL7ManualPremium18");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmendmentOfDefinitionOfPollutantsRailRoadCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmendmentOfDefinitionOfPollutantsRailRoadCov>() {
      public productmodel.GL7AmendmentOfDefinitionOfPollutantsRailRoadCov newEmptyInstance() {
        return new productmodel.GL7AmendmentOfDefinitionOfPollutantsRailRoadCov();
      }
      
      
    });
  }
}