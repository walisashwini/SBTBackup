package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityEmployeeBenefitsLiabCovClaimsMadeDTO extends gw.rating.LineModelObject {

  public construct(_gL7EmplBenefitsLiabCovClaimsMade : GL7EmplBenefitsLiabCovClaimsMade, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7EmplBenefitsLiabCovClaimsMade
    _aggregateLimitInt = _cf.makeIntegerFrom (_gL7EmplBenefitsLiabCovClaimsMade.GL7AggLimitIntTerm.Value)
    _deductibleInt = _cf.makeIntegerFrom (_gL7EmplBenefitsLiabCovClaimsMade.GL7DedIntTerm.Value)
    _limitEachEmployeeInt = _cf.makeIntegerFrom (_gL7EmplBenefitsLiabCovClaimsMade.GL7LimitEachEmplIntTerm.Value)
    _manualPremium = _gL7EmplBenefitsLiabCovClaimsMade.GL7ManualPremium46Term.Value
    _retroactiveDate = _gL7EmplBenefitsLiabCovClaimsMade.GL7RetroactiveDateTerm.Value
    _displayName = _gL7EmplBenefitsLiabCovClaimsMade.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityEmployeeBenefitsLiabCovClaimsMadeDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _retroactiveDate : java.util.Date as RetroactiveDate = new java.util.Date()

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  @VisibleInRateflow
  protected var _limitEachEmployeeInt : java.lang.Integer as LimitEachEmployeeInt = 0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("EmplBenefitsLiabCovClaimsMade")
  protected var _employeeBenefitsLiabCovClaimsMade : java.lang.String as EmployeeBenefitsLiabCovClaimsMade = ""

  @VisibleInRateflow
  protected var _deductibleInt : java.lang.Integer as DeductibleInt = 0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("CovStatCodeEBL")
  protected var _coverageStatCodeEBL : java.lang.String as CoverageStatCodeEBL = ""

  @VisibleInRateflow
  protected var _aggregateLimitInt : java.lang.Integer as AggregateLimitInt = 0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7EmplBenefitsLiabCovClaimsMade {
   return _dataModel as GL7EmplBenefitsLiabCovClaimsMade
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent
  }
  

  
}