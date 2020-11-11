package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclDescribedHazardsCarnivalsCircusesFairs.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclDescribedHazardsCarnivalsCircusesFairs extends entity.GL7SublineTypeExcl {
  protected GL7ExclDescribedHazardsCarnivalsCircusesFairs()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclDescribedHazardsCarnivalsCircusesFairs(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclDescribedHazardsCarnivalsCircusesFairs");
  }
  
  public GL7ExclDescribedHazardsCarnivalsCircusesFairs(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclDescribedHazardsCarnivalsCircusesFairs");
  }
  
  public productmodel.DirectGL7ManualPremium56Type getGL7ManualPremium56Term() {
    return (productmodel.DirectGL7ManualPremium56Type)getCovTerm("GL7ManualPremium56");
  }
  
  public boolean getHasGL7ManualPremium56Term() {
    return hasCovTerm("GL7ManualPremium56");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclDescribedHazardsCarnivalsCircusesFairsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclDescribedHazardsCarnivalsCircusesFairs>() {
      public productmodel.GL7ExclDescribedHazardsCarnivalsCircusesFairs newEmptyInstance() {
        return new productmodel.GL7ExclDescribedHazardsCarnivalsCircusesFairs();
      }
      
      
    });
  }
}