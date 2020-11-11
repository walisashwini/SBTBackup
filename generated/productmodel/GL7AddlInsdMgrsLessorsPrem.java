package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdMgrsLessorsPrem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdMgrsLessorsPrem extends entity.GL7LocationSchedCov {
  protected GL7AddlInsdMgrsLessorsPrem()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdMgrsLessorsPrem(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdMgrsLessorsPrem");
  }
  
  public GL7AddlInsdMgrsLessorsPrem(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdMgrsLessorsPrem");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdMgrsLessorsPremInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdMgrsLessorsPrem>() {
      public productmodel.GL7AddlInsdMgrsLessorsPrem newEmptyInstance() {
        return new productmodel.GL7AddlInsdMgrsLessorsPrem();
      }
      
      
    });
  }
}