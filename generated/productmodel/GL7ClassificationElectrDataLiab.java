package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ClassificationElectrDataLiab.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ClassificationElectrDataLiab extends entity.GL7ExposureCov {
  protected GL7ClassificationElectrDataLiab()  {
    super((java.lang.Void)null);
  }
  
  public GL7ClassificationElectrDataLiab(entity.PolicyPeriod branch)  {
    super(branch, "GL7ClassificationElectrDataLiab");
  }
  
  public GL7ClassificationElectrDataLiab(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ClassificationElectrDataLiab");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ClassificationElectrDataLiabInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ClassificationElectrDataLiab>() {
      public productmodel.GL7ClassificationElectrDataLiab newEmptyInstance() {
        return new productmodel.GL7ClassificationElectrDataLiab();
      }
      
      
    });
  }
}