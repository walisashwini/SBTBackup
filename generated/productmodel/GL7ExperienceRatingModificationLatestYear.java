package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExperienceRatingModificationLatestYear.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExperienceRatingModificationLatestYear extends entity.GL7SublineTypeCov {
  protected GL7ExperienceRatingModificationLatestYear()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExperienceRatingModificationLatestYear(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExperienceRatingModificationLatestYear");
  }
  
  public GL7ExperienceRatingModificationLatestYear(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExperienceRatingModificationLatestYear");
  }
  
  public productmodel.DirectGL7ERPExposuresOnSpecialUWBasisLatestYearPremOpsType getGL7ERPExposuresOnSpecialUWBasisLatestYearPremOpsTerm() {
    return (productmodel.DirectGL7ERPExposuresOnSpecialUWBasisLatestYearPremOpsType)getCovTerm("GL7ERPExposuresOnSpecialUWBasisLatestYearPremOps");
  }
  
  public productmodel.DirectGL7ERPExposuresOnSpecialUWBasisLatestYearProdComplType getGL7ERPExposuresOnSpecialUWBasisLatestYearProdComplTerm() {
    return (productmodel.DirectGL7ERPExposuresOnSpecialUWBasisLatestYearProdComplType)getCovTerm("GL7ERPExposuresOnSpecialUWBasisLatestYearProdCompl");
  }
  
  public productmodel.GenericGL7ERPLatestYearEffectiveDateType getGL7ERPLatestYearEffectiveDateTerm() {
    return (productmodel.GenericGL7ERPLatestYearEffectiveDateType)getCovTerm("GL7ERPLatestYearEffectiveDate");
  }
  
  public productmodel.GenericGL7ERPLatestYearLatestValuationDateType getGL7ERPLatestYearLatestValuationDateTerm() {
    return (productmodel.GenericGL7ERPLatestYearLatestValuationDateType)getCovTerm("GL7ERPLatestYearLatestValuationDate");
  }
  
  public productmodel.DirectGL7ERPLatestYearTotalIncludedLossType getGL7ERPLatestYearTotalIncludedLossTerm() {
    return (productmodel.DirectGL7ERPLatestYearTotalIncludedLossType)getCovTerm("GL7ERPLatestYearTotalIncludedLoss");
  }
  
  public productmodel.OptionGL7ERPLatestYearTypeOfPolicyType getGL7ERPLatestYearTypeOfPolicyTerm() {
    return (productmodel.OptionGL7ERPLatestYearTypeOfPolicyType)getCovTerm("GL7ERPLatestYearTypeOfPolicy");
  }
  
  public productmodel.OptionGL7ERPLatestYearWithSameCarrierType getGL7ERPLatestYearWithSameCarrierTerm() {
    return (productmodel.OptionGL7ERPLatestYearWithSameCarrierType)getCovTerm("GL7ERPLatestYearWithSameCarrier");
  }
  
  public productmodel.DirectGL7ERPLatestYearYIPType getGL7ERPLatestYearYIPTerm() {
    return (productmodel.DirectGL7ERPLatestYearYIPType)getCovTerm("GL7ERPLatestYearYIP");
  }
  
  public boolean getHasGL7ERPExposuresOnSpecialUWBasisLatestYearPremOpsTerm() {
    return hasCovTerm("GL7ERPExposuresOnSpecialUWBasisLatestYearPremOps");
  }
  
  public boolean getHasGL7ERPExposuresOnSpecialUWBasisLatestYearProdComplTerm() {
    return hasCovTerm("GL7ERPExposuresOnSpecialUWBasisLatestYearProdCompl");
  }
  
  public boolean getHasGL7ERPLatestYearEffectiveDateTerm() {
    return hasCovTerm("GL7ERPLatestYearEffectiveDate");
  }
  
  public boolean getHasGL7ERPLatestYearLatestValuationDateTerm() {
    return hasCovTerm("GL7ERPLatestYearLatestValuationDate");
  }
  
  public boolean getHasGL7ERPLatestYearTotalIncludedLossTerm() {
    return hasCovTerm("GL7ERPLatestYearTotalIncludedLoss");
  }
  
  public boolean getHasGL7ERPLatestYearTypeOfPolicyTerm() {
    return hasCovTerm("GL7ERPLatestYearTypeOfPolicy");
  }
  
  public boolean getHasGL7ERPLatestYearWithSameCarrierTerm() {
    return hasCovTerm("GL7ERPLatestYearWithSameCarrier");
  }
  
  public boolean getHasGL7ERPLatestYearYIPTerm() {
    return hasCovTerm("GL7ERPLatestYearYIP");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExperienceRatingModificationLatestYearInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExperienceRatingModificationLatestYear>() {
      public productmodel.GL7ExperienceRatingModificationLatestYear newEmptyInstance() {
        return new productmodel.GL7ExperienceRatingModificationLatestYear();
      }
      
      
    });
  }
}