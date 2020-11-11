package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CommunicableDiseaseExcl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CommunicableDiseaseExcl extends entity.GL7SublineTypeExcl {
  protected GL7CommunicableDiseaseExcl()  {
    super((java.lang.Void)null);
  }
  
  public GL7CommunicableDiseaseExcl(entity.PolicyPeriod branch)  {
    super(branch, "GL7CommunicableDiseaseExcl");
  }
  
  public GL7CommunicableDiseaseExcl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CommunicableDiseaseExcl");
  }
  
  public productmodel.DirectGL7ManualPremium30Type getGL7ManualPremium30Term() {
    return (productmodel.DirectGL7ManualPremium30Type)getCovTerm("GL7ManualPremium30");
  }
  
  public boolean getHasGL7ManualPremium30Term() {
    return hasCovTerm("GL7ManualPremium30");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CommunicableDiseaseExclInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CommunicableDiseaseExcl>() {
      public productmodel.GL7CommunicableDiseaseExcl newEmptyInstance() {
        return new productmodel.GL7CommunicableDiseaseExcl();
      }
      
      
    });
  }
}