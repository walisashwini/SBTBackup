package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclUnmannedAircraftOwnersAndContractors.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclUnmannedAircraftOwnersAndContractors extends entity.GL7SublineTypeExcl {
  protected GL7ExclUnmannedAircraftOwnersAndContractors()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclUnmannedAircraftOwnersAndContractors(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclUnmannedAircraftOwnersAndContractors");
  }
  
  public GL7ExclUnmannedAircraftOwnersAndContractors(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclUnmannedAircraftOwnersAndContractors");
  }
  
  public productmodel.DirectGL7ManualPremium106Type getGL7ManualPremium106Term() {
    return (productmodel.DirectGL7ManualPremium106Type)getCovTerm("GL7ManualPremium106");
  }
  
  public boolean getHasGL7ManualPremium106Term() {
    return hasCovTerm("GL7ManualPremium106");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclUnmannedAircraftOwnersAndContractorsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclUnmannedAircraftOwnersAndContractors>() {
      public productmodel.GL7ExclUnmannedAircraftOwnersAndContractors newEmptyInstance() {
        return new productmodel.GL7ExclUnmannedAircraftOwnersAndContractors();
      }
      
      
    });
  }
}