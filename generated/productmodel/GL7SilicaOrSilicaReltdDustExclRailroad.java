package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7SilicaOrSilicaReltdDustExclRailroad.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7SilicaOrSilicaReltdDustExclRailroad extends entity.GL7SublineTypeExcl {
  protected GL7SilicaOrSilicaReltdDustExclRailroad()  {
    super((java.lang.Void)null);
  }
  
  public GL7SilicaOrSilicaReltdDustExclRailroad(entity.PolicyPeriod branch)  {
    super(branch, "GL7SilicaOrSilicaReltdDustExclRailroad");
  }
  
  public GL7SilicaOrSilicaReltdDustExclRailroad(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7SilicaOrSilicaReltdDustExclRailroad");
  }
  
  public productmodel.DirectGL7ManualPremium154Type getGL7ManualPremium154Term() {
    return (productmodel.DirectGL7ManualPremium154Type)getCovTerm("GL7ManualPremium154");
  }
  
  public boolean getHasGL7ManualPremium154Term() {
    return hasCovTerm("GL7ManualPremium154");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7SilicaOrSilicaReltdDustExclRailroadInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7SilicaOrSilicaReltdDustExclRailroad>() {
      public productmodel.GL7SilicaOrSilicaReltdDustExclRailroad newEmptyInstance() {
        return new productmodel.GL7SilicaOrSilicaReltdDustExclRailroad();
      }
      
      
    });
  }
}