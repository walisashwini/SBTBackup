package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclUnmannedAircraftRailroad.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclUnmannedAircraftRailroad extends entity.GL7SublineTypeExcl {
  protected GL7ExclUnmannedAircraftRailroad()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclUnmannedAircraftRailroad(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclUnmannedAircraftRailroad");
  }
  
  public GL7ExclUnmannedAircraftRailroad(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclUnmannedAircraftRailroad");
  }
  
  public productmodel.DirectGL7ManualPremium372Type getGL7ManualPremium372Term() {
    return (productmodel.DirectGL7ManualPremium372Type)getCovTerm("GL7ManualPremium372");
  }
  
  public boolean getHasGL7ManualPremium372Term() {
    return hasCovTerm("GL7ManualPremium372");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclUnmannedAircraftRailroadInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclUnmannedAircraftRailroad>() {
      public productmodel.GL7ExclUnmannedAircraftRailroad newEmptyInstance() {
        return new productmodel.GL7ExclUnmannedAircraftRailroad();
      }
      
      
    });
  }
}