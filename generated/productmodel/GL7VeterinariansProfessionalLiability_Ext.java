package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7VeterinariansProfessionalLiability_Ext.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7VeterinariansProfessionalLiability_Ext extends entity.GL7SublineTypeCov {
  protected GL7VeterinariansProfessionalLiability_Ext()  {
    super((java.lang.Void)null);
  }
  
  public GL7VeterinariansProfessionalLiability_Ext(entity.PolicyPeriod branch)  {
    super(branch, "zjtjkj7n3hb537nob522vs50kt8");
  }
  
  public GL7VeterinariansProfessionalLiability_Ext(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zjtjkj7n3hb537nob522vs50kt8");
  }
  
  public productmodel.OptionGL7EmployedPersonsType getGL7EmployedPersonsTerm() {
    return (productmodel.OptionGL7EmployedPersonsType)getCovTerm("zb9he34l9d6e20o0bbon5bt17d8");
  }
  
  public productmodel.DirectGL7NumberofEmployeesType getGL7NumberofEmployeesTerm() {
    return (productmodel.DirectGL7NumberofEmployeesType)getCovTerm("zloj895dc2lj3df9rc04d7bfeba");
  }
  
  public productmodel.DirectGL7NumberofPartnersType getGL7NumberofPartnersTerm() {
    return (productmodel.DirectGL7NumberofPartnersType)getCovTerm("zgrimigrkt9e4c4np8ught4topa");
  }
  
  public productmodel.DirectGL7NumberofVeterinariansType getGL7NumberofVeterinariansTerm() {
    return (productmodel.DirectGL7NumberofVeterinariansType)getCovTerm("zn4jq57dgdn7f9tbbspe2o8fu7b");
  }
  
  public productmodel.OptionGL7PartnershipLiabilityType getGL7PartnershipLiabilityTerm() {
    return (productmodel.OptionGL7PartnershipLiabilityType)getCovTerm("z0kiqh35mvaudaqs7g7k5lbt7c9");
  }
  
  public boolean getHasGL7EmployedPersonsTerm() {
    return hasCovTerm("zb9he34l9d6e20o0bbon5bt17d8");
  }
  
  public boolean getHasGL7NumberofEmployeesTerm() {
    return hasCovTerm("zloj895dc2lj3df9rc04d7bfeba");
  }
  
  public boolean getHasGL7NumberofPartnersTerm() {
    return hasCovTerm("zgrimigrkt9e4c4np8ught4topa");
  }
  
  public boolean getHasGL7NumberofVeterinariansTerm() {
    return hasCovTerm("zn4jq57dgdn7f9tbbspe2o8fu7b");
  }
  
  public boolean getHasGL7PartnershipLiabilityTerm() {
    return hasCovTerm("z0kiqh35mvaudaqs7g7k5lbt7c9");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7VeterinariansProfessionalLiability_ExtInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7VeterinariansProfessionalLiability_Ext>() {
      public productmodel.GL7VeterinariansProfessionalLiability_Ext newEmptyInstance() {
        return new productmodel.GL7VeterinariansProfessionalLiability_Ext();
      }
      
      
    });
  }
}