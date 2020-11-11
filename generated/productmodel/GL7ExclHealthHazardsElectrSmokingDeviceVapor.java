package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclHealthHazardsElectrSmokingDeviceVapor.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclHealthHazardsElectrSmokingDeviceVapor extends entity.GL7SublineTypeExcl {
  protected GL7ExclHealthHazardsElectrSmokingDeviceVapor()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclHealthHazardsElectrSmokingDeviceVapor(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclHealthHazardsElectrSmokingDeviceVapor");
  }
  
  public GL7ExclHealthHazardsElectrSmokingDeviceVapor(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclHealthHazardsElectrSmokingDeviceVapor");
  }
  
  public productmodel.DirectGL7ManualPremium360Type getGL7ManualPremium360Term() {
    return (productmodel.DirectGL7ManualPremium360Type)getCovTerm("GL7ManualPremium360");
  }
  
  public boolean getHasGL7ManualPremium360Term() {
    return hasCovTerm("GL7ManualPremium360");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclHealthHazardsElectrSmokingDeviceVaporInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclHealthHazardsElectrSmokingDeviceVapor>() {
      public productmodel.GL7ExclHealthHazardsElectrSmokingDeviceVapor newEmptyInstance() {
        return new productmodel.GL7ExclHealthHazardsElectrSmokingDeviceVapor();
      }
      
      
    });
  }
}