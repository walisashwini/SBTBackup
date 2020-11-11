package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed4.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed4 extends entity.GL7SublineTypeCov {
  protected GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed4()  {
    super((java.lang.Void)null);
  }
  
  public GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed4(entity.PolicyPeriod branch)  {
    super(branch, "GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed4");
  }
  
  public GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed4(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed4");
  }
  
  public productmodel.DirectGL7ManualPremium283Type getGL7ManualPremium283Term() {
    return (productmodel.DirectGL7ManualPremium283Type)getCovTerm("GL7ManualPremium283");
  }
  
  public boolean getHasGL7ManualPremium283Term() {
    return hasCovTerm("GL7ManualPremium283");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed4InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed4>() {
      public productmodel.GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed4 newEmptyInstance() {
        return new productmodel.GL7AutomaticInsuredStatusForNewlyAcquiredOrFormed4();
      }
      
      
    });
  }
}