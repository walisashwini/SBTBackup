package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclHousingProjects.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclHousingProjects extends entity.GL7SublineTypeExcl {
  protected GL7ExclHousingProjects()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclHousingProjects(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclHousingProjects");
  }
  
  public GL7ExclHousingProjects(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclHousingProjects");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclHousingProjectsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclHousingProjects>() {
      public productmodel.GL7ExclHousingProjects newEmptyInstance() {
        return new productmodel.GL7ExclHousingProjects();
      }
      
      
    });
  }
}