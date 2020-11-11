package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor extends entity.GL7LocationSchedCov {
  protected GL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor");
  }
  
  public GL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor");
  }
  
  public productmodel.DirectGL7ManualPremium247Type getGL7ManualPremium247Term() {
    return (productmodel.DirectGL7ManualPremium247Type)getCovTerm("GL7ManualPremium247");
  }
  
  public boolean getHasGL7ManualPremium247Term() {
    return hasCovTerm("GL7ManualPremium247");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquorInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor>() {
      public productmodel.GL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor newEmptyInstance() {
        return new productmodel.GL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor();
      }
      
      
    });
  }
}