package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmndmtTravelAgencyToursLimitationOfCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmndmtTravelAgencyToursLimitationOfCov extends entity.GL7SublineTypeCond {
  protected GL7AmndmtTravelAgencyToursLimitationOfCov()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmndmtTravelAgencyToursLimitationOfCov(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmndmtTravelAgencyToursLimitationOfCov");
  }
  
  public GL7AmndmtTravelAgencyToursLimitationOfCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmndmtTravelAgencyToursLimitationOfCov");
  }
  
  public productmodel.DirectGL7ManualPremium22Type getGL7ManualPremium22Term() {
    return (productmodel.DirectGL7ManualPremium22Type)getCovTerm("GL7ManualPremium22");
  }
  
  public boolean getHasGL7ManualPremium22Term() {
    return hasCovTerm("GL7ManualPremium22");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmndmtTravelAgencyToursLimitationOfCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmndmtTravelAgencyToursLimitationOfCov>() {
      public productmodel.GL7AmndmtTravelAgencyToursLimitationOfCov newEmptyInstance() {
        return new productmodel.GL7AmndmtTravelAgencyToursLimitationOfCov();
      }
      
      
    });
  }
}