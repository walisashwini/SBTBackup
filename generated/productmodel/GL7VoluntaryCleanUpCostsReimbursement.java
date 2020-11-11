package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7VoluntaryCleanUpCostsReimbursement.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7VoluntaryCleanUpCostsReimbursement extends entity.GL7SublineTypeCov {
  protected GL7VoluntaryCleanUpCostsReimbursement()  {
    super((java.lang.Void)null);
  }
  
  public GL7VoluntaryCleanUpCostsReimbursement(entity.PolicyPeriod branch)  {
    super(branch, "GL7VoluntaryCleanUpCostsReimbursement");
  }
  
  public GL7VoluntaryCleanUpCostsReimbursement(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7VoluntaryCleanUpCostsReimbursement");
  }
  
  public productmodel.DirectGL7ManualPremium168Type getGL7ManualPremium168Term() {
    return (productmodel.DirectGL7ManualPremium168Type)getCovTerm("GL7ManualPremium168");
  }
  
  public boolean getHasGL7ManualPremium168Term() {
    return hasCovTerm("GL7ManualPremium168");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7VoluntaryCleanUpCostsReimbursementInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7VoluntaryCleanUpCostsReimbursement>() {
      public productmodel.GL7VoluntaryCleanUpCostsReimbursement newEmptyInstance() {
        return new productmodel.GL7VoluntaryCleanUpCostsReimbursement();
      }
      
      
    });
  }
}