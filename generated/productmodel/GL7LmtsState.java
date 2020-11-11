package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GL7Line/coveragepatterns/GL7LmtsState.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GL7LmtsState extends entity.GL7SublineCov {
  protected GL7LmtsState()  {
    super((java.lang.Void)null);
  }
  
  public GL7LmtsState(entity.PolicyPeriod branch)  {
    super(branch, "GL7LmtsState");
  }
  
  public GL7LmtsState(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GL7LmtsState");
  }
  
  public productmodel.OptionGL7EachCommonCauseBILimit1Type getGL7EachCommonCauseBILimit1Term() {
    return (productmodel.OptionGL7EachCommonCauseBILimit1Type)getCovTerm("GL7EachCommonCauseBILimit1");
  }
  
  public productmodel.OptionGL7EachCommonCauseLossOfMeansOfSupportLimit1Type getGL7EachCommonCauseLossOfMeansOfSupportLimit1Term() {
    return (productmodel.OptionGL7EachCommonCauseLossOfMeansOfSupportLimit1Type)getCovTerm("GL7EachCommonCauseLossOfMeansOfSupportLimit1");
  }
  
  public productmodel.OptionGL7EachPersonBILimit1Type getGL7EachPersonBILimit1Term() {
    return (productmodel.OptionGL7EachPersonBILimit1Type)getCovTerm("GL7EachPersonBILimit1");
  }
  
  public productmodel.OptionGL7EachPersonLossOfMeansOfSupportLimit1Type getGL7EachPersonLossOfMeansOfSupportLimit1Term() {
    return (productmodel.OptionGL7EachPersonLossOfMeansOfSupportLimit1Type)getCovTerm("GL7EachPersonLossOfMeansOfSupportLimit1");
  }
  
  public productmodel.OptionGL7GeneralAggLimitGovSubdivisionType getGL7GeneralAggLimitGovSubdivisionTerm() {
    return (productmodel.OptionGL7GeneralAggLimitGovSubdivisionType)getCovTerm("GL7GeneralAggLimitGovSubdivision");
  }
  
  public productmodel.OptionGL7LossSupportPerInjuredPersonType getGL7LossSupportPerInjuredPersonTerm() {
    return (productmodel.OptionGL7LossSupportPerInjuredPersonType)getCovTerm("GL7LossSupportPerInjuredPerson");
  }
  
  public productmodel.OptionGL7PerPersonLimitPDType getGL7PerPersonLimitPDTerm() {
    return (productmodel.OptionGL7PerPersonLimitPDType)getCovTerm("GL7PerPersonLimitPD");
  }
  
  public productmodel.OptionGL7PerPersonLimitType getGL7PerPersonLimitTerm() {
    return (productmodel.OptionGL7PerPersonLimitType)getCovTerm("GL7PerPersonLimit");
  }
  
  public productmodel.OptionGL7PersonalAndAdvertisingInjuryLimitGovSubdivisionType getGL7PersonalAndAdvertisingInjuryLimitGovSubdivisionTerm() {
    return (productmodel.OptionGL7PersonalAndAdvertisingInjuryLimitGovSubdivisionType)getCovTerm("GL7PersonalAndAdvertisingInjuryLimitGovSubdivision");
  }
  
  public productmodel.OptionGL7PremOpsProdsEachOccurrenceLimitGovSubdivisionType getGL7PremOpsProdsEachOccurrenceLimitGovSubdivisionTerm() {
    return (productmodel.OptionGL7PremOpsProdsEachOccurrenceLimitGovSubdivisionType)getCovTerm("GL7PremOpsProdsEachOccurrenceLimitGovSubdivision");
  }
  
  public productmodel.OptionGL7ProdsCompldOpsAggLimitGovSubdivisionType getGL7ProdsCompldOpsAggLimitGovSubdivisionTerm() {
    return (productmodel.OptionGL7ProdsCompldOpsAggLimitGovSubdivisionType)getCovTerm("GL7ProdsCompldOpsAggLimitGovSubdivision");
  }
  
  public boolean getHasGL7EachCommonCauseBILimit1Term() {
    return hasCovTerm("GL7EachCommonCauseBILimit1");
  }
  
  public boolean getHasGL7EachCommonCauseLossOfMeansOfSupportLimit1Term() {
    return hasCovTerm("GL7EachCommonCauseLossOfMeansOfSupportLimit1");
  }
  
  public boolean getHasGL7EachPersonBILimit1Term() {
    return hasCovTerm("GL7EachPersonBILimit1");
  }
  
  public boolean getHasGL7EachPersonLossOfMeansOfSupportLimit1Term() {
    return hasCovTerm("GL7EachPersonLossOfMeansOfSupportLimit1");
  }
  
  public boolean getHasGL7GeneralAggLimitGovSubdivisionTerm() {
    return hasCovTerm("GL7GeneralAggLimitGovSubdivision");
  }
  
  public boolean getHasGL7LossSupportPerInjuredPersonTerm() {
    return hasCovTerm("GL7LossSupportPerInjuredPerson");
  }
  
  public boolean getHasGL7PerPersonLimitPDTerm() {
    return hasCovTerm("GL7PerPersonLimitPD");
  }
  
  public boolean getHasGL7PerPersonLimitTerm() {
    return hasCovTerm("GL7PerPersonLimit");
  }
  
  public boolean getHasGL7PersonalAndAdvertisingInjuryLimitGovSubdivisionTerm() {
    return hasCovTerm("GL7PersonalAndAdvertisingInjuryLimitGovSubdivision");
  }
  
  public boolean getHasGL7PremOpsProdsEachOccurrenceLimitGovSubdivisionTerm() {
    return hasCovTerm("GL7PremOpsProdsEachOccurrenceLimitGovSubdivision");
  }
  
  public boolean getHasGL7ProdsCompldOpsAggLimitGovSubdivisionTerm() {
    return hasCovTerm("GL7ProdsCompldOpsAggLimitGovSubdivision");
  }
  
  static {
    com.guidewire._generated.productmodel.GL7LmtsStateInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GL7LmtsState>() {
      public productmodel.GL7LmtsState newEmptyInstance() {
        return new productmodel.GL7LmtsState();
      }
      
      
    });
  }
}