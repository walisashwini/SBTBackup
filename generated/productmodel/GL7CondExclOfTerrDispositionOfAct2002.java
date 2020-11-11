package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CondExclOfTerrDispositionOfAct2002.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CondExclOfTerrDispositionOfAct2002 extends entity.GL7SublineTypeExcl {
  protected GL7CondExclOfTerrDispositionOfAct2002()  {
    super((java.lang.Void)null);
  }
  
  public GL7CondExclOfTerrDispositionOfAct2002(entity.PolicyPeriod branch)  {
    super(branch, "GL7CondExclOfTerrDispositionOfAct2002");
  }
  
  public GL7CondExclOfTerrDispositionOfAct2002(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CondExclOfTerrDispositionOfAct2002");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CondExclOfTerrDispositionOfAct2002InternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CondExclOfTerrDispositionOfAct2002>() {
      public productmodel.GL7CondExclOfTerrDispositionOfAct2002 newEmptyInstance() {
        return new productmodel.GL7CondExclOfTerrDispositionOfAct2002();
      }
      
      
    });
  }
}