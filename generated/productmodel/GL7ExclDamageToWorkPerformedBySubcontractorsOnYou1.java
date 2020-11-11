package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclDamageToWorkPerformedBySubcontractorsOnYou1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclDamageToWorkPerformedBySubcontractorsOnYou1 extends entity.GL7LocationSchedExcl {
  protected GL7ExclDamageToWorkPerformedBySubcontractorsOnYou1()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclDamageToWorkPerformedBySubcontractorsOnYou1(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclDamageToWorkPerformedBySubcontractorsOnYou1");
  }
  
  public GL7ExclDamageToWorkPerformedBySubcontractorsOnYou1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclDamageToWorkPerformedBySubcontractorsOnYou1");
  }
  
  public productmodel.DirectGL7ManualPremium182Type getGL7ManualPremium182Term() {
    return (productmodel.DirectGL7ManualPremium182Type)getCovTerm("GL7ManualPremium182");
  }
  
  public boolean getHasGL7ManualPremium182Term() {
    return hasCovTerm("GL7ManualPremium182");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclDamageToWorkPerformedBySubcontractorsOnYou1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclDamageToWorkPerformedBySubcontractorsOnYou1>() {
      public productmodel.GL7ExclDamageToWorkPerformedBySubcontractorsOnYou1 newEmptyInstance() {
        return new productmodel.GL7ExclDamageToWorkPerformedBySubcontractorsOnYou1();
      }
      
      
    });
  }
}