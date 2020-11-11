package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclProdsProfessionalServicesDruggists.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclProdsProfessionalServicesDruggists extends entity.GL7SublineTypeExcl {
  protected GL7ExclProdsProfessionalServicesDruggists()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclProdsProfessionalServicesDruggists(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclProdsProfessionalServicesDruggists");
  }
  
  public GL7ExclProdsProfessionalServicesDruggists(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclProdsProfessionalServicesDruggists");
  }
  
  public productmodel.DirectGL7ManualPremium76Type getGL7ManualPremium76Term() {
    return (productmodel.DirectGL7ManualPremium76Type)getCovTerm("GL7ManualPremium76");
  }
  
  public boolean getHasGL7ManualPremium76Term() {
    return hasCovTerm("GL7ManualPremium76");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclProdsProfessionalServicesDruggistsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclProdsProfessionalServicesDruggists>() {
      public productmodel.GL7ExclProdsProfessionalServicesDruggists newEmptyInstance() {
        return new productmodel.GL7ExclProdsProfessionalServicesDruggists();
      }
      
      
    });
  }
}