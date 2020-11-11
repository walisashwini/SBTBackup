package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclY2KCompReltdOtherElectrProbWithExceptionFor.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclY2KCompReltdOtherElectrProbWithExceptionFor extends entity.GL7SublineTypeExcl {
  protected GL7ExclY2KCompReltdOtherElectrProbWithExceptionFor()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclY2KCompReltdOtherElectrProbWithExceptionFor(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclY2KCompReltdOtherElectrProbWithExceptionFor");
  }
  
  public GL7ExclY2KCompReltdOtherElectrProbWithExceptionFor(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclY2KCompReltdOtherElectrProbWithExceptionFor");
  }
  
  public productmodel.DirectGL7ManualPremium90Type getGL7ManualPremium90Term() {
    return (productmodel.DirectGL7ManualPremium90Type)getCovTerm("GL7ManualPremium90");
  }
  
  public boolean getHasGL7ManualPremium90Term() {
    return hasCovTerm("GL7ManualPremium90");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclY2KCompReltdOtherElectrProbWithExceptionForInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclY2KCompReltdOtherElectrProbWithExceptionFor>() {
      public productmodel.GL7ExclY2KCompReltdOtherElectrProbWithExceptionFor newEmptyInstance() {
        return new productmodel.GL7ExclY2KCompReltdOtherElectrProbWithExceptionFor();
      }
      
      
    });
  }
}