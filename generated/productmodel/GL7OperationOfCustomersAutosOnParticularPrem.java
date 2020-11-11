package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7OperationOfCustomersAutosOnParticularPrem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7OperationOfCustomersAutosOnParticularPrem extends entity.GL7SublineTypeCov {
  protected GL7OperationOfCustomersAutosOnParticularPrem()  {
    super((java.lang.Void)null);
  }
  
  public GL7OperationOfCustomersAutosOnParticularPrem(entity.PolicyPeriod branch)  {
    super(branch, "GL7OperationOfCustomersAutosOnParticularPrem");
  }
  
  public GL7OperationOfCustomersAutosOnParticularPrem(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7OperationOfCustomersAutosOnParticularPrem");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7OperationOfCustomersAutosOnParticularPremInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7OperationOfCustomersAutosOnParticularPrem>() {
      public productmodel.GL7OperationOfCustomersAutosOnParticularPrem newEmptyInstance() {
        return new productmodel.GL7OperationOfCustomersAutosOnParticularPrem();
      }
      
      
    });
  }
}