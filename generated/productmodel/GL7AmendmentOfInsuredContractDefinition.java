package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmendmentOfInsuredContractDefinition.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmendmentOfInsuredContractDefinition extends entity.GL7SublineTypeCov {
  protected GL7AmendmentOfInsuredContractDefinition()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmendmentOfInsuredContractDefinition(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmendmentOfInsuredContractDefinition");
  }
  
  public GL7AmendmentOfInsuredContractDefinition(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmendmentOfInsuredContractDefinition");
  }
  
  public productmodel.DirectGL7ManualPremium11Type getGL7ManualPremium11Term() {
    return (productmodel.DirectGL7ManualPremium11Type)getCovTerm("GL7ManualPremium11");
  }
  
  public boolean getHasGL7ManualPremium11Term() {
    return hasCovTerm("GL7ManualPremium11");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmendmentOfInsuredContractDefinitionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmendmentOfInsuredContractDefinition>() {
      public productmodel.GL7AmendmentOfInsuredContractDefinition newEmptyInstance() {
        return new productmodel.GL7AmendmentOfInsuredContractDefinition();
      }
      
      
    });
  }
}