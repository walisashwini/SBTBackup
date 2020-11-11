package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclOfTerrNuclearBiologicalChemicalTerr.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclOfTerrNuclearBiologicalChemicalTerr extends entity.GL7SublineTypeExcl {
  protected GL7ExclOfTerrNuclearBiologicalChemicalTerr()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclOfTerrNuclearBiologicalChemicalTerr(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclOfTerrNuclearBiologicalChemicalTerr");
  }
  
  public GL7ExclOfTerrNuclearBiologicalChemicalTerr(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclOfTerrNuclearBiologicalChemicalTerr");
  }
  
  public productmodel.DirectGL7ManualPremium100Type getGL7ManualPremium100Term() {
    return (productmodel.DirectGL7ManualPremium100Type)getCovTerm("GL7ManualPremium100");
  }
  
  public boolean getHasGL7ManualPremium100Term() {
    return hasCovTerm("GL7ManualPremium100");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclOfTerrNuclearBiologicalChemicalTerrInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclOfTerrNuclearBiologicalChemicalTerr>() {
      public productmodel.GL7ExclOfTerrNuclearBiologicalChemicalTerr newEmptyInstance() {
        return new productmodel.GL7ExclOfTerrNuclearBiologicalChemicalTerr();
      }
      
      
    });
  }
}