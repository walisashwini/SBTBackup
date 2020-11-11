package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CompositeRating.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CompositeRating extends entity.GL7SublineTypeCov {
  protected GL7CompositeRating()  {
    super((java.lang.Void)null);
  }
  
  public GL7CompositeRating(entity.PolicyPeriod branch)  {
    super(branch, "GL7CompositeRating");
  }
  
  public GL7CompositeRating(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CompositeRating");
  }
  
  public productmodel.GenericGL7CompositeRatingExposureBasisOverrideType getGL7CompositeRatingExposureBasisOverrideTerm() {
    return (productmodel.GenericGL7CompositeRatingExposureBasisOverrideType)getCovTerm("GL7CompositeRatingExposureBasisOverride");
  }
  
  public productmodel.OptionGL7CompositeRatingExposureBasisType getGL7CompositeRatingExposureBasisTerm() {
    return (productmodel.OptionGL7CompositeRatingExposureBasisType)getCovTerm("GL7CompositeRatingExposureBasis");
  }
  
  public productmodel.DirectGL7FinalAdjustedCompositeExposureType getGL7FinalAdjustedCompositeExposureTerm() {
    return (productmodel.DirectGL7FinalAdjustedCompositeExposureType)getCovTerm("GL7FinalAdjustedCompositeExposure");
  }
  
  public boolean getHasGL7CompositeRatingExposureBasisOverrideTerm() {
    return hasCovTerm("GL7CompositeRatingExposureBasisOverride");
  }
  
  public boolean getHasGL7CompositeRatingExposureBasisTerm() {
    return hasCovTerm("GL7CompositeRatingExposureBasis");
  }
  
  public boolean getHasGL7FinalAdjustedCompositeExposureTerm() {
    return hasCovTerm("GL7FinalAdjustedCompositeExposure");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CompositeRatingInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CompositeRating>() {
      public productmodel.GL7CompositeRating newEmptyInstance() {
        return new productmodel.GL7CompositeRating();
      }
      
      
    });
  }
}