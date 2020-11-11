package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityDisclosureOfPremiumEstimatedPremiumCertifiedActsTerrorismPursuantTerrorismAct2002DTO extends gw.rating.LineModelObject {

  public construct(_gL7DisclosureOfPremiumEstimatedPremiumCertifiedAct : GL7DisclosureOfPremiumEstimatedPremiumCertifiedAct, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7DisclosureOfPremiumEstimatedPremiumCertifiedAct
    _actualPremiumThrough123105 = _gL7DisclosureOfPremiumEstimatedPremiumCertifiedAct.GL7ActualPremiumThrough123105Term.Value
    _additionalInformation = _gL7DisclosureOfPremiumEstimatedPremiumCertifiedAct.GL7AdditionalInformationTerm.Value
    _coverageFormPartPolicy = _gL7DisclosureOfPremiumEstimatedPremiumCertifiedAct.GL7CovFormPartPolicyTerm.Value
    _endOfYear = _gL7DisclosureOfPremiumEstimatedPremiumCertifiedAct.GL7EndOfYearTerm.Value
    _estimatedPremiumPast123105 = _gL7DisclosureOfPremiumEstimatedPremiumCertifiedAct.GL7EstimatedPremiumPast123105Term.Value
    _fedShareTerrorismLossesA = _cf.makeIntegerFrom (_gL7DisclosureOfPremiumEstimatedPremiumCertifiedAct.GL7FedShareTerrLossesATerm.Value)
    _fedShareTerrorismLossesB = _cf.makeIntegerFrom (_gL7DisclosureOfPremiumEstimatedPremiumCertifiedAct.GL7FedShareTerrLossesBTerm.Value)
    _yearA = _cf.makeIntegerFrom (_gL7DisclosureOfPremiumEstimatedPremiumCertifiedAct.GL7YearATerm.Value)
    _yearB = _cf.makeIntegerFrom (_gL7DisclosureOfPremiumEstimatedPremiumCertifiedAct.GL7YearBTerm.Value)
    _displayName = _gL7DisclosureOfPremiumEstimatedPremiumCertifiedAct.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDisclosureOfPremiumEstimatedPremiumCertifiedActsTerrorismPursuantTerrorismAct2002DTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _yearB : java.lang.Integer as YearB = 0

  @VisibleInRateflow
  protected var _yearA : java.lang.Integer as YearA = 0

  @VisibleInRateflow
  protected var _fedShareTerrorismLossesB : java.lang.Integer as FedShareTerrorismLossesB = 0

  @VisibleInRateflow
  protected var _fedShareTerrorismLossesA : java.lang.Integer as FedShareTerrorismLossesA = 0

  @VisibleInRateflow
  protected var _estimatedPremiumPast123105 : java.math.BigDecimal as EstimatedPremiumPast123105 = 0.0

  @VisibleInRateflow
  protected var _endOfYear : java.lang.String as EndOfYear = ""

  @VisibleInRateflow
  protected var _coverageFormPartPolicy : java.lang.String as CoverageFormPartPolicy = ""

  @VisibleInRateflow
  protected var _additionalInformation : java.lang.String as AdditionalInformation = ""

  @VisibleInRateflow
  protected var _actualPremiumThrough123105 : java.math.BigDecimal as ActualPremiumThrough123105 = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7DisclosureOfPremiumEstimatedPremiumCertifiedAct {
   return _dataModel as GL7DisclosureOfPremiumEstimatedPremiumCertifiedAct
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