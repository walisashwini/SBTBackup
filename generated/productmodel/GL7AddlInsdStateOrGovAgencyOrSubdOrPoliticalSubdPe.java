package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdStateOrGovAgencyOrSubdOrPoliticalSubdPe.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdStateOrGovAgencyOrSubdOrPoliticalSubdPe extends entity.GL7SublineTypeSchedCov {
  protected GL7AddlInsdStateOrGovAgencyOrSubdOrPoliticalSubdPe()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdStateOrGovAgencyOrSubdOrPoliticalSubdPe(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdStateOrGovAgencyOrSubdOrPoliticalSubdPe");
  }
  
  public GL7AddlInsdStateOrGovAgencyOrSubdOrPoliticalSubdPe(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdStateOrGovAgencyOrSubdOrPoliticalSubdPe");
  }
  
  public productmodel.DirectGL7ManualPremium259Type getGL7ManualPremium259Term() {
    return (productmodel.DirectGL7ManualPremium259Type)getCovTerm("GL7ManualPremium259");
  }
  
  public boolean getHasGL7ManualPremium259Term() {
    return hasCovTerm("GL7ManualPremium259");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdStateOrGovAgencyOrSubdOrPoliticalSubdPeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdStateOrGovAgencyOrSubdOrPoliticalSubdPe>() {
      public productmodel.GL7AddlInsdStateOrGovAgencyOrSubdOrPoliticalSubdPe newEmptyInstance() {
        return new productmodel.GL7AddlInsdStateOrGovAgencyOrSubdOrPoliticalSubdPe();
      }
      
      
    });
  }
}