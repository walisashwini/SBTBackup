package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ProflLiabExclHealthExerciseClubCommerciallyOper.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ProflLiabExclHealthExerciseClubCommerciallyOper extends entity.GL7SublineTypeExcl {
  protected GL7ProflLiabExclHealthExerciseClubCommerciallyOper()  {
    super((java.lang.Void)null);
  }
  
  public GL7ProflLiabExclHealthExerciseClubCommerciallyOper(entity.PolicyPeriod branch)  {
    super(branch, "GL7ProflLiabExclHealthExerciseClubCommerciallyOper");
  }
  
  public GL7ProflLiabExclHealthExerciseClubCommerciallyOper(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ProflLiabExclHealthExerciseClubCommerciallyOper");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ProflLiabExclHealthExerciseClubCommerciallyOperInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ProflLiabExclHealthExerciseClubCommerciallyOper>() {
      public productmodel.GL7ProflLiabExclHealthExerciseClubCommerciallyOper newEmptyInstance() {
        return new productmodel.GL7ProflLiabExclHealthExerciseClubCommerciallyOper();
      }
      
      
    });
  }
}