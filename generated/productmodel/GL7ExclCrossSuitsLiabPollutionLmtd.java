package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclCrossSuitsLiabPollutionLmtd.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclCrossSuitsLiabPollutionLmtd extends entity.GL7SublineTypeExcl {
  protected GL7ExclCrossSuitsLiabPollutionLmtd()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclCrossSuitsLiabPollutionLmtd(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclCrossSuitsLiabPollutionLmtd");
  }
  
  public GL7ExclCrossSuitsLiabPollutionLmtd(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclCrossSuitsLiabPollutionLmtd");
  }
  
  public productmodel.DirectGL7ManualPremium347Type getGL7ManualPremium347Term() {
    return (productmodel.DirectGL7ManualPremium347Type)getCovTerm("GL7ManualPremium347");
  }
  
  public boolean getHasGL7ManualPremium347Term() {
    return hasCovTerm("GL7ManualPremium347");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclCrossSuitsLiabPollutionLmtdInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclCrossSuitsLiabPollutionLmtd>() {
      public productmodel.GL7ExclCrossSuitsLiabPollutionLmtd newEmptyInstance() {
        return new productmodel.GL7ExclCrossSuitsLiabPollutionLmtd();
      }
      
      
    });
  }
}