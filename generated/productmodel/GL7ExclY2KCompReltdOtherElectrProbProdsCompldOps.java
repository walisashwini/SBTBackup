package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclY2KCompReltdOtherElectrProbProdsCompldOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclY2KCompReltdOtherElectrProbProdsCompldOps extends entity.GL7SublineTypeExcl {
  protected GL7ExclY2KCompReltdOtherElectrProbProdsCompldOps()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclY2KCompReltdOtherElectrProbProdsCompldOps(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclY2KCompReltdOtherElectrProbProdsCompldOps");
  }
  
  public GL7ExclY2KCompReltdOtherElectrProbProdsCompldOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclY2KCompReltdOtherElectrProbProdsCompldOps");
  }
  
  public productmodel.DirectGL7ManualPremium89Type getGL7ManualPremium89Term() {
    return (productmodel.DirectGL7ManualPremium89Type)getCovTerm("GL7ManualPremium89");
  }
  
  public boolean getHasGL7ManualPremium89Term() {
    return hasCovTerm("GL7ManualPremium89");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclY2KCompReltdOtherElectrProbProdsCompldOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclY2KCompReltdOtherElectrProbProdsCompldOps>() {
      public productmodel.GL7ExclY2KCompReltdOtherElectrProbProdsCompldOps newEmptyInstance() {
        return new productmodel.GL7ExclY2KCompReltdOtherElectrProbProdsCompldOps();
      }
      
      
    });
  }
}