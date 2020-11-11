package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdConcessionaires.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdConcessionaires extends entity.GL7SublineTypeSchedCov {
  protected GL7AddlInsdConcessionaires()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdConcessionaires(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdConcessionaires");
  }
  
  public GL7AddlInsdConcessionaires(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdConcessionaires");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdConcessionairesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdConcessionaires>() {
      public productmodel.GL7AddlInsdConcessionaires newEmptyInstance() {
        return new productmodel.GL7AddlInsdConcessionaires();
      }
      
      
    });
  }
}