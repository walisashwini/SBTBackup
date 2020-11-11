package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExperienceRatingModificationSecondLatestYear.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExperienceRatingModificationSecondLatestYear extends entity.GL7SublineTypeCov {
  protected GL7ExperienceRatingModificationSecondLatestYear()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExperienceRatingModificationSecondLatestYear(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExperienceRatingModificationSecondLatestYear");
  }
  
  public GL7ExperienceRatingModificationSecondLatestYear(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExperienceRatingModificationSecondLatestYear");
  }
  
  public productmodel.DirectGL7ERPExposuresOnSpecialUWBasisSecondLatestYearPreType getGL7ERPExposuresOnSpecialUWBasisSecondLatestYearPreTerm() {
    return (productmodel.DirectGL7ERPExposuresOnSpecialUWBasisSecondLatestYearPreType)getCovTerm("GL7ERPExposuresOnSpecialUWBasisSecondLatestYearPre");
  }
  
  public productmodel.DirectGL7ERPExposuresOnSpecialUWBasisSecondLatestYearProType getGL7ERPExposuresOnSpecialUWBasisSecondLatestYearProTerm() {
    return (productmodel.DirectGL7ERPExposuresOnSpecialUWBasisSecondLatestYearProType)getCovTerm("GL7ERPExposuresOnSpecialUWBasisSecondLatestYearPro");
  }
  
  public productmodel.GenericGL7ERPSecondLatestYearEffectiveDateType getGL7ERPSecondLatestYearEffectiveDateTerm() {
    return (productmodel.GenericGL7ERPSecondLatestYearEffectiveDateType)getCovTerm("GL7ERPSecondLatestYearEffectiveDate");
  }
  
  public productmodel.GenericGL7ERPSecondLatestYearLatestValuationDateType getGL7ERPSecondLatestYearLatestValuationDateTerm() {
    return (productmodel.GenericGL7ERPSecondLatestYearLatestValuationDateType)getCovTerm("GL7ERPSecondLatestYearLatestValuationDate");
  }
  
  public productmodel.DirectGL7ERPSecondLatestYearTotalIncludedLossType getGL7ERPSecondLatestYearTotalIncludedLossTerm() {
    return (productmodel.DirectGL7ERPSecondLatestYearTotalIncludedLossType)getCovTerm("GL7ERPSecondLatestYearTotalIncludedLoss");
  }
  
  public productmodel.OptionGL7ERPSecondLatestYearTypeOfPolicyType getGL7ERPSecondLatestYearTypeOfPolicyTerm() {
    return (productmodel.OptionGL7ERPSecondLatestYearTypeOfPolicyType)getCovTerm("GL7ERPSecondLatestYearTypeOfPolicy");
  }
  
  public productmodel.OptionGL7ERPSecondLatestYearWithSameCarrierType getGL7ERPSecondLatestYearWithSameCarrierTerm() {
    return (productmodel.OptionGL7ERPSecondLatestYearWithSameCarrierType)getCovTerm("GL7ERPSecondLatestYearWithSameCarrier");
  }
  
  public productmodel.DirectGL7ERPSecondLatestYearYIPType getGL7ERPSecondLatestYearYIPTerm() {
    return (productmodel.DirectGL7ERPSecondLatestYearYIPType)getCovTerm("GL7ERPSecondLatestYearYIP");
  }
  
  public boolean getHasGL7ERPExposuresOnSpecialUWBasisSecondLatestYearPreTerm() {
    return hasCovTerm("GL7ERPExposuresOnSpecialUWBasisSecondLatestYearPre");
  }
  
  public boolean getHasGL7ERPExposuresOnSpecialUWBasisSecondLatestYearProTerm() {
    return hasCovTerm("GL7ERPExposuresOnSpecialUWBasisSecondLatestYearPro");
  }
  
  public boolean getHasGL7ERPSecondLatestYearEffectiveDateTerm() {
    return hasCovTerm("GL7ERPSecondLatestYearEffectiveDate");
  }
  
  public boolean getHasGL7ERPSecondLatestYearLatestValuationDateTerm() {
    return hasCovTerm("GL7ERPSecondLatestYearLatestValuationDate");
  }
  
  public boolean getHasGL7ERPSecondLatestYearTotalIncludedLossTerm() {
    return hasCovTerm("GL7ERPSecondLatestYearTotalIncludedLoss");
  }
  
  public boolean getHasGL7ERPSecondLatestYearTypeOfPolicyTerm() {
    return hasCovTerm("GL7ERPSecondLatestYearTypeOfPolicy");
  }
  
  public boolean getHasGL7ERPSecondLatestYearWithSameCarrierTerm() {
    return hasCovTerm("GL7ERPSecondLatestYearWithSameCarrier");
  }
  
  public boolean getHasGL7ERPSecondLatestYearYIPTerm() {
    return hasCovTerm("GL7ERPSecondLatestYearYIP");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExperienceRatingModificationSecondLatestYearInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExperienceRatingModificationSecondLatestYear>() {
      public productmodel.GL7ExperienceRatingModificationSecondLatestYear newEmptyInstance() {
        return new productmodel.GL7ExperienceRatingModificationSecondLatestYear();
      }
      
      
    });
  }
}