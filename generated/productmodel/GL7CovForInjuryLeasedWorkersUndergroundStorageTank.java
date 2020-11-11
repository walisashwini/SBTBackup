package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CovForInjuryLeasedWorkersUndergroundStorageTank.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CovForInjuryLeasedWorkersUndergroundStorageTank extends entity.GL7SublineTypeCond {
  protected GL7CovForInjuryLeasedWorkersUndergroundStorageTank()  {
    super((java.lang.Void)null);
  }
  
  public GL7CovForInjuryLeasedWorkersUndergroundStorageTank(entity.PolicyPeriod branch)  {
    super(branch, "GL7CovForInjuryLeasedWorkersUndergroundStorageTank");
  }
  
  public GL7CovForInjuryLeasedWorkersUndergroundStorageTank(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CovForInjuryLeasedWorkersUndergroundStorageTank");
  }
  
  public productmodel.DirectGL7ManualPremium38Type getGL7ManualPremium38Term() {
    return (productmodel.DirectGL7ManualPremium38Type)getCovTerm("GL7ManualPremium38");
  }
  
  public boolean getHasGL7ManualPremium38Term() {
    return hasCovTerm("GL7ManualPremium38");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CovForInjuryLeasedWorkersUndergroundStorageTankInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CovForInjuryLeasedWorkersUndergroundStorageTank>() {
      public productmodel.GL7CovForInjuryLeasedWorkersUndergroundStorageTank newEmptyInstance() {
        return new productmodel.GL7CovForInjuryLeasedWorkersUndergroundStorageTank();
      }
      
      
    });
  }
}