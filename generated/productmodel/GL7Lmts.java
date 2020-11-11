package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7Lmts.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7Lmts extends entity.GL7SublineTypeCov {
  protected GL7Lmts()  {
    super((java.lang.Void)null);
  }
  
  public GL7Lmts(entity.PolicyPeriod branch)  {
    super(branch, "GL7Lmts");
  }
  
  public GL7Lmts(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7Lmts");
  }
  
  public productmodel.OptionGL7AggLimit1Type getGL7AggLimit1Term() {
    return (productmodel.OptionGL7AggLimit1Type)getCovTerm("GL7AggLimit1");
  }
  
  public productmodel.DirectGL7EDLAggLimitType getGL7EDLAggLimitTerm() {
    return (productmodel.DirectGL7EDLAggLimitType)getCovTerm("GL7EDLAggLimit");
  }
  
  public productmodel.OptionGL7EachCommonCauseLimitType getGL7EachCommonCauseLimitTerm() {
    return (productmodel.OptionGL7EachCommonCauseLimitType)getCovTerm("GL7EachCommonCauseLimit");
  }
  
  public productmodel.DirectGL7EachElectrDataIncidentLimitType getGL7EachElectrDataIncidentLimitTerm() {
    return (productmodel.DirectGL7EachElectrDataIncidentLimitType)getCovTerm("GL7EachElectrDataIncidentLimit");
  }
  
  public productmodel.OptionGL7EachPollutionIncidentLimitType getGL7EachPollutionIncidentLimitTerm() {
    return (productmodel.OptionGL7EachPollutionIncidentLimitType)getCovTerm("GL7EachPollutionIncidentLimit");
  }
  
  public productmodel.OptionGL7GeneralAggLimit1Type getGL7GeneralAggLimit1Term() {
    return (productmodel.OptionGL7GeneralAggLimit1Type)getCovTerm("GL7GeneralAggLimit1");
  }
  
  public productmodel.OptionGL7IncidentLimitType getGL7IncidentLimitTerm() {
    return (productmodel.OptionGL7IncidentLimitType)getCovTerm("GL7IncidentLimit");
  }
  
  public productmodel.OptionGL7OwnersContractorsAggLimitType getGL7OwnersContractorsAggLimitTerm() {
    return (productmodel.OptionGL7OwnersContractorsAggLimitType)getCovTerm("GL7OwnersContractorsAggLimit");
  }
  
  public productmodel.OptionGL7OwnersContractorsEachOccurrenceLimitType getGL7OwnersContractorsEachOccurrenceLimitTerm() {
    return (productmodel.OptionGL7OwnersContractorsEachOccurrenceLimitType)getCovTerm("GL7OwnersContractorsEachOccurrenceLimit");
  }
  
  public productmodel.OptionGL7PersonalAndAdvertisingInjuryLimitType getGL7PersonalAndAdvertisingInjuryLimitTerm() {
    return (productmodel.OptionGL7PersonalAndAdvertisingInjuryLimitType)getCovTerm("GL7PersonalAndAdvertisingInjuryLimit");
  }
  
  public productmodel.OptionGL7PollutionAggLimitType getGL7PollutionAggLimitTerm() {
    return (productmodel.OptionGL7PollutionAggLimitType)getCovTerm("GL7PollutionAggLimit");
  }
  
  public productmodel.OptionGL7PremOpsProdsEachOccurrenceLimitType getGL7PremOpsProdsEachOccurrenceLimitTerm() {
    return (productmodel.OptionGL7PremOpsProdsEachOccurrenceLimitType)getCovTerm("GL7PremOpsProdsEachOccurrenceLimit");
  }
  
  public productmodel.OptionGL7ProdsCompldOpsAggLimitType getGL7ProdsCompldOpsAggLimitTerm() {
    return (productmodel.OptionGL7ProdsCompldOpsAggLimitType)getCovTerm("GL7ProdsCompldOpsAggLimit");
  }
  
  public productmodel.OptionGL7ProdsWithdrawalAggLimitType getGL7ProdsWithdrawalAggLimitTerm() {
    return (productmodel.OptionGL7ProdsWithdrawalAggLimitType)getCovTerm("GL7ProdsWithdrawalAggLimit");
  }
  
  public productmodel.OptionGL7RailroadAggLimitType getGL7RailroadAggLimitTerm() {
    return (productmodel.OptionGL7RailroadAggLimitType)getCovTerm("GL7RailroadAggLimit");
  }
  
  public productmodel.OptionGL7RailroadEachOccurrenceLimitType getGL7RailroadEachOccurrenceLimitTerm() {
    return (productmodel.OptionGL7RailroadEachOccurrenceLimitType)getCovTerm("GL7RailroadEachOccurrenceLimit");
  }
  
  public productmodel.OptionGL7USTAggLimitType getGL7USTAggLimitTerm() {
    return (productmodel.OptionGL7USTAggLimitType)getCovTerm("GL7USTAggLimit");
  }
  
  public boolean getHasGL7AggLimit1Term() {
    return hasCovTerm("GL7AggLimit1");
  }
  
  public boolean getHasGL7EDLAggLimitTerm() {
    return hasCovTerm("GL7EDLAggLimit");
  }
  
  public boolean getHasGL7EachCommonCauseLimitTerm() {
    return hasCovTerm("GL7EachCommonCauseLimit");
  }
  
  public boolean getHasGL7EachElectrDataIncidentLimitTerm() {
    return hasCovTerm("GL7EachElectrDataIncidentLimit");
  }
  
  public boolean getHasGL7EachPollutionIncidentLimitTerm() {
    return hasCovTerm("GL7EachPollutionIncidentLimit");
  }
  
  public boolean getHasGL7GeneralAggLimit1Term() {
    return hasCovTerm("GL7GeneralAggLimit1");
  }
  
  public boolean getHasGL7IncidentLimitTerm() {
    return hasCovTerm("GL7IncidentLimit");
  }
  
  public boolean getHasGL7OwnersContractorsAggLimitTerm() {
    return hasCovTerm("GL7OwnersContractorsAggLimit");
  }
  
  public boolean getHasGL7OwnersContractorsEachOccurrenceLimitTerm() {
    return hasCovTerm("GL7OwnersContractorsEachOccurrenceLimit");
  }
  
  public boolean getHasGL7PersonalAndAdvertisingInjuryLimitTerm() {
    return hasCovTerm("GL7PersonalAndAdvertisingInjuryLimit");
  }
  
  public boolean getHasGL7PollutionAggLimitTerm() {
    return hasCovTerm("GL7PollutionAggLimit");
  }
  
  public boolean getHasGL7PremOpsProdsEachOccurrenceLimitTerm() {
    return hasCovTerm("GL7PremOpsProdsEachOccurrenceLimit");
  }
  
  public boolean getHasGL7ProdsCompldOpsAggLimitTerm() {
    return hasCovTerm("GL7ProdsCompldOpsAggLimit");
  }
  
  public boolean getHasGL7ProdsWithdrawalAggLimitTerm() {
    return hasCovTerm("GL7ProdsWithdrawalAggLimit");
  }
  
  public boolean getHasGL7RailroadAggLimitTerm() {
    return hasCovTerm("GL7RailroadAggLimit");
  }
  
  public boolean getHasGL7RailroadEachOccurrenceLimitTerm() {
    return hasCovTerm("GL7RailroadEachOccurrenceLimit");
  }
  
  public boolean getHasGL7USTAggLimitTerm() {
    return hasCovTerm("GL7USTAggLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7Lmts>() {
      public productmodel.GL7Lmts newEmptyInstance() {
        return new productmodel.GL7Lmts();
      }
      
      
    });
  }
}