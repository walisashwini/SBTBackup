package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO extends entity.GL7SublineTypeSchedExcl {
  protected GL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO()  {
    super((java.lang.Void)null);
  }
  
  public GL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO(entity.PolicyPeriod branch)  {
    super(branch, "GL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO");
  }
  
  public GL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO");
  }
  
  public productmodel.DirectGL7ManualPremium174Type getGL7ManualPremium174Term() {
    return (productmodel.DirectGL7ManualPremium174Type)getCovTerm("GL7ManualPremium174");
  }
  
  public boolean getHasGL7ManualPremium174Term() {
    return hasCovTerm("GL7ManualPremium174");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldOInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO>() {
      public productmodel.GL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO newEmptyInstance() {
        return new productmodel.GL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO();
      }
      
      
    });
  }
}