package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ElectrDataLiabEndt.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ElectrDataLiabEndt extends entity.GL7SublineTypeCov {
  protected GL7ElectrDataLiabEndt()  {
    super((java.lang.Void)null);
  }
  
  public GL7ElectrDataLiabEndt(entity.PolicyPeriod branch)  {
    super(branch, "GL7ElectrDataLiabEndt");
  }
  
  public GL7ElectrDataLiabEndt(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ElectrDataLiabEndt");
  }
  
  public productmodel.OptionGL7ExposureBasisType getGL7ExposureBasisTerm() {
    return (productmodel.OptionGL7ExposureBasisType)getCovTerm("GL7ExposureBasis");
  }
  
  public productmodel.DirectGL7Limit1Type getGL7Limit1Term() {
    return (productmodel.DirectGL7Limit1Type)getCovTerm("GL7Limit1");
  }
  
  public productmodel.DirectGL7ManualPremium44Type getGL7ManualPremium44Term() {
    return (productmodel.DirectGL7ManualPremium44Type)getCovTerm("GL7ManualPremium44");
  }
  
  public boolean getHasGL7ExposureBasisTerm() {
    return hasCovTerm("GL7ExposureBasis");
  }
  
  public boolean getHasGL7Limit1Term() {
    return hasCovTerm("GL7Limit1");
  }
  
  public boolean getHasGL7ManualPremium44Term() {
    return hasCovTerm("GL7ManualPremium44");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ElectrDataLiabEndtInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ElectrDataLiabEndt>() {
      public productmodel.GL7ElectrDataLiabEndt newEmptyInstance() {
        return new productmodel.GL7ElectrDataLiabEndt();
      }
      
      
    });
  }
}