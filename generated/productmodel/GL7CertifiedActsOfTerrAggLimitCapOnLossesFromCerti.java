package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCerti.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCerti extends entity.GL7SublineTypeCov {
  protected GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCerti()  {
    super((java.lang.Void)null);
  }
  
  public GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCerti(entity.PolicyPeriod branch)  {
    super(branch, "GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCerti");
  }
  
  public GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCerti(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCerti");
  }
  
  public productmodel.OptionGL7AggLimitType getGL7AggLimitTerm() {
    return (productmodel.OptionGL7AggLimitType)getCovTerm("GL7AggLimit");
  }
  
  public productmodel.DirectGL7ManualPremium26Type getGL7ManualPremium26Term() {
    return (productmodel.DirectGL7ManualPremium26Type)getCovTerm("GL7ManualPremium26");
  }
  
  public boolean getHasGL7AggLimitTerm() {
    return hasCovTerm("GL7AggLimit");
  }
  
  public boolean getHasGL7ManualPremium26Term() {
    return hasCovTerm("GL7ManualPremium26");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCertiInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCerti>() {
      public productmodel.GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCerti newEmptyInstance() {
        return new productmodel.GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCerti();
      }
      
      
    });
  }
}