package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CondExclOfTerrNuclearBiologicalChemicalDisposit.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CondExclOfTerrNuclearBiologicalChemicalDisposit extends entity.GL7SublineTypeExcl {
  protected GL7CondExclOfTerrNuclearBiologicalChemicalDisposit()  {
    super((java.lang.Void)null);
  }
  
  public GL7CondExclOfTerrNuclearBiologicalChemicalDisposit(entity.PolicyPeriod branch)  {
    super(branch, "GL7CondExclOfTerrNuclearBiologicalChemicalDisposit");
  }
  
  public GL7CondExclOfTerrNuclearBiologicalChemicalDisposit(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CondExclOfTerrNuclearBiologicalChemicalDisposit");
  }
  
  public productmodel.DirectGL7ManualPremium32Type getGL7ManualPremium32Term() {
    return (productmodel.DirectGL7ManualPremium32Type)getCovTerm("GL7ManualPremium32");
  }
  
  public boolean getHasGL7ManualPremium32Term() {
    return hasCovTerm("GL7ManualPremium32");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CondExclOfTerrNuclearBiologicalChemicalDispositInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CondExclOfTerrNuclearBiologicalChemicalDisposit>() {
      public productmodel.GL7CondExclOfTerrNuclearBiologicalChemicalDisposit newEmptyInstance() {
        return new productmodel.GL7CondExclOfTerrNuclearBiologicalChemicalDisposit();
      }
      
      
    });
  }
}