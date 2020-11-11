package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclInjuryToVolunteerFirefighters.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclInjuryToVolunteerFirefighters extends entity.GL7SublineTypeExcl {
  protected GL7ExclInjuryToVolunteerFirefighters()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclInjuryToVolunteerFirefighters(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclInjuryToVolunteerFirefighters");
  }
  
  public GL7ExclInjuryToVolunteerFirefighters(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclInjuryToVolunteerFirefighters");
  }
  
  public productmodel.DirectGL7ManualPremium68Type getGL7ManualPremium68Term() {
    return (productmodel.DirectGL7ManualPremium68Type)getCovTerm("GL7ManualPremium68");
  }
  
  public boolean getHasGL7ManualPremium68Term() {
    return hasCovTerm("GL7ManualPremium68");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclInjuryToVolunteerFirefightersInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclInjuryToVolunteerFirefighters>() {
      public productmodel.GL7ExclInjuryToVolunteerFirefighters newEmptyInstance() {
        return new productmodel.GL7ExclInjuryToVolunteerFirefighters();
      }
      
      
    });
  }
}