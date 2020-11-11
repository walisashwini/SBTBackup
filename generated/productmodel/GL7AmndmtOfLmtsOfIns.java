package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmndmtOfLmtsOfIns.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmndmtOfLmtsOfIns extends entity.GL7SublineTypeCond {
  protected GL7AmndmtOfLmtsOfIns()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmndmtOfLmtsOfIns(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmndmtOfLmtsOfIns");
  }
  
  public GL7AmndmtOfLmtsOfIns(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmndmtOfLmtsOfIns");
  }
  
  public productmodel.DirectGL7DamageToPremRentedToYouLimitType getGL7DamageToPremRentedToYouLimitTerm() {
    return (productmodel.DirectGL7DamageToPremRentedToYouLimitType)getCovTerm("GL7DamageToPremRentedToYouLimit");
  }
  
  public productmodel.DirectGL7EachOccurrenceLimitType getGL7EachOccurrenceLimitTerm() {
    return (productmodel.DirectGL7EachOccurrenceLimitType)getCovTerm("GL7EachOccurrenceLimit");
  }
  
  public productmodel.DirectGL7GeneralAggLimitType getGL7GeneralAggLimitTerm() {
    return (productmodel.DirectGL7GeneralAggLimitType)getCovTerm("GL7GeneralAggLimit");
  }
  
  public productmodel.DirectGL7ManualPremium16Type getGL7ManualPremium16Term() {
    return (productmodel.DirectGL7ManualPremium16Type)getCovTerm("GL7ManualPremium16");
  }
  
  public productmodel.DirectGL7MedicalExpenseLimitType getGL7MedicalExpenseLimitTerm() {
    return (productmodel.DirectGL7MedicalExpenseLimitType)getCovTerm("GL7MedicalExpenseLimit");
  }
  
  public productmodel.DirectGL7PersAndAdvertInjLimitType getGL7PersAndAdvertInjLimitTerm() {
    return (productmodel.DirectGL7PersAndAdvertInjLimitType)getCovTerm("GL7PersAndAdvertInjLimit");
  }
  
  public productmodel.DirectGL7ProdCompOpsAggLimitType getGL7ProdCompOpsAggLimitTerm() {
    return (productmodel.DirectGL7ProdCompOpsAggLimitType)getCovTerm("GL7ProdCompOpsAggLimit");
  }
  
  public boolean getHasGL7DamageToPremRentedToYouLimitTerm() {
    return hasCovTerm("GL7DamageToPremRentedToYouLimit");
  }
  
  public boolean getHasGL7EachOccurrenceLimitTerm() {
    return hasCovTerm("GL7EachOccurrenceLimit");
  }
  
  public boolean getHasGL7GeneralAggLimitTerm() {
    return hasCovTerm("GL7GeneralAggLimit");
  }
  
  public boolean getHasGL7ManualPremium16Term() {
    return hasCovTerm("GL7ManualPremium16");
  }
  
  public boolean getHasGL7MedicalExpenseLimitTerm() {
    return hasCovTerm("GL7MedicalExpenseLimit");
  }
  
  public boolean getHasGL7PersAndAdvertInjLimitTerm() {
    return hasCovTerm("GL7PersAndAdvertInjLimit");
  }
  
  public boolean getHasGL7ProdCompOpsAggLimitTerm() {
    return hasCovTerm("GL7ProdCompOpsAggLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmndmtOfLmtsOfInsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmndmtOfLmtsOfIns>() {
      public productmodel.GL7AmndmtOfLmtsOfIns newEmptyInstance() {
        return new productmodel.GL7AmndmtOfLmtsOfIns();
      }
      
      
    });
  }
}