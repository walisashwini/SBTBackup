package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg extends entity.GL7SublineTypeSchedCov {
  protected GL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg");
  }
  
  public GL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdOwnersLesseesContrctrsScheddPersonOrgInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg>() {
      public productmodel.GL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg newEmptyInstance() {
        return new productmodel.GL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg();
      }
      
      
    });
  }
}