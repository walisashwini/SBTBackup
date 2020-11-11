package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7DamageToPremisesRentedToYouGovSubdivision.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7DamageToPremisesRentedToYouGovSubdivision extends entity.GL7SublineCov {
  protected GL7DamageToPremisesRentedToYouGovSubdivision()  {
    super((java.lang.Void)null);
  }
  
  public GL7DamageToPremisesRentedToYouGovSubdivision(entity.PolicyPeriod branch)  {
    super(branch, "GL7DamageToPremisesRentedToYouGovSubdivision");
  }
  
  public GL7DamageToPremisesRentedToYouGovSubdivision(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7DamageToPremisesRentedToYouGovSubdivision");
  }
  
  public productmodel.OptionGL7LimitGovSubdivisionType getGL7LimitGovSubdivisionTerm() {
    return (productmodel.OptionGL7LimitGovSubdivisionType)getCovTerm("GL7LimitGovSubdivision");
  }
  
  public boolean getHasGL7LimitGovSubdivisionTerm() {
    return hasCovTerm("GL7LimitGovSubdivision");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7DamageToPremisesRentedToYouGovSubdivisionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7DamageToPremisesRentedToYouGovSubdivision>() {
      public productmodel.GL7DamageToPremisesRentedToYouGovSubdivision newEmptyInstance() {
        return new productmodel.GL7DamageToPremisesRentedToYouGovSubdivision();
      }
      
      
    });
  }
}