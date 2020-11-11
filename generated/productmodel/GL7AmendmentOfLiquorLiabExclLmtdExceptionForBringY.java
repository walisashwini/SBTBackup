package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmendmentOfLiquorLiabExclLmtdExceptionForBringY.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmendmentOfLiquorLiabExclLmtdExceptionForBringY extends entity.GL7SublineTypeCov {
  protected GL7AmendmentOfLiquorLiabExclLmtdExceptionForBringY()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmendmentOfLiquorLiabExclLmtdExceptionForBringY(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmendmentOfLiquorLiabExclLmtdExceptionForBringY");
  }
  
  public GL7AmendmentOfLiquorLiabExclLmtdExceptionForBringY(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmendmentOfLiquorLiabExclLmtdExceptionForBringY");
  }
  
  public productmodel.DirectGL7ManualPremium280Type getGL7ManualPremium280Term() {
    return (productmodel.DirectGL7ManualPremium280Type)getCovTerm("GL7ManualPremium280");
  }
  
  public boolean getHasGL7ManualPremium280Term() {
    return hasCovTerm("GL7ManualPremium280");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmendmentOfLiquorLiabExclLmtdExceptionForBringYInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmendmentOfLiquorLiabExclLmtdExceptionForBringY>() {
      public productmodel.GL7AmendmentOfLiquorLiabExclLmtdExceptionForBringY newEmptyInstance() {
        return new productmodel.GL7AmendmentOfLiquorLiabExclLmtdExceptionForBringY();
      }
      
      
    });
  }
}