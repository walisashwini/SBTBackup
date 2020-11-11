package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclServicesFurnishedByHealthCarePrvdrs.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclServicesFurnishedByHealthCarePrvdrs extends entity.GL7SublineTypeSchedExcl {
  protected GL7ExclServicesFurnishedByHealthCarePrvdrs()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclServicesFurnishedByHealthCarePrvdrs(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclServicesFurnishedByHealthCarePrvdrs");
  }
  
  public GL7ExclServicesFurnishedByHealthCarePrvdrs(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclServicesFurnishedByHealthCarePrvdrs");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclServicesFurnishedByHealthCarePrvdrsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclServicesFurnishedByHealthCarePrvdrs>() {
      public productmodel.GL7ExclServicesFurnishedByHealthCarePrvdrs newEmptyInstance() {
        return new productmodel.GL7ExclServicesFurnishedByHealthCarePrvdrs();
      }
      
      
    });
  }
}