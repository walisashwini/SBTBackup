package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7PollutionExclLmtdExceptionForDesigntdPollutants.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7PollutionExclLmtdExceptionForDesigntdPollutants extends entity.GL7SublineTypeSchedExcl {
  protected GL7PollutionExclLmtdExceptionForDesigntdPollutants()  {
    super((java.lang.Void)null);
  }
  
  public GL7PollutionExclLmtdExceptionForDesigntdPollutants(entity.PolicyPeriod branch)  {
    super(branch, "GL7PollutionExclLmtdExceptionForDesigntdPollutants");
  }
  
  public GL7PollutionExclLmtdExceptionForDesigntdPollutants(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7PollutionExclLmtdExceptionForDesigntdPollutants");
  }
  
  public productmodel.DirectGL7ManualPremium139Type getGL7ManualPremium139Term() {
    return (productmodel.DirectGL7ManualPremium139Type)getCovTerm("GL7ManualPremium139");
  }
  
  public boolean getHasGL7ManualPremium139Term() {
    return hasCovTerm("GL7ManualPremium139");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7PollutionExclLmtdExceptionForDesigntdPollutantsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7PollutionExclLmtdExceptionForDesigntdPollutants>() {
      public productmodel.GL7PollutionExclLmtdExceptionForDesigntdPollutants newEmptyInstance() {
        return new productmodel.GL7PollutionExclLmtdExceptionForDesigntdPollutants();
      }
      
      
    });
  }
}