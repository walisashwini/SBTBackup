package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclFuneralServ.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclFuneralServ extends entity.GL7SublineTypeExcl {
  protected GL7ExclFuneralServ()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclFuneralServ(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclFuneralServ");
  }
  
  public GL7ExclFuneralServ(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclFuneralServ");
  }
  
  public productmodel.DirectGL7ManualPremium67Type getGL7ManualPremium67Term() {
    return (productmodel.DirectGL7ManualPremium67Type)getCovTerm("GL7ManualPremium67");
  }
  
  public boolean getHasGL7ManualPremium67Term() {
    return hasCovTerm("GL7ManualPremium67");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclFuneralServInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclFuneralServ>() {
      public productmodel.GL7ExclFuneralServ newEmptyInstance() {
        return new productmodel.GL7ExclFuneralServ();
      }
      
      
    });
  }
}