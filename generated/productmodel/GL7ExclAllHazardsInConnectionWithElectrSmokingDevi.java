package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclAllHazardsInConnectionWithElectrSmokingDevi.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclAllHazardsInConnectionWithElectrSmokingDevi extends entity.GL7SublineTypeExcl {
  protected GL7ExclAllHazardsInConnectionWithElectrSmokingDevi()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclAllHazardsInConnectionWithElectrSmokingDevi(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclAllHazardsInConnectionWithElectrSmokingDevi");
  }
  
  public GL7ExclAllHazardsInConnectionWithElectrSmokingDevi(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclAllHazardsInConnectionWithElectrSmokingDevi");
  }
  
  public productmodel.DirectGL7ManualPremium333Type getGL7ManualPremium333Term() {
    return (productmodel.DirectGL7ManualPremium333Type)getCovTerm("GL7ManualPremium333");
  }
  
  public boolean getHasGL7ManualPremium333Term() {
    return hasCovTerm("GL7ManualPremium333");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclAllHazardsInConnectionWithElectrSmokingDeviInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclAllHazardsInConnectionWithElectrSmokingDevi>() {
      public productmodel.GL7ExclAllHazardsInConnectionWithElectrSmokingDevi newEmptyInstance() {
        return new productmodel.GL7ExclAllHazardsInConnectionWithElectrSmokingDevi();
      }
      
      
    });
  }
}