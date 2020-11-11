package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclMedPayToChildrenDayCareCenters.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclMedPayToChildrenDayCareCenters extends entity.GL7SublineTypeExcl {
  protected GL7ExclMedPayToChildrenDayCareCenters()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclMedPayToChildrenDayCareCenters(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclMedPayToChildrenDayCareCenters");
  }
  
  public GL7ExclMedPayToChildrenDayCareCenters(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclMedPayToChildrenDayCareCenters");
  }
  
  public productmodel.DirectGL7ManualPremium3Type getGL7ManualPremium3Term() {
    return (productmodel.DirectGL7ManualPremium3Type)getCovTerm("GL7ManualPremium3");
  }
  
  public boolean getHasGL7ManualPremium3Term() {
    return hasCovTerm("GL7ManualPremium3");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclMedPayToChildrenDayCareCentersInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclMedPayToChildrenDayCareCenters>() {
      public productmodel.GL7ExclMedPayToChildrenDayCareCenters newEmptyInstance() {
        return new productmodel.GL7ExclMedPayToChildrenDayCareCenters();
      }
      
      
    });
  }
}