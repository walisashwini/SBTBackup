package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7PollutionLiabCovFormDesigntdSites.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7PollutionLiabCovFormDesigntdSites extends entity.GL7SublineTypeCov {
  protected GL7PollutionLiabCovFormDesigntdSites()  {
    super((java.lang.Void)null);
  }
  
  public GL7PollutionLiabCovFormDesigntdSites(entity.PolicyPeriod branch)  {
    super(branch, "GL7PollutionLiabCovFormDesigntdSites");
  }
  
  public GL7PollutionLiabCovFormDesigntdSites(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7PollutionLiabCovFormDesigntdSites");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7PollutionLiabCovFormDesigntdSitesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7PollutionLiabCovFormDesigntdSites>() {
      public productmodel.GL7PollutionLiabCovFormDesigntdSites newEmptyInstance() {
        return new productmodel.GL7PollutionLiabCovFormDesigntdSites();
      }
      
      
    });
  }
}