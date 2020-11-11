package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed1 extends entity.GL7SublineTypeCov {
  protected GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed1()  {
    super((java.lang.Void)null);
  }
  
  public GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed1(entity.PolicyPeriod branch)  {
    super(branch, "GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed1");
  }
  
  public GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed1");
  }
  
  public productmodel.DirectGL7ManualPremium281Type getGL7ManualPremium281Term() {
    return (productmodel.DirectGL7ManualPremium281Type)getCovTerm("GL7ManualPremium281");
  }
  
  public boolean getHasGL7ManualPremium281Term() {
    return hasCovTerm("GL7ManualPremium281");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed1>() {
      public productmodel.GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed1 newEmptyInstance() {
        return new productmodel.GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed1();
      }
      
      
    });
  }
}