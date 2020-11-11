package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CannabisExclOwnersContractors.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CannabisExclOwnersContractors extends entity.GL7SublineTypeExcl {
  protected GL7CannabisExclOwnersContractors()  {
    super((java.lang.Void)null);
  }
  
  public GL7CannabisExclOwnersContractors(entity.PolicyPeriod branch)  {
    super(branch, "GL7CannabisExclOwnersContractors");
  }
  
  public GL7CannabisExclOwnersContractors(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CannabisExclOwnersContractors");
  }
  
  public productmodel.DirectGL7ManualPremium293Type getGL7ManualPremium293Term() {
    return (productmodel.DirectGL7ManualPremium293Type)getCovTerm("GL7ManualPremium293");
  }
  
  public boolean getHasGL7ManualPremium293Term() {
    return hasCovTerm("GL7ManualPremium293");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CannabisExclOwnersContractorsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CannabisExclOwnersContractors>() {
      public productmodel.GL7CannabisExclOwnersContractors newEmptyInstance() {
        return new productmodel.GL7CannabisExclOwnersContractors();
      }
      
      
    });
  }
}