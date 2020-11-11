package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed3.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed3 extends entity.GL7SublineTypeCov {
  protected GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed3()  {
    super((java.lang.Void)null);
  }
  
  public GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed3(entity.PolicyPeriod branch)  {
    super(branch, "GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed3");
  }
  
  public GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed3(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed3");
  }
  
  public productmodel.DirectGL7ManualPremium287Type getGL7ManualPremium287Term() {
    return (productmodel.DirectGL7ManualPremium287Type)getCovTerm("GL7ManualPremium287");
  }
  
  public boolean getHasGL7ManualPremium287Term() {
    return hasCovTerm("GL7ManualPremium287");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed3InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed3>() {
      public productmodel.GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed3 newEmptyInstance() {
        return new productmodel.GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed3();
      }
      
      
    });
  }
}