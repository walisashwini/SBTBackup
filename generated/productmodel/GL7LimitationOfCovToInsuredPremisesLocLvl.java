package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LimitationOfCovToInsuredPremisesLocLvl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LimitationOfCovToInsuredPremisesLocLvl extends entity.GL7LocationSchedCov {
  protected GL7LimitationOfCovToInsuredPremisesLocLvl()  {
    super((java.lang.Void)null);
  }
  
  public GL7LimitationOfCovToInsuredPremisesLocLvl(entity.PolicyPeriod branch)  {
    super(branch, "GL7LimitationOfCovToInsuredPremisesLocLvl");
  }
  
  public GL7LimitationOfCovToInsuredPremisesLocLvl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LimitationOfCovToInsuredPremisesLocLvl");
  }
  
  public productmodel.DirectGL7ManualPremium185Type getGL7ManualPremium185Term() {
    return (productmodel.DirectGL7ManualPremium185Type)getCovTerm("GL7ManualPremium185");
  }
  
  public boolean getHasGL7ManualPremium185Term() {
    return hasCovTerm("GL7ManualPremium185");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LimitationOfCovToInsuredPremisesLocLvlInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LimitationOfCovToInsuredPremisesLocLvl>() {
      public productmodel.GL7LimitationOfCovToInsuredPremisesLocLvl newEmptyInstance() {
        return new productmodel.GL7LimitationOfCovToInsuredPremisesLocLvl();
      }
      
      
    });
  }
}