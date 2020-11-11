package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdChurchMbrOffcrVolunWrkr.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdChurchMbrOffcrVolunWrkr extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdChurchMbrOffcrVolunWrkr()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdChurchMbrOffcrVolunWrkr(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdChurchMbrOffcrVolunWrkr");
  }
  
  public GL7AddlInsdChurchMbrOffcrVolunWrkr(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdChurchMbrOffcrVolunWrkr");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdChurchMbrOffcrVolunWrkrInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdChurchMbrOffcrVolunWrkr>() {
      public productmodel.GL7AddlInsdChurchMbrOffcrVolunWrkr newEmptyInstance() {
        return new productmodel.GL7AddlInsdChurchMbrOffcrVolunWrkr();
      }
      
      
    });
  }
}