package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7WaiverGovImmunity.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7WaiverGovImmunity extends entity.GL7SublineTypeCond {
  protected GL7WaiverGovImmunity()  {
    super((java.lang.Void)null);
  }
  
  public GL7WaiverGovImmunity(entity.PolicyPeriod branch)  {
    super(branch, "GL7WaiverGovImmunity");
  }
  
  public GL7WaiverGovImmunity(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7WaiverGovImmunity");
  }
  
  public productmodel.DirectGL7ManualPremium170Type getGL7ManualPremium170Term() {
    return (productmodel.DirectGL7ManualPremium170Type)getCovTerm("GL7ManualPremium170");
  }
  
  public boolean getHasGL7ManualPremium170Term() {
    return hasCovTerm("GL7ManualPremium170");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7WaiverGovImmunityInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7WaiverGovImmunity>() {
      public productmodel.GL7WaiverGovImmunity newEmptyInstance() {
        return new productmodel.GL7WaiverGovImmunity();
      }
      
      
    });
  }
}