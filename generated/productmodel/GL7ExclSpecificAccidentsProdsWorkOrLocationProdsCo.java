package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclSpecificAccidentsProdsWorkOrLocationProdsCo.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclSpecificAccidentsProdsWorkOrLocationProdsCo extends entity.GL7SublineTypeSchedExcl {
  protected GL7ExclSpecificAccidentsProdsWorkOrLocationProdsCo()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclSpecificAccidentsProdsWorkOrLocationProdsCo(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclSpecificAccidentsProdsWorkOrLocationProdsCo");
  }
  
  public GL7ExclSpecificAccidentsProdsWorkOrLocationProdsCo(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclSpecificAccidentsProdsWorkOrLocationProdsCo");
  }
  
  public productmodel.DirectGL7ManualPremium84Type getGL7ManualPremium84Term() {
    return (productmodel.DirectGL7ManualPremium84Type)getCovTerm("GL7ManualPremium84");
  }
  
  public boolean getHasGL7ManualPremium84Term() {
    return hasCovTerm("GL7ManualPremium84");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclSpecificAccidentsProdsWorkOrLocationProdsCoInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclSpecificAccidentsProdsWorkOrLocationProdsCo>() {
      public productmodel.GL7ExclSpecificAccidentsProdsWorkOrLocationProdsCo newEmptyInstance() {
        return new productmodel.GL7ExclSpecificAccidentsProdsWorkOrLocationProdsCo();
      }
      
      
    });
  }
}