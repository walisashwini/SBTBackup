package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdVolunteerWorkersPollutionLmtdUST.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdVolunteerWorkersPollutionLmtdUST extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdVolunteerWorkersPollutionLmtdUST()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdVolunteerWorkersPollutionLmtdUST(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdVolunteerWorkersPollutionLmtdUST");
  }
  
  public GL7AddlInsdVolunteerWorkersPollutionLmtdUST(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdVolunteerWorkersPollutionLmtdUST");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdVolunteerWorkersPollutionLmtdUSTInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdVolunteerWorkersPollutionLmtdUST>() {
      public productmodel.GL7AddlInsdVolunteerWorkersPollutionLmtdUST newEmptyInstance() {
        return new productmodel.GL7AddlInsdVolunteerWorkersPollutionLmtdUST();
      }
      
      
    });
  }
}