package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ILChangesAdditionalInsuredCityOfChicagoScaffold.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ILChangesAdditionalInsuredCityOfChicagoScaffold extends entity.GL7SublineCov {
  protected GL7ILChangesAdditionalInsuredCityOfChicagoScaffold()  {
    super((java.lang.Void)null);
  }
  
  public GL7ILChangesAdditionalInsuredCityOfChicagoScaffold(entity.PolicyPeriod branch)  {
    super(branch, "GL7ILChangesAdditionalInsuredCityOfChicagoScaffold");
  }
  
  public GL7ILChangesAdditionalInsuredCityOfChicagoScaffold(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ILChangesAdditionalInsuredCityOfChicagoScaffold");
  }
  
  public productmodel.DirectGL7ManualPremium197Type getGL7ManualPremium197Term() {
    return (productmodel.DirectGL7ManualPremium197Type)getCovTerm("GL7ManualPremium197");
  }
  
  public boolean getHasGL7ManualPremium197Term() {
    return hasCovTerm("GL7ManualPremium197");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ILChangesAdditionalInsuredCityOfChicagoScaffoldInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ILChangesAdditionalInsuredCityOfChicagoScaffold>() {
      public productmodel.GL7ILChangesAdditionalInsuredCityOfChicagoScaffold newEmptyInstance() {
        return new productmodel.GL7ILChangesAdditionalInsuredCityOfChicagoScaffold();
      }
      
      
    });
  }
}