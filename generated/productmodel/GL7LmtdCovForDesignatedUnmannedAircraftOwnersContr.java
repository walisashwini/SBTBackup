package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtdCovForDesignatedUnmannedAircraftOwnersContr.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LmtdCovForDesignatedUnmannedAircraftOwnersContr extends entity.GL7SublineTypeCov {
  protected GL7LmtdCovForDesignatedUnmannedAircraftOwnersContr()  {
    super((java.lang.Void)null);
  }
  
  public GL7LmtdCovForDesignatedUnmannedAircraftOwnersContr(entity.PolicyPeriod branch)  {
    super(branch, "GL7LmtdCovForDesignatedUnmannedAircraftOwnersContr");
  }
  
  public GL7LmtdCovForDesignatedUnmannedAircraftOwnersContr(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LmtdCovForDesignatedUnmannedAircraftOwnersContr");
  }
  
  public productmodel.DirectGL7ManualPremium380Type getGL7ManualPremium380Term() {
    return (productmodel.DirectGL7ManualPremium380Type)getCovTerm("GL7ManualPremium380");
  }
  
  public boolean getHasGL7ManualPremium380Term() {
    return hasCovTerm("GL7ManualPremium380");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtdCovForDesignatedUnmannedAircraftOwnersContrInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LmtdCovForDesignatedUnmannedAircraftOwnersContr>() {
      public productmodel.GL7LmtdCovForDesignatedUnmannedAircraftOwnersContr newEmptyInstance() {
        return new productmodel.GL7LmtdCovForDesignatedUnmannedAircraftOwnersContr();
      }
      
      
    });
  }
}