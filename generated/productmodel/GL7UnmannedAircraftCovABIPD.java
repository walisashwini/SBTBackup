package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7UnmannedAircraftCovABIPD.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7UnmannedAircraftCovABIPD extends entity.GL7UnmannedAircraftCov {
  protected GL7UnmannedAircraftCovABIPD()  {
    super((java.lang.Void)null);
  }
  
  public GL7UnmannedAircraftCovABIPD(entity.PolicyPeriod branch)  {
    super(branch, "GL7UnmannedAircraftCovABIPD");
  }
  
  public GL7UnmannedAircraftCovABIPD(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7UnmannedAircraftCovABIPD");
  }
  
  public productmodel.OptionGL7BIDedType getGL7BIDedTerm() {
    return (productmodel.OptionGL7BIDedType)getCovTerm("GL7BIDed");
  }
  
  public productmodel.OptionGL7BIPDDedType getGL7BIPDDedTerm() {
    return (productmodel.OptionGL7BIPDDedType)getCovTerm("GL7BIPDDed");
  }
  
  public productmodel.OptionGL7PDDedType getGL7PDDedTerm() {
    return (productmodel.OptionGL7PDDedType)getCovTerm("GL7PDDed");
  }
  
  public boolean getHasGL7BIDedTerm() {
    return hasCovTerm("GL7BIDed");
  }
  
  public boolean getHasGL7BIPDDedTerm() {
    return hasCovTerm("GL7BIPDDed");
  }
  
  public boolean getHasGL7PDDedTerm() {
    return hasCovTerm("GL7PDDed");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7UnmannedAircraftCovABIPDInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7UnmannedAircraftCovABIPD>() {
      public productmodel.GL7UnmannedAircraftCovABIPD newEmptyInstance() {
        return new productmodel.GL7UnmannedAircraftCovABIPD();
      }
      
      
    });
  }
}