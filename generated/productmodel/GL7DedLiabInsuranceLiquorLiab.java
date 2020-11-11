package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7DedLiabInsuranceLiquorLiab.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7DedLiabInsuranceLiquorLiab extends entity.GL7SublineTypeCov {
  protected GL7DedLiabInsuranceLiquorLiab()  {
    super((java.lang.Void)null);
  }
  
  public GL7DedLiabInsuranceLiquorLiab(entity.PolicyPeriod branch)  {
    super(branch, "GL7DedLiabInsuranceLiquorLiab");
  }
  
  public GL7DedLiabInsuranceLiquorLiab(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7DedLiabInsuranceLiquorLiab");
  }
  
  public productmodel.GenericGL7Limitation1Type getGL7Limitation1Term() {
    return (productmodel.GenericGL7Limitation1Type)getCovTerm("GL7Limitation1");
  }
  
  public productmodel.GenericGL7Location1Type getGL7Location1Term() {
    return (productmodel.GenericGL7Location1Type)getCovTerm("GL7Location1");
  }
  
  public boolean getHasGL7Limitation1Term() {
    return hasCovTerm("GL7Limitation1");
  }
  
  public boolean getHasGL7Location1Term() {
    return hasCovTerm("GL7Location1");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7DedLiabInsuranceLiquorLiabInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7DedLiabInsuranceLiquorLiab>() {
      public productmodel.GL7DedLiabInsuranceLiquorLiab newEmptyInstance() {
        return new productmodel.GL7DedLiabInsuranceLiquorLiab();
      }
      
      
    });
  }
}