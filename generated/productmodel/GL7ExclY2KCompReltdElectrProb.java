package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclY2KCompReltdElectrProb.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclY2KCompReltdElectrProb extends entity.GL7SublineTypeExcl {
  protected GL7ExclY2KCompReltdElectrProb()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclY2KCompReltdElectrProb(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclY2KCompReltdElectrProb");
  }
  
  public GL7ExclY2KCompReltdElectrProb(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclY2KCompReltdElectrProb");
  }
  
  public productmodel.DirectGL7ManualPremium88Type getGL7ManualPremium88Term() {
    return (productmodel.DirectGL7ManualPremium88Type)getCovTerm("GL7ManualPremium88");
  }
  
  public boolean getHasGL7ManualPremium88Term() {
    return hasCovTerm("GL7ManualPremium88");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclY2KCompReltdElectrProbInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclY2KCompReltdElectrProb>() {
      public productmodel.GL7ExclY2KCompReltdElectrProb newEmptyInstance() {
        return new productmodel.GL7ExclY2KCompReltdElectrProb();
      }
      
      
    });
  }
}