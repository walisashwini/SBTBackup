package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7Deds.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7Deds extends entity.GL7SublineTypeCov {
  protected GL7Deds()  {
    super((java.lang.Void)null);
  }
  
  public GL7Deds(entity.PolicyPeriod branch)  {
    super(branch, "GL7Deds");
  }
  
  public GL7Deds(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7Deds");
  }
  
  public productmodel.OptionGL7LiquorDedType getGL7LiquorDedTerm() {
    return (productmodel.OptionGL7LiquorDedType)getCovTerm("GL7LiquorDed");
  }
  
  public productmodel.OptionGL7PremOpsBIDedType getGL7PremOpsBIDedTerm() {
    return (productmodel.OptionGL7PremOpsBIDedType)getCovTerm("GL7PremOpsBIDed");
  }
  
  public productmodel.OptionGL7PremOpsBIPDDedType getGL7PremOpsBIPDDedTerm() {
    return (productmodel.OptionGL7PremOpsBIPDDedType)getCovTerm("GL7PremOpsBIPDDed");
  }
  
  public productmodel.OptionGL7PremOpsPDDedType getGL7PremOpsPDDedTerm() {
    return (productmodel.OptionGL7PremOpsPDDedType)getCovTerm("GL7PremOpsPDDed");
  }
  
  public productmodel.OptionGL7ProdsCompldOpsBIDedType getGL7ProdsCompldOpsBIDedTerm() {
    return (productmodel.OptionGL7ProdsCompldOpsBIDedType)getCovTerm("GL7ProdsCompldOpsBIDed");
  }
  
  public productmodel.OptionGL7ProdsCompldOpsBIPDDedType getGL7ProdsCompldOpsBIPDDedTerm() {
    return (productmodel.OptionGL7ProdsCompldOpsBIPDDedType)getCovTerm("GL7ProdsCompldOpsBIPDDed");
  }
  
  public productmodel.OptionGL7ProdsCompldOpsPDDedType getGL7ProdsCompldOpsPDDedTerm() {
    return (productmodel.OptionGL7ProdsCompldOpsPDDedType)getCovTerm("GL7ProdsCompldOpsPDDed");
  }
  
  public productmodel.OptionGL7ProductWithdrawalDedType getGL7ProductWithdrawalDedTerm() {
    return (productmodel.OptionGL7ProductWithdrawalDedType)getCovTerm("GL7ProductWithdrawalDed");
  }
  
  public boolean getHasGL7LiquorDedTerm() {
    return hasCovTerm("GL7LiquorDed");
  }
  
  public boolean getHasGL7PremOpsBIDedTerm() {
    return hasCovTerm("GL7PremOpsBIDed");
  }
  
  public boolean getHasGL7PremOpsBIPDDedTerm() {
    return hasCovTerm("GL7PremOpsBIPDDed");
  }
  
  public boolean getHasGL7PremOpsPDDedTerm() {
    return hasCovTerm("GL7PremOpsPDDed");
  }
  
  public boolean getHasGL7ProdsCompldOpsBIDedTerm() {
    return hasCovTerm("GL7ProdsCompldOpsBIDed");
  }
  
  public boolean getHasGL7ProdsCompldOpsBIPDDedTerm() {
    return hasCovTerm("GL7ProdsCompldOpsBIPDDed");
  }
  
  public boolean getHasGL7ProdsCompldOpsPDDedTerm() {
    return hasCovTerm("GL7ProdsCompldOpsPDDed");
  }
  
  public boolean getHasGL7ProductWithdrawalDedTerm() {
    return hasCovTerm("GL7ProductWithdrawalDed");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7DedsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7Deds>() {
      public productmodel.GL7Deds newEmptyInstance() {
        return new productmodel.GL7Deds();
      }
      
      
    });
  }
}