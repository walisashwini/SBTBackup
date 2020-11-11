package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7TerrEndorsement.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7TerrEndorsement extends entity.GL7SublineTypeCov {
  protected GL7TerrEndorsement()  {
    super((java.lang.Void)null);
  }
  
  public GL7TerrEndorsement(entity.PolicyPeriod branch)  {
    super(branch, "GL7TerrEndorsement");
  }
  
  public GL7TerrEndorsement(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7TerrEndorsement");
  }
  
  public productmodel.DirectGL7CertifiedActsofTerrExposureClassFactorOverrideType getGL7CertifiedActsofTerrExposureClassFactorOverrideTerm() {
    return (productmodel.DirectGL7CertifiedActsofTerrExposureClassFactorOverrideType)getCovTerm("GL7CertifiedActsofTerrExposureClassFactorOverride");
  }
  
  public boolean getHasGL7CertifiedActsofTerrExposureClassFactorOverrideTerm() {
    return hasCovTerm("GL7CertifiedActsofTerrExposureClassFactorOverride");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7TerrEndorsementInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7TerrEndorsement>() {
      public productmodel.GL7TerrEndorsement newEmptyInstance() {
        return new productmodel.GL7TerrEndorsement();
      }
      
      
    });
  }
}