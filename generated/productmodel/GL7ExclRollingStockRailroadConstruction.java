package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclRollingStockRailroadConstruction.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclRollingStockRailroadConstruction extends entity.GL7SublineTypeExcl {
  protected GL7ExclRollingStockRailroadConstruction()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclRollingStockRailroadConstruction(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclRollingStockRailroadConstruction");
  }
  
  public GL7ExclRollingStockRailroadConstruction(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclRollingStockRailroadConstruction");
  }
  
  public productmodel.DirectGL7ManualPremium81Type getGL7ManualPremium81Term() {
    return (productmodel.DirectGL7ManualPremium81Type)getCovTerm("GL7ManualPremium81");
  }
  
  public boolean getHasGL7ManualPremium81Term() {
    return hasCovTerm("GL7ManualPremium81");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclRollingStockRailroadConstructionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclRollingStockRailroadConstruction>() {
      public productmodel.GL7ExclRollingStockRailroadConstruction newEmptyInstance() {
        return new productmodel.GL7ExclRollingStockRailroadConstruction();
      }
      
      
    });
  }
}