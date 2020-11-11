package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtdProductWithdrawalExpenseEndtPolLvl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LmtdProductWithdrawalExpenseEndtPolLvl extends entity.GL7SublineTypeCov {
  protected GL7LmtdProductWithdrawalExpenseEndtPolLvl()  {
    super((java.lang.Void)null);
  }
  
  public GL7LmtdProductWithdrawalExpenseEndtPolLvl(entity.PolicyPeriod branch)  {
    super(branch, "GL7LmtdProductWithdrawalExpenseEndtPolLvl");
  }
  
  public GL7LmtdProductWithdrawalExpenseEndtPolLvl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LmtdProductWithdrawalExpenseEndtPolLvl");
  }
  
  public productmodel.OptionGL7AggLimit8Type getGL7AggLimit8Term() {
    return (productmodel.OptionGL7AggLimit8Type)getCovTerm("GL7AggLimit8");
  }
  
  public productmodel.GenericGL7CutOffDateType getGL7CutOffDateTerm() {
    return (productmodel.GenericGL7CutOffDateType)getCovTerm("GL7CutOffDate");
  }
  
  public productmodel.OptionGL7DedType getGL7DedTerm() {
    return (productmodel.OptionGL7DedType)getCovTerm("GL7Ded");
  }
  
  public productmodel.DirectGL7ManualPremium131Type getGL7ManualPremium131Term() {
    return (productmodel.DirectGL7ManualPremium131Type)getCovTerm("GL7ManualPremium131");
  }
  
  public productmodel.DirectGL7ParticipationPctgPerProdWithdrawalType getGL7ParticipationPctgPerProdWithdrawalTerm() {
    return (productmodel.DirectGL7ParticipationPctgPerProdWithdrawalType)getCovTerm("GL7ParticipationPctgPerProdWithdrawal");
  }
  
  public boolean getHasGL7AggLimit8Term() {
    return hasCovTerm("GL7AggLimit8");
  }
  
  public boolean getHasGL7CutOffDateTerm() {
    return hasCovTerm("GL7CutOffDate");
  }
  
  public boolean getHasGL7DedTerm() {
    return hasCovTerm("GL7Ded");
  }
  
  public boolean getHasGL7ManualPremium131Term() {
    return hasCovTerm("GL7ManualPremium131");
  }
  
  public boolean getHasGL7ParticipationPctgPerProdWithdrawalTerm() {
    return hasCovTerm("GL7ParticipationPctgPerProdWithdrawal");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtdProductWithdrawalExpenseEndtPolLvlInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LmtdProductWithdrawalExpenseEndtPolLvl>() {
      public productmodel.GL7LmtdProductWithdrawalExpenseEndtPolLvl newEmptyInstance() {
        return new productmodel.GL7LmtdProductWithdrawalExpenseEndtPolLvl();
      }
      
      
    });
  }
}