package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdVolunteerWorkersLiquor.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdVolunteerWorkersLiquor extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdVolunteerWorkersLiquor()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdVolunteerWorkersLiquor(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdVolunteerWorkersLiquor");
  }
  
  public GL7AddlInsdVolunteerWorkersLiquor(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdVolunteerWorkersLiquor");
  }
  
  public productmodel.DirectGL7ManualPremium265Type getGL7ManualPremium265Term() {
    return (productmodel.DirectGL7ManualPremium265Type)getCovTerm("GL7ManualPremium265");
  }
  
  public boolean getHasGL7ManualPremium265Term() {
    return hasCovTerm("GL7ManualPremium265");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdVolunteerWorkersLiquorInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdVolunteerWorkersLiquor>() {
      public productmodel.GL7AddlInsdVolunteerWorkersLiquor newEmptyInstance() {
        return new productmodel.GL7AddlInsdVolunteerWorkersLiquor();
      }
      
      
    });
  }
}