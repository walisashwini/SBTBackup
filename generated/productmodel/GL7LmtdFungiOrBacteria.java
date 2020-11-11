package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtdFungiOrBacteria.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LmtdFungiOrBacteria extends entity.GL7SublineTypeCov {
  protected GL7LmtdFungiOrBacteria()  {
    super((java.lang.Void)null);
  }
  
  public GL7LmtdFungiOrBacteria(entity.PolicyPeriod branch)  {
    super(branch, "GL7LmtdFungiOrBacteria");
  }
  
  public GL7LmtdFungiOrBacteria(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LmtdFungiOrBacteria");
  }
  
  public productmodel.DirectGL7FungiBacteriaLiabAggLimitType getGL7FungiBacteriaLiabAggLimitTerm() {
    return (productmodel.DirectGL7FungiBacteriaLiabAggLimitType)getCovTerm("GL7FungiBacteriaLiabAggLimit");
  }
  
  public productmodel.DirectGL7ManualPremium128Type getGL7ManualPremium128Term() {
    return (productmodel.DirectGL7ManualPremium128Type)getCovTerm("GL7ManualPremium128");
  }
  
  public boolean getHasGL7FungiBacteriaLiabAggLimitTerm() {
    return hasCovTerm("GL7FungiBacteriaLiabAggLimit");
  }
  
  public boolean getHasGL7ManualPremium128Term() {
    return hasCovTerm("GL7ManualPremium128");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtdFungiOrBacteriaInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LmtdFungiOrBacteria>() {
      public productmodel.GL7LmtdFungiOrBacteria newEmptyInstance() {
        return new productmodel.GL7LmtdFungiOrBacteria();
      }
      
      
    });
  }
}