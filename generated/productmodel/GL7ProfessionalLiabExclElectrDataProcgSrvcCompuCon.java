package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ProfessionalLiabExclElectrDataProcgSrvcCompuCon.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ProfessionalLiabExclElectrDataProcgSrvcCompuCon extends entity.GL7SublineTypeExcl {
  protected GL7ProfessionalLiabExclElectrDataProcgSrvcCompuCon()  {
    super((java.lang.Void)null);
  }
  
  public GL7ProfessionalLiabExclElectrDataProcgSrvcCompuCon(entity.PolicyPeriod branch)  {
    super(branch, "GL7ProfessionalLiabExclElectrDataProcgSrvcCompuCon");
  }
  
  public GL7ProfessionalLiabExclElectrDataProcgSrvcCompuCon(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ProfessionalLiabExclElectrDataProcgSrvcCompuCon");
  }
  
  public productmodel.DirectGL7ManualPremium145Type getGL7ManualPremium145Term() {
    return (productmodel.DirectGL7ManualPremium145Type)getCovTerm("GL7ManualPremium145");
  }
  
  public boolean getHasGL7ManualPremium145Term() {
    return hasCovTerm("GL7ManualPremium145");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ProfessionalLiabExclElectrDataProcgSrvcCompuConInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ProfessionalLiabExclElectrDataProcgSrvcCompuCon>() {
      public productmodel.GL7ProfessionalLiabExclElectrDataProcgSrvcCompuCon newEmptyInstance() {
        return new productmodel.GL7ProfessionalLiabExclElectrDataProcgSrvcCompuCon();
      }
      
      
    });
  }
}