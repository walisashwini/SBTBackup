package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/GL7Line.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7Line extends entity.GL7GeneralLiabilityLine {
  protected GL7Line()  {
    super((java.lang.Void)null);
  }
  
  public GL7Line(entity.PolicyPeriod branch)  {
    super(branch, "GL7Line");
  }
  
  public GL7Line(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7Line");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LineInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7Line>() {
      public productmodel.GL7Line newEmptyInstance() {
        return new productmodel.GL7Line();
      }
      
      
    });
  }
}