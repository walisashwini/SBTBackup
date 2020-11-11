package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtdCovForDesignatedUnmannedAircraf1.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LmtdCovForDesignatedUnmannedAircraf1 extends entity.GL7SublineTypeCov {
  protected GL7LmtdCovForDesignatedUnmannedAircraf1()  {
    super((java.lang.Void)null);
  }
  
  public GL7LmtdCovForDesignatedUnmannedAircraf1(entity.PolicyPeriod branch)  {
    super(branch, "GL7LmtdCovForDesignatedUnmannedAircraf1");
  }
  
  public GL7LmtdCovForDesignatedUnmannedAircraf1(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LmtdCovForDesignatedUnmannedAircraf1");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtdCovForDesignatedUnmannedAircraf1InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LmtdCovForDesignatedUnmannedAircraf1>() {
      public productmodel.GL7LmtdCovForDesignatedUnmannedAircraf1 newEmptyInstance() {
        return new productmodel.GL7LmtdCovForDesignatedUnmannedAircraf1();
      }
      
      
    });
  }
}