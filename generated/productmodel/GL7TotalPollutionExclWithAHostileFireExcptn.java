package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7TotalPollutionExclWithAHostileFireExcptn.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7TotalPollutionExclWithAHostileFireExcptn extends entity.GL7SublineTypeExcl {
  protected GL7TotalPollutionExclWithAHostileFireExcptn()  {
    super((java.lang.Void)null);
  }
  
  public GL7TotalPollutionExclWithAHostileFireExcptn(entity.PolicyPeriod branch)  {
    super(branch, "GL7TotalPollutionExclWithAHostileFireExcptn");
  }
  
  public GL7TotalPollutionExclWithAHostileFireExcptn(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7TotalPollutionExclWithAHostileFireExcptn");
  }
  
  public productmodel.DirectGL7ManualPremium164Type getGL7ManualPremium164Term() {
    return (productmodel.DirectGL7ManualPremium164Type)getCovTerm("GL7ManualPremium164");
  }
  
  public boolean getHasGL7ManualPremium164Term() {
    return hasCovTerm("GL7ManualPremium164");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7TotalPollutionExclWithAHostileFireExcptnInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7TotalPollutionExclWithAHostileFireExcptn>() {
      public productmodel.GL7TotalPollutionExclWithAHostileFireExcptn newEmptyInstance() {
        return new productmodel.GL7TotalPollutionExclWithAHostileFireExcptn();
      }
      
      
    });
  }
}