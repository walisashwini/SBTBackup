package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclTelecommEquipmtServicePrvdrsErrorsOmissions.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclTelecommEquipmtServicePrvdrsErrorsOmissions extends entity.GL7SublineTypeExcl {
  protected GL7ExclTelecommEquipmtServicePrvdrsErrorsOmissions()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclTelecommEquipmtServicePrvdrsErrorsOmissions(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclTelecommEquipmtServicePrvdrsErrorsOmissions");
  }
  
  public GL7ExclTelecommEquipmtServicePrvdrsErrorsOmissions(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclTelecommEquipmtServicePrvdrsErrorsOmissions");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclTelecommEquipmtServicePrvdrsErrorsOmissionsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclTelecommEquipmtServicePrvdrsErrorsOmissions>() {
      public productmodel.GL7ExclTelecommEquipmtServicePrvdrsErrorsOmissions newEmptyInstance() {
        return new productmodel.GL7ExclTelecommEquipmtServicePrvdrsErrorsOmissions();
      }
      
      
    });
  }
}