package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdOwnersLesseesContrctrsAutomaticStatusWh.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdOwnersLesseesContrctrsAutomaticStatusWh extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdOwnersLesseesContrctrsAutomaticStatusWh()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdOwnersLesseesContrctrsAutomaticStatusWh(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdOwnersLesseesContrctrsAutomaticStatusWh");
  }
  
  public GL7AddlInsdOwnersLesseesContrctrsAutomaticStatusWh(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdOwnersLesseesContrctrsAutomaticStatusWh");
  }
  
  public productmodel.DirectGL7ManualPremium255Type getGL7ManualPremium255Term() {
    return (productmodel.DirectGL7ManualPremium255Type)getCovTerm("GL7ManualPremium255");
  }
  
  public boolean getHasGL7ManualPremium255Term() {
    return hasCovTerm("GL7ManualPremium255");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdOwnersLesseesContrctrsAutomaticStatusWhInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdOwnersLesseesContrctrsAutomaticStatusWh>() {
      public productmodel.GL7AddlInsdOwnersLesseesContrctrsAutomaticStatusWh newEmptyInstance() {
        return new productmodel.GL7AddlInsdOwnersLesseesContrctrsAutomaticStatusWh();
      }
      
      
    });
  }
}