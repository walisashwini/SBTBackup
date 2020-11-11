package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LimitationOfCovForTerrSubLimitAnnualAggBasis.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LimitationOfCovForTerrSubLimitAnnualAggBasis extends entity.GL7SublineTypeCond {
  protected GL7LimitationOfCovForTerrSubLimitAnnualAggBasis()  {
    super((java.lang.Void)null);
  }
  
  public GL7LimitationOfCovForTerrSubLimitAnnualAggBasis(entity.PolicyPeriod branch)  {
    super(branch, "GL7LimitationOfCovForTerrSubLimitAnnualAggBasis");
  }
  
  public GL7LimitationOfCovForTerrSubLimitAnnualAggBasis(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LimitationOfCovForTerrSubLimitAnnualAggBasis");
  }
  
  public productmodel.OptionGL7AggLimit3Type getGL7AggLimit3Term() {
    return (productmodel.OptionGL7AggLimit3Type)getCovTerm("GL7AggLimit3");
  }
  
  public productmodel.DirectGL7ManualPremium119Type getGL7ManualPremium119Term() {
    return (productmodel.DirectGL7ManualPremium119Type)getCovTerm("GL7ManualPremium119");
  }
  
  public boolean getHasGL7AggLimit3Term() {
    return hasCovTerm("GL7AggLimit3");
  }
  
  public boolean getHasGL7ManualPremium119Term() {
    return hasCovTerm("GL7ManualPremium119");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LimitationOfCovForTerrSubLimitAnnualAggBasisInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LimitationOfCovForTerrSubLimitAnnualAggBasis>() {
      public productmodel.GL7LimitationOfCovForTerrSubLimitAnnualAggBasis newEmptyInstance() {
        return new productmodel.GL7LimitationOfCovForTerrSubLimitAnnualAggBasis();
      }
      
      
    });
  }
}