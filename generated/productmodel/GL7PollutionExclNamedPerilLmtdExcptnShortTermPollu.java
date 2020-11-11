package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7PollutionExclNamedPerilLmtdExcptnShortTermPollu.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7PollutionExclNamedPerilLmtdExcptnShortTermPollu extends entity.GL7SublineTypeExcl {
  protected GL7PollutionExclNamedPerilLmtdExcptnShortTermPollu()  {
    super((java.lang.Void)null);
  }
  
  public GL7PollutionExclNamedPerilLmtdExcptnShortTermPollu(entity.PolicyPeriod branch)  {
    super(branch, "GL7PollutionExclNamedPerilLmtdExcptnShortTermPollu");
  }
  
  public GL7PollutionExclNamedPerilLmtdExcptnShortTermPollu(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7PollutionExclNamedPerilLmtdExcptnShortTermPollu");
  }
  
  public productmodel.DirectGL7ManualPremium141Type getGL7ManualPremium141Term() {
    return (productmodel.DirectGL7ManualPremium141Type)getCovTerm("GL7ManualPremium141");
  }
  
  public boolean getHasGL7ManualPremium141Term() {
    return hasCovTerm("GL7ManualPremium141");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7PollutionExclNamedPerilLmtdExcptnShortTermPolluInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7PollutionExclNamedPerilLmtdExcptnShortTermPollu>() {
      public productmodel.GL7PollutionExclNamedPerilLmtdExcptnShortTermPollu newEmptyInstance() {
        return new productmodel.GL7PollutionExclNamedPerilLmtdExcptnShortTermPollu();
      }
      
      
    });
  }
}