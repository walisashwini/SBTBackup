package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7IAChangesLiquorLiab.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7IAChangesLiquorLiab extends entity.GL7SublineCov {
  protected GL7IAChangesLiquorLiab()  {
    super((java.lang.Void)null);
  }
  
  public GL7IAChangesLiquorLiab(entity.PolicyPeriod branch)  {
    super(branch, "GL7IAChangesLiquorLiab");
  }
  
  public GL7IAChangesLiquorLiab(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7IAChangesLiquorLiab");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7IAChangesLiquorLiabInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7IAChangesLiquorLiab>() {
      public productmodel.GL7IAChangesLiquorLiab newEmptyInstance() {
        return new productmodel.GL7IAChangesLiquorLiab();
      }
      
      
    });
  }
}