package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtdCovForDesignatedUnmannedAircraftCovBOnl1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LmtdCovForDesignatedUnmannedAircraftCovBOnl1 extends entity.GL7SublineTypeCov {
  protected GL7LmtdCovForDesignatedUnmannedAircraftCovBOnl1()  {
    super((java.lang.Void)null);
  }
  
  public GL7LmtdCovForDesignatedUnmannedAircraftCovBOnl1(entity.PolicyPeriod branch)  {
    super(branch, "GL7LmtdCovForDesignatedUnmannedAircraftCovBOnl1");
  }
  
  public GL7LmtdCovForDesignatedUnmannedAircraftCovBOnl1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LmtdCovForDesignatedUnmannedAircraftCovBOnl1");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtdCovForDesignatedUnmannedAircraftCovBOnl1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LmtdCovForDesignatedUnmannedAircraftCovBOnl1>() {
      public productmodel.GL7LmtdCovForDesignatedUnmannedAircraftCovBOnl1 newEmptyInstance() {
        return new productmodel.GL7LmtdCovForDesignatedUnmannedAircraftCovBOnl1();
      }
      
      
    });
  }
}