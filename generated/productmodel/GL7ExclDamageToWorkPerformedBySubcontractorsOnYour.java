package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclDamageToWorkPerformedBySubcontractorsOnYour.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclDamageToWorkPerformedBySubcontractorsOnYour extends entity.GL7SublineTypeExcl {
  protected GL7ExclDamageToWorkPerformedBySubcontractorsOnYour()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclDamageToWorkPerformedBySubcontractorsOnYour(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclDamageToWorkPerformedBySubcontractorsOnYour");
  }
  
  public GL7ExclDamageToWorkPerformedBySubcontractorsOnYour(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclDamageToWorkPerformedBySubcontractorsOnYour");
  }
  
  public productmodel.DirectGL7ManualPremium55Type getGL7ManualPremium55Term() {
    return (productmodel.DirectGL7ManualPremium55Type)getCovTerm("GL7ManualPremium55");
  }
  
  public boolean getHasGL7ManualPremium55Term() {
    return hasCovTerm("GL7ManualPremium55");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclDamageToWorkPerformedBySubcontractorsOnYourInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclDamageToWorkPerformedBySubcontractorsOnYour>() {
      public productmodel.GL7ExclDamageToWorkPerformedBySubcontractorsOnYour newEmptyInstance() {
        return new productmodel.GL7ExclDamageToWorkPerformedBySubcontractorsOnYour();
      }
      
      
    });
  }
}