package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ClassificationExclCovBProductWithdrawalLiab.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ClassificationExclCovBProductWithdrawalLiab extends entity.GL7ExposureCov {
  protected GL7ClassificationExclCovBProductWithdrawalLiab()  {
    super((java.lang.Void)null);
  }
  
  public GL7ClassificationExclCovBProductWithdrawalLiab(entity.PolicyPeriod branch)  {
    super(branch, "GL7ClassificationExclCovBProductWithdrawalLiab");
  }
  
  public GL7ClassificationExclCovBProductWithdrawalLiab(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ClassificationExclCovBProductWithdrawalLiab");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ClassificationExclCovBProductWithdrawalLiabInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ClassificationExclCovBProductWithdrawalLiab>() {
      public productmodel.GL7ClassificationExclCovBProductWithdrawalLiab newEmptyInstance() {
        return new productmodel.GL7ClassificationExclCovBProductWithdrawalLiab();
      }
      
      
    });
  }
}