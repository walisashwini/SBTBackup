package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs extends entity.GL7SublineTypeSchedExcl {
  protected GL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs()  {
    super((java.lang.Void)null);
  }
  
  public GL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs(entity.PolicyPeriod branch)  {
    super(branch, "GL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs");
  }
  
  public GL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs");
  }
  
  public productmodel.DirectGL7ManualPremium173Type getGL7ManualPremium173Term() {
    return (productmodel.DirectGL7ManualPremium173Type)getCovTerm("GL7ManualPremium173");
  }
  
  public boolean getHasGL7ManualPremium173Term() {
    return hasCovTerm("GL7ManualPremium173");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs>() {
      public productmodel.GL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs newEmptyInstance() {
        return new productmodel.GL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs();
      }
      
      
    });
  }
}