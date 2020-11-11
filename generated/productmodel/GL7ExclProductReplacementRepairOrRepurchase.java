package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7ExclProductReplacementRepairOrRepurchase.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7ExclProductReplacementRepairOrRepurchase extends entity.GL7SublineTypeExcl {
  protected GL7ExclProductReplacementRepairOrRepurchase()  {
    super((java.lang.Void)null);
  }
  
  public GL7ExclProductReplacementRepairOrRepurchase(entity.PolicyPeriod branch)  {
    super(branch, "GL7ExclProductReplacementRepairOrRepurchase");
  }
  
  public GL7ExclProductReplacementRepairOrRepurchase(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7ExclProductReplacementRepairOrRepurchase");
  }
  
  public productmodel.DirectGL7ManualPremium101Type getGL7ManualPremium101Term() {
    return (productmodel.DirectGL7ManualPremium101Type)getCovTerm("GL7ManualPremium101");
  }
  
  public boolean getHasGL7ManualPremium101Term() {
    return hasCovTerm("GL7ManualPremium101");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7ExclProductReplacementRepairOrRepurchaseInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7ExclProductReplacementRepairOrRepurchase>() {
      public productmodel.GL7ExclProductReplacementRepairOrRepurchase newEmptyInstance() {
        return new productmodel.GL7ExclProductReplacementRepairOrRepurchase();
      }
      
      
    });
  }
}