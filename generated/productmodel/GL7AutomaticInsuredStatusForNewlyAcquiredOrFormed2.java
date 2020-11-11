package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed2.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed2 extends entity.GL7SublineTypeCov {
  protected GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed2()  {
    super((java.lang.Void)null);
  }
  
  public GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed2(entity.PolicyPeriod branch)  {
    super(branch, "GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed2");
  }
  
  public GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed2(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed2");
  }
  
  public productmodel.DirectGL7ManualPremium279Type getGL7ManualPremium279Term() {
    return (productmodel.DirectGL7ManualPremium279Type)getCovTerm("GL7ManualPremium279");
  }
  
  public boolean getHasGL7ManualPremium279Term() {
    return hasCovTerm("GL7ManualPremium279");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed2InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed2>() {
      public productmodel.GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed2 newEmptyInstance() {
        return new productmodel.GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed2();
      }
      
      
    });
  }
}