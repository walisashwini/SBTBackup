package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7Y2KCompuReltdAndOtherElectrProbLmtdCovOption.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7Y2KCompuReltdAndOtherElectrProbLmtdCovOption extends entity.GL7SublineTypeSchedExcl {
  protected GL7Y2KCompuReltdAndOtherElectrProbLmtdCovOption()  {
    super((java.lang.Void)null);
  }
  
  public GL7Y2KCompuReltdAndOtherElectrProbLmtdCovOption(entity.PolicyPeriod branch)  {
    super(branch, "GL7Y2KCompuReltdAndOtherElectrProbLmtdCovOption");
  }
  
  public GL7Y2KCompuReltdAndOtherElectrProbLmtdCovOption(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7Y2KCompuReltdAndOtherElectrProbLmtdCovOption");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7Y2KCompuReltdAndOtherElectrProbLmtdCovOptionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7Y2KCompuReltdAndOtherElectrProbLmtdCovOption>() {
      public productmodel.GL7Y2KCompuReltdAndOtherElectrProbLmtdCovOption newEmptyInstance() {
        return new productmodel.GL7Y2KCompuReltdAndOtherElectrProbLmtdCovOption();
      }
      
      
    });
  }
}