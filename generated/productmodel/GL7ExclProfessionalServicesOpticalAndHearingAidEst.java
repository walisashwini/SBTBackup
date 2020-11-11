package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclProfessionalServicesOpticalAndHearingAidEst.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclProfessionalServicesOpticalAndHearingAidEst extends entity.GL7SublineTypeExcl {
  protected GL7ExclProfessionalServicesOpticalAndHearingAidEst()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclProfessionalServicesOpticalAndHearingAidEst(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclProfessionalServicesOpticalAndHearingAidEst");
  }
  
  public GL7ExclProfessionalServicesOpticalAndHearingAidEst(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclProfessionalServicesOpticalAndHearingAidEst");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclProfessionalServicesOpticalAndHearingAidEstInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclProfessionalServicesOpticalAndHearingAidEst>() {
      public productmodel.GL7ExclProfessionalServicesOpticalAndHearingAidEst newEmptyInstance() {
        return new productmodel.GL7ExclProfessionalServicesOpticalAndHearingAidEst();
      }
      
      
    });
  }
}