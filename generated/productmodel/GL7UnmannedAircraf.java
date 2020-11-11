package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7UnmannedAircraf.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7UnmannedAircraf extends entity.GL7UnmannedAircraftCov {
  protected GL7UnmannedAircraf()  {
    super((java.lang.Void)null);
  }
  
  public GL7UnmannedAircraf(entity.PolicyPeriod branch)  {
    super(branch, "GL7UnmannedAircraf");
  }
  
  public GL7UnmannedAircraf(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7UnmannedAircraf");
  }
  
  public productmodel.OptionGL7AggLimit23Type getGL7AggLimit23Term() {
    return (productmodel.OptionGL7AggLimit23Type)getCovTerm("GL7AggLimit23");
  }
  
  public productmodel.OptionGL7AggLimitGovSubdivisionType getGL7AggLimitGovSubdivisionTerm() {
    return (productmodel.OptionGL7AggLimitGovSubdivisionType)getCovTerm("GL7AggLimitGovSubdivision");
  }
  
  public boolean getHasGL7AggLimit23Term() {
    return hasCovTerm("GL7AggLimit23");
  }
  
  public boolean getHasGL7AggLimitGovSubdivisionTerm() {
    return hasCovTerm("GL7AggLimitGovSubdivision");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7UnmannedAircrafInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7UnmannedAircraf>() {
      public productmodel.GL7UnmannedAircraf newEmptyInstance() {
        return new productmodel.GL7UnmannedAircraf();
      }
      
      
    });
  }
}