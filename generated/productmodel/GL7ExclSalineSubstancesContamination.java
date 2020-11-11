package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclSalineSubstancesContamination.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclSalineSubstancesContamination extends entity.GL7SublineTypeExcl {
  protected GL7ExclSalineSubstancesContamination()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclSalineSubstancesContamination(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclSalineSubstancesContamination");
  }
  
  public GL7ExclSalineSubstancesContamination(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclSalineSubstancesContamination");
  }
  
  public productmodel.OptionGL7ClassDescriptionType getGL7ClassDescriptionTerm() {
    return (productmodel.OptionGL7ClassDescriptionType)getCovTerm("GL7ClassDescription");
  }
  
  public productmodel.DirectGL7ManualPremium82Type getGL7ManualPremium82Term() {
    return (productmodel.DirectGL7ManualPremium82Type)getCovTerm("GL7ManualPremium82");
  }
  
  public boolean getHasGL7ClassDescriptionTerm() {
    return hasCovTerm("GL7ClassDescription");
  }
  
  public boolean getHasGL7ManualPremium82Term() {
    return hasCovTerm("GL7ManualPremium82");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclSalineSubstancesContaminationInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclSalineSubstancesContamination>() {
      public productmodel.GL7ExclSalineSubstancesContamination newEmptyInstance() {
        return new productmodel.GL7ExclSalineSubstancesContamination();
      }
      
      
    });
  }
}