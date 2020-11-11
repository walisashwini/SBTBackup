package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclDesignatedProds.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclDesignatedProds extends entity.GL7SublineTypeSchedExcl {
  protected GL7ExclDesignatedProds()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclDesignatedProds(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclDesignatedProds");
  }
  
  public GL7ExclDesignatedProds(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclDesignatedProds");
  }
  
  public productmodel.DirectGL7ManualPremium59Type getGL7ManualPremium59Term() {
    return (productmodel.DirectGL7ManualPremium59Type)getCovTerm("GL7ManualPremium59");
  }
  
  public boolean getHasGL7ManualPremium59Term() {
    return hasCovTerm("GL7ManualPremium59");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclDesignatedProdsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclDesignatedProds>() {
      public productmodel.GL7ExclDesignatedProds newEmptyInstance() {
        return new productmodel.GL7ExclDesignatedProds();
      }
      
      
    });
  }
}