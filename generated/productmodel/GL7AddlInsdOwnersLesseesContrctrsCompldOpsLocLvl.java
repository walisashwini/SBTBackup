package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl extends entity.GL7LocationSchedCov {
  protected GL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl");
  }
  
  public GL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvlInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl>() {
      public productmodel.GL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl newEmptyInstance() {
        return new productmodel.GL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl();
      }
      
      
    });
  }
}