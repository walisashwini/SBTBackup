package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmndmtOfLiquorLiabExclExcptnScheddActivsProdsCo.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmndmtOfLiquorLiabExclExcptnScheddActivsProdsCo extends entity.GL7SublineTypeSchedExcl {
  protected GL7AmndmtOfLiquorLiabExclExcptnScheddActivsProdsCo()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmndmtOfLiquorLiabExclExcptnScheddActivsProdsCo(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmndmtOfLiquorLiabExclExcptnScheddActivsProdsCo");
  }
  
  public GL7AmndmtOfLiquorLiabExclExcptnScheddActivsProdsCo(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmndmtOfLiquorLiabExclExcptnScheddActivsProdsCo");
  }
  
  public productmodel.DirectGL7ManualPremium19Type getGL7ManualPremium19Term() {
    return (productmodel.DirectGL7ManualPremium19Type)getCovTerm("GL7ManualPremium19");
  }
  
  public boolean getHasGL7ManualPremium19Term() {
    return hasCovTerm("GL7ManualPremium19");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmndmtOfLiquorLiabExclExcptnScheddActivsProdsCoInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmndmtOfLiquorLiabExclExcptnScheddActivsProdsCo>() {
      public productmodel.GL7AmndmtOfLiquorLiabExclExcptnScheddActivsProdsCo newEmptyInstance() {
        return new productmodel.GL7AmndmtOfLiquorLiabExclExcptnScheddActivsProdsCo();
      }
      
      
    });
  }
}