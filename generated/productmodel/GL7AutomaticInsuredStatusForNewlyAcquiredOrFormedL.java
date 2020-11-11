package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AutomaticInsuredStatusForNewlyAcquiredOrFormedL.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AutomaticInsuredStatusForNewlyAcquiredOrFormedL extends entity.GL7SublineTypeCov {
  protected GL7AutomaticInsuredStatusForNewlyAcquiredOrFormedL()  {
    super((java.lang.Void)null);
  }
  
  public GL7AutomaticInsuredStatusForNewlyAcquiredOrFormedL(entity.PolicyPeriod branch)  {
    super(branch, "GL7AutomaticInsuredStatusForNewlyAcquiredOrFormedL");
  }
  
  public GL7AutomaticInsuredStatusForNewlyAcquiredOrFormedL(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AutomaticInsuredStatusForNewlyAcquiredOrFormedL");
  }
  
  public productmodel.DirectGL7ManualPremium276Type getGL7ManualPremium276Term() {
    return (productmodel.DirectGL7ManualPremium276Type)getCovTerm("GL7ManualPremium276");
  }
  
  public boolean getHasGL7ManualPremium276Term() {
    return hasCovTerm("GL7ManualPremium276");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AutomaticInsuredStatusForNewlyAcquiredOrFormedLInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AutomaticInsuredStatusForNewlyAcquiredOrFormedL>() {
      public productmodel.GL7AutomaticInsuredStatusForNewlyAcquiredOrFormedL newEmptyInstance() {
        return new productmodel.GL7AutomaticInsuredStatusForNewlyAcquiredOrFormedL();
      }
      
      
    });
  }
}