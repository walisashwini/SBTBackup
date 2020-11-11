package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExperienceRatingModificationThirdLatestYear.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExperienceRatingModificationThirdLatestYear extends entity.GL7SublineTypeCov {
  protected GL7ExperienceRatingModificationThirdLatestYear()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExperienceRatingModificationThirdLatestYear(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExperienceRatingModificationThirdLatestYear");
  }
  
  public GL7ExperienceRatingModificationThirdLatestYear(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExperienceRatingModificationThirdLatestYear");
  }
  
  public productmodel.DirectGL7ERPExposuresOnSpecialUWBasisThirdLatestYearPremType getGL7ERPExposuresOnSpecialUWBasisThirdLatestYearPremTerm() {
    return (productmodel.DirectGL7ERPExposuresOnSpecialUWBasisThirdLatestYearPremType)getCovTerm("GL7ERPExposuresOnSpecialUWBasisThirdLatestYearPrem");
  }
  
  public productmodel.DirectGL7ERPExposuresOnSpecialUWBasisThirdLatestYearProdType getGL7ERPExposuresOnSpecialUWBasisThirdLatestYearProdTerm() {
    return (productmodel.DirectGL7ERPExposuresOnSpecialUWBasisThirdLatestYearProdType)getCovTerm("GL7ERPExposuresOnSpecialUWBasisThirdLatestYearProd");
  }
  
  public productmodel.GenericGL7ERPThirdLatestYearEffectiveDateType getGL7ERPThirdLatestYearEffectiveDateTerm() {
    return (productmodel.GenericGL7ERPThirdLatestYearEffectiveDateType)getCovTerm("GL7ERPThirdLatestYearEffectiveDate");
  }
  
  public productmodel.GenericGL7ERPThirdLatestYearLatestValuationDateType getGL7ERPThirdLatestYearLatestValuationDateTerm() {
    return (productmodel.GenericGL7ERPThirdLatestYearLatestValuationDateType)getCovTerm("GL7ERPThirdLatestYearLatestValuationDate");
  }
  
  public productmodel.DirectGL7ERPThirdLatestYearTotalIncludedLossType getGL7ERPThirdLatestYearTotalIncludedLossTerm() {
    return (productmodel.DirectGL7ERPThirdLatestYearTotalIncludedLossType)getCovTerm("GL7ERPThirdLatestYearTotalIncludedLoss");
  }
  
  public productmodel.OptionGL7ERPThirdLatestYearTypeOfPolicyType getGL7ERPThirdLatestYearTypeOfPolicyTerm() {
    return (productmodel.OptionGL7ERPThirdLatestYearTypeOfPolicyType)getCovTerm("GL7ERPThirdLatestYearTypeOfPolicy");
  }
  
  public productmodel.OptionGL7ERPThirdLatestYearWithSameCarrierType getGL7ERPThirdLatestYearWithSameCarrierTerm() {
    return (productmodel.OptionGL7ERPThirdLatestYearWithSameCarrierType)getCovTerm("GL7ERPThirdLatestYearWithSameCarrier");
  }
  
  public productmodel.DirectGL7ERPThirdLatestYearYIPType getGL7ERPThirdLatestYearYIPTerm() {
    return (productmodel.DirectGL7ERPThirdLatestYearYIPType)getCovTerm("GL7ERPThirdLatestYearYIP");
  }
  
  public boolean getHasGL7ERPExposuresOnSpecialUWBasisThirdLatestYearPremTerm() {
    return hasCovTerm("GL7ERPExposuresOnSpecialUWBasisThirdLatestYearPrem");
  }
  
  public boolean getHasGL7ERPExposuresOnSpecialUWBasisThirdLatestYearProdTerm() {
    return hasCovTerm("GL7ERPExposuresOnSpecialUWBasisThirdLatestYearProd");
  }
  
  public boolean getHasGL7ERPThirdLatestYearEffectiveDateTerm() {
    return hasCovTerm("GL7ERPThirdLatestYearEffectiveDate");
  }
  
  public boolean getHasGL7ERPThirdLatestYearLatestValuationDateTerm() {
    return hasCovTerm("GL7ERPThirdLatestYearLatestValuationDate");
  }
  
  public boolean getHasGL7ERPThirdLatestYearTotalIncludedLossTerm() {
    return hasCovTerm("GL7ERPThirdLatestYearTotalIncludedLoss");
  }
  
  public boolean getHasGL7ERPThirdLatestYearTypeOfPolicyTerm() {
    return hasCovTerm("GL7ERPThirdLatestYearTypeOfPolicy");
  }
  
  public boolean getHasGL7ERPThirdLatestYearWithSameCarrierTerm() {
    return hasCovTerm("GL7ERPThirdLatestYearWithSameCarrier");
  }
  
  public boolean getHasGL7ERPThirdLatestYearYIPTerm() {
    return hasCovTerm("GL7ERPThirdLatestYearYIP");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExperienceRatingModificationThirdLatestYearInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExperienceRatingModificationThirdLatestYear>() {
      public productmodel.GL7ExperienceRatingModificationThirdLatestYear newEmptyInstance() {
        return new productmodel.GL7ExperienceRatingModificationThirdLatestYear();
      }
      
      
    });
  }
}