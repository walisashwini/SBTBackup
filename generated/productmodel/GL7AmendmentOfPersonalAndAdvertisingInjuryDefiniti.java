package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7AmendmentOfPersonalAndAdvertisingInjuryDefiniti.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7AmendmentOfPersonalAndAdvertisingInjuryDefiniti extends entity.GL7SublineTypeCov {
  protected GL7AmendmentOfPersonalAndAdvertisingInjuryDefiniti()  {
    super((java.lang.Void)null);
  }
  
  public GL7AmendmentOfPersonalAndAdvertisingInjuryDefiniti(entity.PolicyPeriod branch)  {
    super(branch, "GL7AmendmentOfPersonalAndAdvertisingInjuryDefiniti");
  }
  
  public GL7AmendmentOfPersonalAndAdvertisingInjuryDefiniti(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7AmendmentOfPersonalAndAdvertisingInjuryDefiniti");
  }
  
  public productmodel.DirectGL7ManualPremium12Type getGL7ManualPremium12Term() {
    return (productmodel.DirectGL7ManualPremium12Type)getCovTerm("GL7ManualPremium12");
  }
  
  public boolean getHasGL7ManualPremium12Term() {
    return hasCovTerm("GL7ManualPremium12");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7AmendmentOfPersonalAndAdvertisingInjuryDefinitiInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7AmendmentOfPersonalAndAdvertisingInjuryDefiniti>() {
      public productmodel.GL7AmendmentOfPersonalAndAdvertisingInjuryDefiniti newEmptyInstance() {
        return new productmodel.GL7AmendmentOfPersonalAndAdvertisingInjuryDefiniti();
      }
      
      
    });
  }
}