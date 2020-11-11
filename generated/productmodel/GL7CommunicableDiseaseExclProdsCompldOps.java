package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CommunicableDiseaseExclProdsCompldOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CommunicableDiseaseExclProdsCompldOps extends entity.GL7SublineTypeExcl {
  protected GL7CommunicableDiseaseExclProdsCompldOps()  {
    super((java.lang.Void)null);
  }
  
  public GL7CommunicableDiseaseExclProdsCompldOps(entity.PolicyPeriod branch)  {
    super(branch, "GL7CommunicableDiseaseExclProdsCompldOps");
  }
  
  public GL7CommunicableDiseaseExclProdsCompldOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CommunicableDiseaseExclProdsCompldOps");
  }
  
  public productmodel.DirectGL7ManualPremium31Type getGL7ManualPremium31Term() {
    return (productmodel.DirectGL7ManualPremium31Type)getCovTerm("GL7ManualPremium31");
  }
  
  public boolean getHasGL7ManualPremium31Term() {
    return hasCovTerm("GL7ManualPremium31");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CommunicableDiseaseExclProdsCompldOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CommunicableDiseaseExclProdsCompldOps>() {
      public productmodel.GL7CommunicableDiseaseExclProdsCompldOps newEmptyInstance() {
        return new productmodel.GL7CommunicableDiseaseExclProdsCompldOps();
      }
      
      
    });
  }
}