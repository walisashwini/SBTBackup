package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclOfNewlyAcquiredOrganizationsAsInsureds.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclOfNewlyAcquiredOrganizationsAsInsureds extends entity.GL7SublineTypeExcl {
  protected GL7ExclOfNewlyAcquiredOrganizationsAsInsureds()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclOfNewlyAcquiredOrganizationsAsInsureds(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclOfNewlyAcquiredOrganizationsAsInsureds");
  }
  
  public GL7ExclOfNewlyAcquiredOrganizationsAsInsureds(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclOfNewlyAcquiredOrganizationsAsInsureds");
  }
  
  public productmodel.DirectGL7ManualPremium98Type getGL7ManualPremium98Term() {
    return (productmodel.DirectGL7ManualPremium98Type)getCovTerm("GL7ManualPremium98");
  }
  
  public boolean getHasGL7ManualPremium98Term() {
    return hasCovTerm("GL7ManualPremium98");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclOfNewlyAcquiredOrganizationsAsInsuredsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclOfNewlyAcquiredOrganizationsAsInsureds>() {
      public productmodel.GL7ExclOfNewlyAcquiredOrganizationsAsInsureds newEmptyInstance() {
        return new productmodel.GL7ExclOfNewlyAcquiredOrganizationsAsInsureds();
      }
      
      
    });
  }
}