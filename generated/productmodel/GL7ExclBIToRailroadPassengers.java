package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclBIToRailroadPassengers.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclBIToRailroadPassengers extends entity.GL7SublineTypeExcl {
  protected GL7ExclBIToRailroadPassengers()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclBIToRailroadPassengers(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclBIToRailroadPassengers");
  }
  
  public GL7ExclBIToRailroadPassengers(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclBIToRailroadPassengers");
  }
  
  public productmodel.DirectGL7ManualPremium52Type getGL7ManualPremium52Term() {
    return (productmodel.DirectGL7ManualPremium52Type)getCovTerm("GL7ManualPremium52");
  }
  
  public boolean getHasGL7ManualPremium52Term() {
    return hasCovTerm("GL7ManualPremium52");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclBIToRailroadPassengersInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclBIToRailroadPassengers>() {
      public productmodel.GL7ExclBIToRailroadPassengers newEmptyInstance() {
        return new productmodel.GL7ExclBIToRailroadPassengers();
      }
      
      
    });
  }
}