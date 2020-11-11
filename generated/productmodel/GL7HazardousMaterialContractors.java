package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7HazardousMaterialContractors.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7HazardousMaterialContractors extends entity.GL7SublineTypeCov {
  protected GL7HazardousMaterialContractors()  {
    super((java.lang.Void)null);
  }
  
  public GL7HazardousMaterialContractors(entity.PolicyPeriod branch)  {
    super(branch, "GL7HazardousMaterialContractors");
  }
  
  public GL7HazardousMaterialContractors(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7HazardousMaterialContractors");
  }
  
  public productmodel.DirectGL7ManualPremium115Type getGL7ManualPremium115Term() {
    return (productmodel.DirectGL7ManualPremium115Type)getCovTerm("GL7ManualPremium115");
  }
  
  public boolean getHasGL7ManualPremium115Term() {
    return hasCovTerm("GL7ManualPremium115");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7HazardousMaterialContractorsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7HazardousMaterialContractors>() {
      public productmodel.GL7HazardousMaterialContractors newEmptyInstance() {
        return new productmodel.GL7HazardousMaterialContractors();
      }
      
      
    });
  }
}