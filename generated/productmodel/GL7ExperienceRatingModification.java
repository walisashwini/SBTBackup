package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExperienceRatingModification.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExperienceRatingModification extends entity.GL7SublineTypeCov {
  protected GL7ExperienceRatingModification()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExperienceRatingModification(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExperienceRatingModification");
  }
  
  public GL7ExperienceRatingModification(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExperienceRatingModification");
  }
  
  public productmodel.DirectGL7ERPActualExpectedLossRatioType getGL7ERPActualExpectedLossRatioTerm() {
    return (productmodel.DirectGL7ERPActualExpectedLossRatioType)getCovTerm("GL7ERPActualExpectedLossRatio");
  }
  
  public productmodel.OptionGL7ERPExpenseVariationAppliesType getGL7ERPExpenseVariationAppliesTerm() {
    return (productmodel.OptionGL7ERPExpenseVariationAppliesType)getCovTerm("GL7ERPExpenseVariationApplies");
  }
  
  public productmodel.DirectGL7ERPExperienceModificationAllOtherSublinesType getGL7ERPExperienceModificationAllOtherSublinesTerm() {
    return (productmodel.DirectGL7ERPExperienceModificationAllOtherSublinesType)getCovTerm("GL7ERPExperienceModificationAllOtherSublines");
  }
  
  public productmodel.DirectGL7ERPExperienceModificationOverrideType getGL7ERPExperienceModificationOverrideTerm() {
    return (productmodel.DirectGL7ERPExperienceModificationOverrideType)getCovTerm("GL7ERPExperienceModificationOverride");
  }
  
  public boolean getHasGL7ERPActualExpectedLossRatioTerm() {
    return hasCovTerm("GL7ERPActualExpectedLossRatio");
  }
  
  public boolean getHasGL7ERPExpenseVariationAppliesTerm() {
    return hasCovTerm("GL7ERPExpenseVariationApplies");
  }
  
  public boolean getHasGL7ERPExperienceModificationAllOtherSublinesTerm() {
    return hasCovTerm("GL7ERPExperienceModificationAllOtherSublines");
  }
  
  public boolean getHasGL7ERPExperienceModificationOverrideTerm() {
    return hasCovTerm("GL7ERPExperienceModificationOverride");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExperienceRatingModificationInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExperienceRatingModification>() {
      public productmodel.GL7ExperienceRatingModification newEmptyInstance() {
        return new productmodel.GL7ExperienceRatingModification();
      }
      
      
    });
  }
}