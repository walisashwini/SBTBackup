package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7OpticalHearingAidEstablishments.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7OpticalHearingAidEstablishments extends entity.GL7SublineTypeCov {
  protected GL7OpticalHearingAidEstablishments()  {
    super((java.lang.Void)null);
  }
  
  public GL7OpticalHearingAidEstablishments(entity.PolicyPeriod branch)  {
    super(branch, "GL7OpticalHearingAidEstablishments");
  }
  
  public GL7OpticalHearingAidEstablishments(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7OpticalHearingAidEstablishments");
  }
  
  public productmodel.DirectGL7ManualPremium135Type getGL7ManualPremium135Term() {
    return (productmodel.DirectGL7ManualPremium135Type)getCovTerm("GL7ManualPremium135");
  }
  
  public boolean getHasGL7ManualPremium135Term() {
    return hasCovTerm("GL7ManualPremium135");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7OpticalHearingAidEstablishmentsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7OpticalHearingAidEstablishments>() {
      public productmodel.GL7OpticalHearingAidEstablishments newEmptyInstance() {
        return new productmodel.GL7OpticalHearingAidEstablishments();
      }
      
      
    });
  }
}