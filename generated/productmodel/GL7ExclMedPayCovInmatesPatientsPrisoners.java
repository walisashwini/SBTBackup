package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclMedPayCovInmatesPatientsPrisoners.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclMedPayCovInmatesPatientsPrisoners extends entity.GL7SublineTypeSchedExcl {
  protected GL7ExclMedPayCovInmatesPatientsPrisoners()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclMedPayCovInmatesPatientsPrisoners(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclMedPayCovInmatesPatientsPrisoners");
  }
  
  public GL7ExclMedPayCovInmatesPatientsPrisoners(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclMedPayCovInmatesPatientsPrisoners");
  }
  
  public productmodel.DirectGL7ManualPremium2Type getGL7ManualPremium2Term() {
    return (productmodel.DirectGL7ManualPremium2Type)getCovTerm("GL7ManualPremium2");
  }
  
  public boolean getHasGL7ManualPremium2Term() {
    return hasCovTerm("GL7ManualPremium2");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclMedPayCovInmatesPatientsPrisonersInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclMedPayCovInmatesPatientsPrisoners>() {
      public productmodel.GL7ExclMedPayCovInmatesPatientsPrisoners newEmptyInstance() {
        return new productmodel.GL7ExclMedPayCovInmatesPatientsPrisoners();
      }
      
      
    });
  }
}