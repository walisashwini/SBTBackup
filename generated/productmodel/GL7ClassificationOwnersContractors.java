package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ClassificationOwnersContractors.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ClassificationOwnersContractors extends entity.GL7ExposureCov {
  protected GL7ClassificationOwnersContractors()  {
    super((java.lang.Void)null);
  }
  
  public GL7ClassificationOwnersContractors(entity.PolicyPeriod branch)  {
    super(branch, "GL7ClassificationOwnersContractors");
  }
  
  public GL7ClassificationOwnersContractors(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ClassificationOwnersContractors");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ClassificationOwnersContractorsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ClassificationOwnersContractors>() {
      public productmodel.GL7ClassificationOwnersContractors newEmptyInstance() {
        return new productmodel.GL7ClassificationOwnersContractors();
      }
      
      
    });
  }
}