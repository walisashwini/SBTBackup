package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCert1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCert1 extends entity.GL7SublineTypeCov {
  protected GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCert1()  {
    super((java.lang.Void)null);
  }
  
  public GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCert1(entity.PolicyPeriod branch)  {
    super(branch, "GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCert1");
  }
  
  public GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCert1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCert1");
  }
  
  public productmodel.OptionGL7AggLimit11Type getGL7AggLimit11Term() {
    return (productmodel.OptionGL7AggLimit11Type)getCovTerm("GL7AggLimit11");
  }
  
  public productmodel.DirectGL7ManualPremium27Type getGL7ManualPremium27Term() {
    return (productmodel.DirectGL7ManualPremium27Type)getCovTerm("GL7ManualPremium27");
  }
  
  public boolean getHasGL7AggLimit11Term() {
    return hasCovTerm("GL7AggLimit11");
  }
  
  public boolean getHasGL7ManualPremium27Term() {
    return hasCovTerm("GL7ManualPremium27");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCert1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCert1>() {
      public productmodel.GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCert1 newEmptyInstance() {
        return new productmodel.GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCert1();
      }
      
      
    });
  }
}