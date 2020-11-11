package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclInternetServicePrvdrsAndInternetAccessPrvdr.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclInternetServicePrvdrsAndInternetAccessPrvdr extends entity.GL7SublineTypeExcl {
  protected GL7ExclInternetServicePrvdrsAndInternetAccessPrvdr()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclInternetServicePrvdrsAndInternetAccessPrvdr(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclInternetServicePrvdrsAndInternetAccessPrvdr");
  }
  
  public GL7ExclInternetServicePrvdrsAndInternetAccessPrvdr(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclInternetServicePrvdrsAndInternetAccessPrvdr");
  }
  
  public productmodel.DirectGL7ManualPremium70Type getGL7ManualPremium70Term() {
    return (productmodel.DirectGL7ManualPremium70Type)getCovTerm("GL7ManualPremium70");
  }
  
  public boolean getHasGL7ManualPremium70Term() {
    return hasCovTerm("GL7ManualPremium70");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclInternetServicePrvdrsAndInternetAccessPrvdrInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclInternetServicePrvdrsAndInternetAccessPrvdr>() {
      public productmodel.GL7ExclInternetServicePrvdrsAndInternetAccessPrvdr newEmptyInstance() {
        return new productmodel.GL7ExclInternetServicePrvdrsAndInternetAccessPrvdr();
      }
      
      
    });
  }
}