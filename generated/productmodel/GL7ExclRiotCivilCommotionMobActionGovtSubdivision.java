package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclRiotCivilCommotionMobActionGovtSubdivision.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclRiotCivilCommotionMobActionGovtSubdivision extends entity.GL7SublineTypeExcl {
  protected GL7ExclRiotCivilCommotionMobActionGovtSubdivision()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclRiotCivilCommotionMobActionGovtSubdivision(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclRiotCivilCommotionMobActionGovtSubdivision");
  }
  
  public GL7ExclRiotCivilCommotionMobActionGovtSubdivision(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclRiotCivilCommotionMobActionGovtSubdivision");
  }
  
  public productmodel.DirectGL7ManualPremium80Type getGL7ManualPremium80Term() {
    return (productmodel.DirectGL7ManualPremium80Type)getCovTerm("GL7ManualPremium80");
  }
  
  public boolean getHasGL7ManualPremium80Term() {
    return hasCovTerm("GL7ManualPremium80");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclRiotCivilCommotionMobActionGovtSubdivisionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclRiotCivilCommotionMobActionGovtSubdivision>() {
      public productmodel.GL7ExclRiotCivilCommotionMobActionGovtSubdivision newEmptyInstance() {
        return new productmodel.GL7ExclRiotCivilCommotionMobActionGovtSubdivision();
      }
      
      
    });
  }
}