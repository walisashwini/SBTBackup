package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclUndergroundStorageTankIncidents.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclUndergroundStorageTankIncidents extends entity.GL7SublineTypeExcl {
  protected GL7ExclUndergroundStorageTankIncidents()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclUndergroundStorageTankIncidents(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclUndergroundStorageTankIncidents");
  }
  
  public GL7ExclUndergroundStorageTankIncidents(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclUndergroundStorageTankIncidents");
  }
  
  public productmodel.DirectGL7ManualPremium86Type getGL7ManualPremium86Term() {
    return (productmodel.DirectGL7ManualPremium86Type)getCovTerm("GL7ManualPremium86");
  }
  
  public boolean getHasGL7ManualPremium86Term() {
    return hasCovTerm("GL7ManualPremium86");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclUndergroundStorageTankIncidentsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclUndergroundStorageTankIncidents>() {
      public productmodel.GL7ExclUndergroundStorageTankIncidents newEmptyInstance() {
        return new productmodel.GL7ExclUndergroundStorageTankIncidents();
      }
      
      
    });
  }
}