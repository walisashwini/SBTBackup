package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AbuseOrMolestationExclSpecifiedProfessionalServ.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AbuseOrMolestationExclSpecifiedProfessionalServ extends entity.GL7SublineTypeSchedExcl {
  protected GL7AbuseOrMolestationExclSpecifiedProfessionalServ()  {
    super((java.lang.Void)null);
  }
  
  public GL7AbuseOrMolestationExclSpecifiedProfessionalServ(entity.PolicyPeriod branch)  {
    super(branch, "GL7AbuseOrMolestationExclSpecifiedProfessionalServ");
  }
  
  public GL7AbuseOrMolestationExclSpecifiedProfessionalServ(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AbuseOrMolestationExclSpecifiedProfessionalServ");
  }
  
  public productmodel.DirectGL7ManualPremium1Type getGL7ManualPremium1Term() {
    return (productmodel.DirectGL7ManualPremium1Type)getCovTerm("GL7ManualPremium1");
  }
  
  public boolean getHasGL7ManualPremium1Term() {
    return hasCovTerm("GL7ManualPremium1");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AbuseOrMolestationExclSpecifiedProfessionalServInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AbuseOrMolestationExclSpecifiedProfessionalServ>() {
      public productmodel.GL7AbuseOrMolestationExclSpecifiedProfessionalServ newEmptyInstance() {
        return new productmodel.GL7AbuseOrMolestationExclSpecifiedProfessionalServ();
      }
      
      
    });
  }
}