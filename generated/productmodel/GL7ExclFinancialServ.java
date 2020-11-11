package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclFinancialServ.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclFinancialServ extends entity.GL7SublineTypeExcl {
  protected GL7ExclFinancialServ()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclFinancialServ(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclFinancialServ");
  }
  
  public GL7ExclFinancialServ(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclFinancialServ");
  }
  
  public productmodel.DirectGL7ManualPremium66Type getGL7ManualPremium66Term() {
    return (productmodel.DirectGL7ManualPremium66Type)getCovTerm("GL7ManualPremium66");
  }
  
  public boolean getHasGL7ManualPremium66Term() {
    return hasCovTerm("GL7ManualPremium66");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclFinancialServInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclFinancialServ>() {
      public productmodel.GL7ExclFinancialServ newEmptyInstance() {
        return new productmodel.GL7ExclFinancialServ();
      }
      
      
    });
  }
}