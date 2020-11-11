package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclAdultDayCareCenters.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclAdultDayCareCenters extends entity.GL7SublineTypeExcl {
  protected GL7ExclAdultDayCareCenters()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclAdultDayCareCenters(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclAdultDayCareCenters");
  }
  
  public GL7ExclAdultDayCareCenters(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclAdultDayCareCenters");
  }
  
  public productmodel.DirectGL7ManualPremium50Type getGL7ManualPremium50Term() {
    return (productmodel.DirectGL7ManualPremium50Type)getCovTerm("GL7ManualPremium50");
  }
  
  public boolean getHasGL7ManualPremium50Term() {
    return hasCovTerm("GL7ManualPremium50");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclAdultDayCareCentersInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclAdultDayCareCenters>() {
      public productmodel.GL7ExclAdultDayCareCenters newEmptyInstance() {
        return new productmodel.GL7ExclAdultDayCareCenters();
      }
      
      
    });
  }
}