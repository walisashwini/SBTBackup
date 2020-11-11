package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7TerrAllOtherSubline.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7TerrAllOtherSubline extends entity.GL7ExposureCov {
  protected GL7TerrAllOtherSubline()  {
    super((java.lang.Void)null);
  }
  
  public GL7TerrAllOtherSubline(entity.PolicyPeriod branch)  {
    super(branch, "GL7TerrAllOtherSubline");
  }
  
  public GL7TerrAllOtherSubline(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7TerrAllOtherSubline");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7TerrAllOtherSublineInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7TerrAllOtherSubline>() {
      public productmodel.GL7TerrAllOtherSubline newEmptyInstance() {
        return new productmodel.GL7TerrAllOtherSubline();
      }
      
      
    });
  }
}