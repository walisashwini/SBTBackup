package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ILChangesContractorsHomeRepairAndRemodeling.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ILChangesContractorsHomeRepairAndRemodeling extends entity.GL7SublineCov {
  protected GL7ILChangesContractorsHomeRepairAndRemodeling()  {
    super((java.lang.Void)null);
  }
  
  public GL7ILChangesContractorsHomeRepairAndRemodeling(entity.PolicyPeriod branch)  {
    super(branch, "GL7ILChangesContractorsHomeRepairAndRemodeling");
  }
  
  public GL7ILChangesContractorsHomeRepairAndRemodeling(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ILChangesContractorsHomeRepairAndRemodeling");
  }
  
  public productmodel.DirectGL7Ded1Type getGL7Ded1Term() {
    return (productmodel.DirectGL7Ded1Type)getCovTerm("GL7Ded1");
  }
  
  public boolean getHasGL7Ded1Term() {
    return hasCovTerm("GL7Ded1");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ILChangesContractorsHomeRepairAndRemodelingInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ILChangesContractorsHomeRepairAndRemodeling>() {
      public productmodel.GL7ILChangesContractorsHomeRepairAndRemodeling newEmptyInstance() {
        return new productmodel.GL7ILChangesContractorsHomeRepairAndRemodeling();
      }
      
      
    });
  }
}