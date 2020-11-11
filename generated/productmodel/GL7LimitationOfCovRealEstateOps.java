package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LimitationOfCovRealEstateOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LimitationOfCovRealEstateOps extends entity.GL7SublineTypeCond {
  protected GL7LimitationOfCovRealEstateOps()  {
    super((java.lang.Void)null);
  }
  
  public GL7LimitationOfCovRealEstateOps(entity.PolicyPeriod branch)  {
    super(branch, "GL7LimitationOfCovRealEstateOps");
  }
  
  public GL7LimitationOfCovRealEstateOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LimitationOfCovRealEstateOps");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LimitationOfCovRealEstateOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LimitationOfCovRealEstateOps>() {
      public productmodel.GL7LimitationOfCovRealEstateOps newEmptyInstance() {
        return new productmodel.GL7LimitationOfCovRealEstateOps();
      }
      
      
    });
  }
}