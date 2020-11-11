package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7UnmannedAircraftCovBPAI.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7UnmannedAircraftCovBPAI extends entity.GL7UnmannedAircraftCov {
  protected GL7UnmannedAircraftCovBPAI()  {
    super((java.lang.Void)null);
  }
  
  public GL7UnmannedAircraftCovBPAI(entity.PolicyPeriod branch)  {
    super(branch, "GL7UnmannedAircraftCovBPAI");
  }
  
  public GL7UnmannedAircraftCovBPAI(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7UnmannedAircraftCovBPAI");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7UnmannedAircraftCovBPAIInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7UnmannedAircraftCovBPAI>() {
      public productmodel.GL7UnmannedAircraftCovBPAI newEmptyInstance() {
        return new productmodel.GL7UnmannedAircraftCovBPAI();
      }
      
      
    });
  }
}