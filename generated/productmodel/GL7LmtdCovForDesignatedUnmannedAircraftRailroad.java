package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtdCovForDesignatedUnmannedAircraftRailroad.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LmtdCovForDesignatedUnmannedAircraftRailroad extends entity.GL7SublineTypeCov {
  protected GL7LmtdCovForDesignatedUnmannedAircraftRailroad()  {
    super((java.lang.Void)null);
  }
  
  public GL7LmtdCovForDesignatedUnmannedAircraftRailroad(entity.PolicyPeriod branch)  {
    super(branch, "GL7LmtdCovForDesignatedUnmannedAircraftRailroad");
  }
  
  public GL7LmtdCovForDesignatedUnmannedAircraftRailroad(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LmtdCovForDesignatedUnmannedAircraftRailroad");
  }
  
  public productmodel.DirectGL7ManualPremium389Type getGL7ManualPremium389Term() {
    return (productmodel.DirectGL7ManualPremium389Type)getCovTerm("GL7ManualPremium389");
  }
  
  public boolean getHasGL7ManualPremium389Term() {
    return hasCovTerm("GL7ManualPremium389");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtdCovForDesignatedUnmannedAircraftRailroadInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LmtdCovForDesignatedUnmannedAircraftRailroad>() {
      public productmodel.GL7LmtdCovForDesignatedUnmannedAircraftRailroad newEmptyInstance() {
        return new productmodel.GL7LmtdCovForDesignatedUnmannedAircraftRailroad();
      }
      
      
    });
  }
}