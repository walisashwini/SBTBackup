package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclProdsProfessionalServicesOpticalHearingAidE.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclProdsProfessionalServicesOpticalHearingAidE extends entity.GL7SublineTypeExcl {
  protected GL7ExclProdsProfessionalServicesOpticalHearingAidE()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclProdsProfessionalServicesOpticalHearingAidE(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclProdsProfessionalServicesOpticalHearingAidE");
  }
  
  public GL7ExclProdsProfessionalServicesOpticalHearingAidE(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclProdsProfessionalServicesOpticalHearingAidE");
  }
  
  public productmodel.DirectGL7ManualPremium77Type getGL7ManualPremium77Term() {
    return (productmodel.DirectGL7ManualPremium77Type)getCovTerm("GL7ManualPremium77");
  }
  
  public boolean getHasGL7ManualPremium77Term() {
    return hasCovTerm("GL7ManualPremium77");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclProdsProfessionalServicesOpticalHearingAidEInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclProdsProfessionalServicesOpticalHearingAidE>() {
      public productmodel.GL7ExclProdsProfessionalServicesOpticalHearingAidE newEmptyInstance() {
        return new productmodel.GL7ExclProdsProfessionalServicesOpticalHearingAidE();
      }
      
      
    });
  }
}