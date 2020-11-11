package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclNewEntities.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclNewEntities extends entity.GL7SublineTypeExcl {
  protected GL7ExclNewEntities()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclNewEntities(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclNewEntities");
  }
  
  public GL7ExclNewEntities(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclNewEntities");
  }
  
  public productmodel.DirectGL7ManualPremium72Type getGL7ManualPremium72Term() {
    return (productmodel.DirectGL7ManualPremium72Type)getCovTerm("GL7ManualPremium72");
  }
  
  public boolean getHasGL7ManualPremium72Term() {
    return hasCovTerm("GL7ManualPremium72");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclNewEntitiesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclNewEntities>() {
      public productmodel.GL7ExclNewEntities newEmptyInstance() {
        return new productmodel.GL7ExclNewEntities();
      }
      
      
    });
  }
}