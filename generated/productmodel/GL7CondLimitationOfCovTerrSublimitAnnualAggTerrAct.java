package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct extends entity.GL7SublineTypeCond {
  protected GL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct()  {
    super((java.lang.Void)null);
  }
  
  public GL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct(entity.PolicyPeriod branch)  {
    super(branch, "GL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct");
  }
  
  public GL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct");
  }
  
  public productmodel.OptionGL7AggLimit2Type getGL7AggLimit2Term() {
    return (productmodel.OptionGL7AggLimit2Type)getCovTerm("GL7AggLimit2");
  }
  
  public productmodel.DirectGL7ManualPremium33Type getGL7ManualPremium33Term() {
    return (productmodel.DirectGL7ManualPremium33Type)getCovTerm("GL7ManualPremium33");
  }
  
  public boolean getHasGL7AggLimit2Term() {
    return hasCovTerm("GL7AggLimit2");
  }
  
  public boolean getHasGL7ManualPremium33Term() {
    return hasCovTerm("GL7ManualPremium33");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CondLimitationOfCovTerrSublimitAnnualAggTerrActInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct>() {
      public productmodel.GL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct newEmptyInstance() {
        return new productmodel.GL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct();
      }
      
      
    });
  }
}