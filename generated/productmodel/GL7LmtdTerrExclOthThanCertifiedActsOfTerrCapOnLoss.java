package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtdTerrExclOthThanCertifiedActsOfTerrCapOnLoss.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LmtdTerrExclOthThanCertifiedActsOfTerrCapOnLoss extends entity.GL7SublineTypeExcl {
  protected GL7LmtdTerrExclOthThanCertifiedActsOfTerrCapOnLoss()  {
    super((java.lang.Void)null);
  }
  
  public GL7LmtdTerrExclOthThanCertifiedActsOfTerrCapOnLoss(entity.PolicyPeriod branch)  {
    super(branch, "GL7LmtdTerrExclOthThanCertifiedActsOfTerrCapOnLoss");
  }
  
  public GL7LmtdTerrExclOthThanCertifiedActsOfTerrCapOnLoss(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LmtdTerrExclOthThanCertifiedActsOfTerrCapOnLoss");
  }
  
  public productmodel.DirectGL7ManualPremium132Type getGL7ManualPremium132Term() {
    return (productmodel.DirectGL7ManualPremium132Type)getCovTerm("GL7ManualPremium132");
  }
  
  public boolean getHasGL7ManualPremium132Term() {
    return hasCovTerm("GL7ManualPremium132");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtdTerrExclOthThanCertifiedActsOfTerrCapOnLossInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LmtdTerrExclOthThanCertifiedActsOfTerrCapOnLoss>() {
      public productmodel.GL7LmtdTerrExclOthThanCertifiedActsOfTerrCapOnLoss newEmptyInstance() {
        return new productmodel.GL7LmtdTerrExclOthThanCertifiedActsOfTerrCapOnLoss();
      }
      
      
    });
  }
}