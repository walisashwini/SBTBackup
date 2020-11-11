package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7StopGapEmployersLiabCovEndorsementPolLvl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7StopGapEmployersLiabCovEndorsementPolLvl extends entity.GL7SublineCov {
  protected GL7StopGapEmployersLiabCovEndorsementPolLvl()  {
    super((java.lang.Void)null);
  }
  
  public GL7StopGapEmployersLiabCovEndorsementPolLvl(entity.PolicyPeriod branch)  {
    super(branch, "GL7StopGapEmployersLiabCovEndorsementPolLvl");
  }
  
  public GL7StopGapEmployersLiabCovEndorsementPolLvl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7StopGapEmployersLiabCovEndorsementPolLvl");
  }
  
  public productmodel.OptionGL7LimitBIByAccidentType getGL7LimitBIByAccidentTerm() {
    return (productmodel.OptionGL7LimitBIByAccidentType)getCovTerm("GL7LimitBIByAccident");
  }
  
  public productmodel.OptionGL7LimitBIByDiseaseAggType getGL7LimitBIByDiseaseAggTerm() {
    return (productmodel.OptionGL7LimitBIByDiseaseAggType)getCovTerm("GL7LimitBIByDiseaseAgg");
  }
  
  public productmodel.OptionGL7LimitBIByDiseaseEachEmplType getGL7LimitBIByDiseaseEachEmplTerm() {
    return (productmodel.OptionGL7LimitBIByDiseaseEachEmplType)getCovTerm("GL7LimitBIByDiseaseEachEmpl");
  }
  
  public productmodel.DirectGL7ManualPremium214Type getGL7ManualPremium214Term() {
    return (productmodel.DirectGL7ManualPremium214Type)getCovTerm("GL7ManualPremium214");
  }
  
  public boolean getHasGL7LimitBIByAccidentTerm() {
    return hasCovTerm("GL7LimitBIByAccident");
  }
  
  public boolean getHasGL7LimitBIByDiseaseAggTerm() {
    return hasCovTerm("GL7LimitBIByDiseaseAgg");
  }
  
  public boolean getHasGL7LimitBIByDiseaseEachEmplTerm() {
    return hasCovTerm("GL7LimitBIByDiseaseEachEmpl");
  }
  
  public boolean getHasGL7ManualPremium214Term() {
    return hasCovTerm("GL7ManualPremium214");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7StopGapEmployersLiabCovEndorsementPolLvlInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7StopGapEmployersLiabCovEndorsementPolLvl>() {
      public productmodel.GL7StopGapEmployersLiabCovEndorsementPolLvl newEmptyInstance() {
        return new productmodel.GL7StopGapEmployersLiabCovEndorsementPolLvl();
      }
      
      
    });
  }
}