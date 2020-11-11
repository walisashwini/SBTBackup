package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclDamageToPremRentedToYou.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclDamageToPremRentedToYou extends entity.GL7SublineTypeExcl {
  protected GL7ExclDamageToPremRentedToYou()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclDamageToPremRentedToYou(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclDamageToPremRentedToYou");
  }
  
  public GL7ExclDamageToPremRentedToYou(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclDamageToPremRentedToYou");
  }
  
  public productmodel.DirectGL7ManualPremium54Type getGL7ManualPremium54Term() {
    return (productmodel.DirectGL7ManualPremium54Type)getCovTerm("GL7ManualPremium54");
  }
  
  public boolean getHasGL7ManualPremium54Term() {
    return hasCovTerm("GL7ManualPremium54");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclDamageToPremRentedToYouInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclDamageToPremRentedToYou>() {
      public productmodel.GL7ExclDamageToPremRentedToYou newEmptyInstance() {
        return new productmodel.GL7ExclDamageToPremRentedToYou();
      }
      
      
    });
  }
}