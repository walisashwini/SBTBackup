package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ILChangesLiquorLiab.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ILChangesLiquorLiab extends entity.GL7SublineCov {
  protected GL7ILChangesLiquorLiab()  {
    super((java.lang.Void)null);
  }
  
  public GL7ILChangesLiquorLiab(entity.PolicyPeriod branch)  {
    super(branch, "GL7ILChangesLiquorLiab");
  }
  
  public GL7ILChangesLiquorLiab(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ILChangesLiquorLiab");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ILChangesLiquorLiabInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ILChangesLiquorLiab>() {
      public productmodel.GL7ILChangesLiquorLiab newEmptyInstance() {
        return new productmodel.GL7ILChangesLiquorLiab();
      }
      
      
    });
  }
}