package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7UnmannedAircraftTerr.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7UnmannedAircraftTerr extends entity.GL7UnmannedAircraftCov {
  protected GL7UnmannedAircraftTerr()  {
    super((java.lang.Void)null);
  }
  
  public GL7UnmannedAircraftTerr(entity.PolicyPeriod branch)  {
    super(branch, "GL7UnmannedAircraftTerr");
  }
  
  public GL7UnmannedAircraftTerr(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7UnmannedAircraftTerr");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7UnmannedAircraftTerrInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7UnmannedAircraftTerr>() {
      public productmodel.GL7UnmannedAircraftTerr newEmptyInstance() {
        return new productmodel.GL7UnmannedAircraftTerr();
      }
      
      
    });
  }
}