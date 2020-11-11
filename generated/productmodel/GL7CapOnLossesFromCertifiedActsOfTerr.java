package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CapOnLossesFromCertifiedActsOfTerr.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CapOnLossesFromCertifiedActsOfTerr extends entity.GL7SublineTypeCov {
  protected GL7CapOnLossesFromCertifiedActsOfTerr()  {
    super((java.lang.Void)null);
  }
  
  public GL7CapOnLossesFromCertifiedActsOfTerr(entity.PolicyPeriod branch)  {
    super(branch, "GL7CapOnLossesFromCertifiedActsOfTerr");
  }
  
  public GL7CapOnLossesFromCertifiedActsOfTerr(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CapOnLossesFromCertifiedActsOfTerr");
  }
  
  public productmodel.DirectGL7ManualPremium25Type getGL7ManualPremium25Term() {
    return (productmodel.DirectGL7ManualPremium25Type)getCovTerm("GL7ManualPremium25");
  }
  
  public boolean getHasGL7ManualPremium25Term() {
    return hasCovTerm("GL7ManualPremium25");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CapOnLossesFromCertifiedActsOfTerrInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CapOnLossesFromCertifiedActsOfTerr>() {
      public productmodel.GL7CapOnLossesFromCertifiedActsOfTerr newEmptyInstance() {
        return new productmodel.GL7CapOnLossesFromCertifiedActsOfTerr();
      }
      
      
    });
  }
}