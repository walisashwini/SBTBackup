package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmndmtOfLiquorLiabExclExcptnScheddActivs.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmndmtOfLiquorLiabExclExcptnScheddActivs extends entity.GL7SublineTypeSchedExcl {
  protected GL7AmndmtOfLiquorLiabExclExcptnScheddActivs()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmndmtOfLiquorLiabExclExcptnScheddActivs(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmndmtOfLiquorLiabExclExcptnScheddActivs");
  }
  
  public GL7AmndmtOfLiquorLiabExclExcptnScheddActivs(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmndmtOfLiquorLiabExclExcptnScheddActivs");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmndmtOfLiquorLiabExclExcptnScheddActivsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmndmtOfLiquorLiabExclExcptnScheddActivs>() {
      public productmodel.GL7AmndmtOfLiquorLiabExclExcptnScheddActivs newEmptyInstance() {
        return new productmodel.GL7AmndmtOfLiquorLiabExclExcptnScheddActivs();
      }
      
      
    });
  }
}