package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7PollutionLiabLmtdCovFormDesigntdSites.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7PollutionLiabLmtdCovFormDesigntdSites extends entity.GL7SublineTypeCond {
  protected GL7PollutionLiabLmtdCovFormDesigntdSites()  {
    super((java.lang.Void)null);
  }
  
  public GL7PollutionLiabLmtdCovFormDesigntdSites(entity.PolicyPeriod branch)  {
    super(branch, "GL7PollutionLiabLmtdCovFormDesigntdSites");
  }
  
  public GL7PollutionLiabLmtdCovFormDesigntdSites(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7PollutionLiabLmtdCovFormDesigntdSites");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7PollutionLiabLmtdCovFormDesigntdSitesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7PollutionLiabLmtdCovFormDesigntdSites>() {
      public productmodel.GL7PollutionLiabLmtdCovFormDesigntdSites newEmptyInstance() {
        return new productmodel.GL7PollutionLiabLmtdCovFormDesigntdSites();
      }
      
      
    });
  }
}