package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7DedLiabInsurance.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7DedLiabInsurance extends entity.GL7SublineTypeCov {
  protected GL7DedLiabInsurance()  {
    super((java.lang.Void)null);
  }
  
  public GL7DedLiabInsurance(entity.PolicyPeriod branch)  {
    super(branch, "GL7DedLiabInsurance");
  }
  
  public GL7DedLiabInsurance(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7DedLiabInsurance");
  }
  
  public productmodel.DirectGL7LimitationType getGL7LimitationTerm() {
    return (productmodel.DirectGL7LimitationType)getCovTerm("GL7Limitation");
  }
  
  public productmodel.GenericGL7LocationType getGL7LocationTerm() {
    return (productmodel.GenericGL7LocationType)getCovTerm("GL7Location");
  }
  
  public boolean getHasGL7LimitationTerm() {
    return hasCovTerm("GL7Limitation");
  }
  
  public boolean getHasGL7LocationTerm() {
    return hasCovTerm("GL7Location");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7DedLiabInsuranceInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7DedLiabInsurance>() {
      public productmodel.GL7DedLiabInsurance newEmptyInstance() {
        return new productmodel.GL7DedLiabInsurance();
      }
      
      
    });
  }
}