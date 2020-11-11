package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclOfCertifiedActsOfNuclearBiologicalChemicalA.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclOfCertifiedActsOfNuclearBiologicalChemicalA extends entity.GL7SublineTypeExcl {
  protected GL7ExclOfCertifiedActsOfNuclearBiologicalChemicalA()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclOfCertifiedActsOfNuclearBiologicalChemicalA(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclOfCertifiedActsOfNuclearBiologicalChemicalA");
  }
  
  public GL7ExclOfCertifiedActsOfNuclearBiologicalChemicalA(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclOfCertifiedActsOfNuclearBiologicalChemicalA");
  }
  
  public productmodel.DirectGL7ManualPremium96Type getGL7ManualPremium96Term() {
    return (productmodel.DirectGL7ManualPremium96Type)getCovTerm("GL7ManualPremium96");
  }
  
  public boolean getHasGL7ManualPremium96Term() {
    return hasCovTerm("GL7ManualPremium96");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclOfCertifiedActsOfNuclearBiologicalChemicalAInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclOfCertifiedActsOfNuclearBiologicalChemicalA>() {
      public productmodel.GL7ExclOfCertifiedActsOfNuclearBiologicalChemicalA newEmptyInstance() {
        return new productmodel.GL7ExclOfCertifiedActsOfNuclearBiologicalChemicalA();
      }
      
      
    });
  }
}