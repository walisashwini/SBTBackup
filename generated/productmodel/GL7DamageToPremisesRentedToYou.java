package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7DamageToPremisesRentedToYou.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7DamageToPremisesRentedToYou extends entity.GL7SublineTypeCov {
  protected GL7DamageToPremisesRentedToYou()  {
    super((java.lang.Void)null);
  }
  
  public GL7DamageToPremisesRentedToYou(entity.PolicyPeriod branch)  {
    super(branch, "GL7DamageToPremisesRentedToYou");
  }
  
  public GL7DamageToPremisesRentedToYou(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7DamageToPremisesRentedToYou");
  }
  
  public productmodel.OptionGL7LimitType getGL7LimitTerm() {
    return (productmodel.OptionGL7LimitType)getCovTerm("GL7Limit");
  }
  
  public boolean getHasGL7LimitTerm() {
    return hasCovTerm("GL7Limit");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7DamageToPremisesRentedToYouInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7DamageToPremisesRentedToYou>() {
      public productmodel.GL7DamageToPremisesRentedToYou newEmptyInstance() {
        return new productmodel.GL7DamageToPremisesRentedToYou();
      }
      
      
    });
  }
}