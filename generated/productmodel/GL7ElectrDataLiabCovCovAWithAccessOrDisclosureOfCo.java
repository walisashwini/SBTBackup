package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ElectrDataLiabCovCovAWithAccessOrDisclosureOfCo.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ElectrDataLiabCovCovAWithAccessOrDisclosureOfCo extends entity.GL7SublineTypeCov {
  protected GL7ElectrDataLiabCovCovAWithAccessOrDisclosureOfCo()  {
    super((java.lang.Void)null);
  }
  
  public GL7ElectrDataLiabCovCovAWithAccessOrDisclosureOfCo(entity.PolicyPeriod branch)  {
    super(branch, "GL7ElectrDataLiabCovCovAWithAccessOrDisclosureOfCo");
  }
  
  public GL7ElectrDataLiabCovCovAWithAccessOrDisclosureOfCo(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ElectrDataLiabCovCovAWithAccessOrDisclosureOfCo");
  }
  
  public productmodel.DirectGL7Limit8Type getGL7Limit8Term() {
    return (productmodel.DirectGL7Limit8Type)getCovTerm("GL7Limit8");
  }
  
  public productmodel.DirectGL7ManualPremium323Type getGL7ManualPremium323Term() {
    return (productmodel.DirectGL7ManualPremium323Type)getCovTerm("GL7ManualPremium323");
  }
  
  public boolean getHasGL7Limit8Term() {
    return hasCovTerm("GL7Limit8");
  }
  
  public boolean getHasGL7ManualPremium323Term() {
    return hasCovTerm("GL7ManualPremium323");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ElectrDataLiabCovCovAWithAccessOrDisclosureOfCoInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ElectrDataLiabCovCovAWithAccessOrDisclosureOfCo>() {
      public productmodel.GL7ElectrDataLiabCovCovAWithAccessOrDisclosureOfCo newEmptyInstance() {
        return new productmodel.GL7ElectrDataLiabCovCovAWithAccessOrDisclosureOfCo();
      }
      
      
    });
  }
}