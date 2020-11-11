package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7PollutionExclLmtdExceptionShortTermEvent.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7PollutionExclLmtdExceptionShortTermEvent extends entity.GL7SublineTypeExcl {
  protected GL7PollutionExclLmtdExceptionShortTermEvent()  {
    super((java.lang.Void)null);
  }
  
  public GL7PollutionExclLmtdExceptionShortTermEvent(entity.PolicyPeriod branch)  {
    super(branch, "GL7PollutionExclLmtdExceptionShortTermEvent");
  }
  
  public GL7PollutionExclLmtdExceptionShortTermEvent(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7PollutionExclLmtdExceptionShortTermEvent");
  }
  
  public productmodel.DirectGL7ManualPremium140Type getGL7ManualPremium140Term() {
    return (productmodel.DirectGL7ManualPremium140Type)getCovTerm("GL7ManualPremium140");
  }
  
  public boolean getHasGL7ManualPremium140Term() {
    return hasCovTerm("GL7ManualPremium140");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7PollutionExclLmtdExceptionShortTermEventInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7PollutionExclLmtdExceptionShortTermEvent>() {
      public productmodel.GL7PollutionExclLmtdExceptionShortTermEvent newEmptyInstance() {
        return new productmodel.GL7PollutionExclLmtdExceptionShortTermEvent();
      }
      
      
    });
  }
}