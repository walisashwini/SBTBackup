package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7TotalPollutionExclForDesignatedProdsOrWork.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7TotalPollutionExclForDesignatedProdsOrWork extends entity.GL7SublineTypeSchedExcl {
  protected GL7TotalPollutionExclForDesignatedProdsOrWork()  {
    super((java.lang.Void)null);
  }
  
  public GL7TotalPollutionExclForDesignatedProdsOrWork(entity.PolicyPeriod branch)  {
    super(branch, "GL7TotalPollutionExclForDesignatedProdsOrWork");
  }
  
  public GL7TotalPollutionExclForDesignatedProdsOrWork(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7TotalPollutionExclForDesignatedProdsOrWork");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7TotalPollutionExclForDesignatedProdsOrWorkInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7TotalPollutionExclForDesignatedProdsOrWork>() {
      public productmodel.GL7TotalPollutionExclForDesignatedProdsOrWork newEmptyInstance() {
        return new productmodel.GL7TotalPollutionExclForDesignatedProdsOrWork();
      }
      
      
    });
  }
}