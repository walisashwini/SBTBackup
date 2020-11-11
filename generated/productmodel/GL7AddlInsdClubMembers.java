package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AddlInsdClubMembers.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AddlInsdClubMembers extends entity.GL7SublineTypeCov {
  protected GL7AddlInsdClubMembers()  {
    super((java.lang.Void)null);
  }
  
  public GL7AddlInsdClubMembers(entity.PolicyPeriod branch)  {
    super(branch, "GL7AddlInsdClubMembers");
  }
  
  public GL7AddlInsdClubMembers(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AddlInsdClubMembers");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AddlInsdClubMembersInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AddlInsdClubMembers>() {
      public productmodel.GL7AddlInsdClubMembers newEmptyInstance() {
        return new productmodel.GL7AddlInsdClubMembers();
      }
      
      
    });
  }
}