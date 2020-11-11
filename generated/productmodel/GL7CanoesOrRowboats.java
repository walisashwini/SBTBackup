package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7CanoesOrRowboats.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7CanoesOrRowboats extends entity.GL7ExposureExcl {
  protected GL7CanoesOrRowboats()  {
    super((java.lang.Void)null);
  }
  
  public GL7CanoesOrRowboats(entity.PolicyPeriod branch)  {
    super(branch, "GL7CanoesOrRowboats");
  }
  
  public GL7CanoesOrRowboats(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7CanoesOrRowboats");
  }
  
  public productmodel.DirectGL7ManualPremium187Type getGL7ManualPremium187Term() {
    return (productmodel.DirectGL7ManualPremium187Type)getCovTerm("GL7ManualPremium187");
  }
  
  public boolean getHasGL7ManualPremium187Term() {
    return hasCovTerm("GL7ManualPremium187");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7CanoesOrRowboatsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7CanoesOrRowboats>() {
      public productmodel.GL7CanoesOrRowboats newEmptyInstance() {
        return new productmodel.GL7CanoesOrRowboats();
      }
      
      
    });
  }
}