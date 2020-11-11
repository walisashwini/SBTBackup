package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ElectrDataLiabLmtdBIExceptionNotIncluded.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ElectrDataLiabLmtdBIExceptionNotIncluded extends entity.GL7SublineTypeCov {
  protected GL7ElectrDataLiabLmtdBIExceptionNotIncluded()  {
    super((java.lang.Void)null);
  }
  
  public GL7ElectrDataLiabLmtdBIExceptionNotIncluded(entity.PolicyPeriod branch)  {
    super(branch, "GL7ElectrDataLiabLmtdBIExceptionNotIncluded");
  }
  
  public GL7ElectrDataLiabLmtdBIExceptionNotIncluded(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ElectrDataLiabLmtdBIExceptionNotIncluded");
  }
  
  public productmodel.DirectGL7Limit9Type getGL7Limit9Term() {
    return (productmodel.DirectGL7Limit9Type)getCovTerm("GL7Limit9");
  }
  
  public productmodel.DirectGL7ManualPremium326Type getGL7ManualPremium326Term() {
    return (productmodel.DirectGL7ManualPremium326Type)getCovTerm("GL7ManualPremium326");
  }
  
  public boolean getHasGL7Limit9Term() {
    return hasCovTerm("GL7Limit9");
  }
  
  public boolean getHasGL7ManualPremium326Term() {
    return hasCovTerm("GL7ManualPremium326");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ElectrDataLiabLmtdBIExceptionNotIncludedInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ElectrDataLiabLmtdBIExceptionNotIncluded>() {
      public productmodel.GL7ElectrDataLiabLmtdBIExceptionNotIncluded newEmptyInstance() {
        return new productmodel.GL7ElectrDataLiabLmtdBIExceptionNotIncluded();
      }
      
      
    });
  }
}