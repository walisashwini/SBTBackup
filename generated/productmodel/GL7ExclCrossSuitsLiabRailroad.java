package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclCrossSuitsLiabRailroad.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclCrossSuitsLiabRailroad extends entity.GL7SublineTypeExcl {
  protected GL7ExclCrossSuitsLiabRailroad()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclCrossSuitsLiabRailroad(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclCrossSuitsLiabRailroad");
  }
  
  public GL7ExclCrossSuitsLiabRailroad(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclCrossSuitsLiabRailroad");
  }
  
  public productmodel.DirectGL7ManualPremium356Type getGL7ManualPremium356Term() {
    return (productmodel.DirectGL7ManualPremium356Type)getCovTerm("GL7ManualPremium356");
  }
  
  public boolean getHasGL7ManualPremium356Term() {
    return hasCovTerm("GL7ManualPremium356");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclCrossSuitsLiabRailroadInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclCrossSuitsLiabRailroad>() {
      public productmodel.GL7ExclCrossSuitsLiabRailroad newEmptyInstance() {
        return new productmodel.GL7ExclCrossSuitsLiabRailroad();
      }
      
      
    });
  }
}