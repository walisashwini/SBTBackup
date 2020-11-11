package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtdCovForDesignatedUnmannedAircraftPremiumToRe.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LmtdCovForDesignatedUnmannedAircraftPremiumToRe extends entity.GL7SublineTypeCov {
  protected GL7LmtdCovForDesignatedUnmannedAircraftPremiumToRe()  {
    super((java.lang.Void)null);
  }
  
  public GL7LmtdCovForDesignatedUnmannedAircraftPremiumToRe(entity.PolicyPeriod branch)  {
    super(branch, "GL7LmtdCovForDesignatedUnmannedAircraftPremiumToRe");
  }
  
  public GL7LmtdCovForDesignatedUnmannedAircraftPremiumToRe(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LmtdCovForDesignatedUnmannedAircraftPremiumToRe");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtdCovForDesignatedUnmannedAircraftPremiumToReInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LmtdCovForDesignatedUnmannedAircraftPremiumToRe>() {
      public productmodel.GL7LmtdCovForDesignatedUnmannedAircraftPremiumToRe newEmptyInstance() {
        return new productmodel.GL7LmtdCovForDesignatedUnmannedAircraftPremiumToRe();
      }
      
      
    });
  }
}