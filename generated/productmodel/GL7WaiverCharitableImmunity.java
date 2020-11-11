package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7WaiverCharitableImmunity.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7WaiverCharitableImmunity extends entity.GL7SublineTypeCond {
  protected GL7WaiverCharitableImmunity()  {
    super((java.lang.Void)null);
  }
  
  public GL7WaiverCharitableImmunity(entity.PolicyPeriod branch)  {
    super(branch, "GL7WaiverCharitableImmunity");
  }
  
  public GL7WaiverCharitableImmunity(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7WaiverCharitableImmunity");
  }
  
  public productmodel.DirectGL7ManualPremium169Type getGL7ManualPremium169Term() {
    return (productmodel.DirectGL7ManualPremium169Type)getCovTerm("GL7ManualPremium169");
  }
  
  public boolean getHasGL7ManualPremium169Term() {
    return hasCovTerm("GL7ManualPremium169");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7WaiverCharitableImmunityInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7WaiverCharitableImmunity>() {
      public productmodel.GL7WaiverCharitableImmunity newEmptyInstance() {
        return new productmodel.GL7WaiverCharitableImmunity();
      }
      
      
    });
  }
}