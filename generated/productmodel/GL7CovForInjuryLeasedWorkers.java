package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CovForInjuryLeasedWorkers.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CovForInjuryLeasedWorkers extends entity.GL7SublineTypeCond {
  protected GL7CovForInjuryLeasedWorkers()  {
    super((java.lang.Void)null);
  }
  
  public GL7CovForInjuryLeasedWorkers(entity.PolicyPeriod branch)  {
    super(branch, "GL7CovForInjuryLeasedWorkers");
  }
  
  public GL7CovForInjuryLeasedWorkers(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CovForInjuryLeasedWorkers");
  }
  
  public productmodel.DirectGL7ManualPremium37Type getGL7ManualPremium37Term() {
    return (productmodel.DirectGL7ManualPremium37Type)getCovTerm("GL7ManualPremium37");
  }
  
  public boolean getHasGL7ManualPremium37Term() {
    return hasCovTerm("GL7ManualPremium37");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CovForInjuryLeasedWorkersInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CovForInjuryLeasedWorkers>() {
      public productmodel.GL7CovForInjuryLeasedWorkers newEmptyInstance() {
        return new productmodel.GL7CovForInjuryLeasedWorkers();
      }
      
      
    });
  }
}