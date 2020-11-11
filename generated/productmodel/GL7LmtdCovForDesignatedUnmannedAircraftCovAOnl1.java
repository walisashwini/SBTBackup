package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1 extends entity.GL7SublineTypeCov {
  protected GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1()  {
    super((java.lang.Void)null);
  }
  
  public GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1(entity.PolicyPeriod branch)  {
    super(branch, "GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1");
  }
  
  public GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1>() {
      public productmodel.GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1 newEmptyInstance() {
        return new productmodel.GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1();
      }
      
      
    });
  }
}