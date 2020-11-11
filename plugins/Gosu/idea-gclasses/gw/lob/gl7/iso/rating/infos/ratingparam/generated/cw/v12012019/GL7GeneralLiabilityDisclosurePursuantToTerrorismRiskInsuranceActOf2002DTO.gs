package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityDisclosurePursuantToTerrorismRiskInsuranceActOf2002DTO extends gw.rating.LineModelObject {

  public construct(_gL7DisclosurePursuantToTerrRiskInsuranceActOf2002 : GL7DisclosurePursuantToTerrRiskInsuranceActOf2002, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7DisclosurePursuantToTerrRiskInsuranceActOf2002
    _actualPremiumCertifiedActs = _gL7DisclosurePursuantToTerrRiskInsuranceActOf2002.GL7ActualPremiumCertifiedActsTerm.Value
    _additionalInformation = _gL7DisclosurePursuantToTerrRiskInsuranceActOf2002.GL7AdditionalInformation2Term.Value
    _coverageFormPartPolicy = _gL7DisclosurePursuantToTerrRiskInsuranceActOf2002.GL7CovFormPartPolicy2Term.Value
    _fedShareTerrorismLossesA = _cf.makeIntegerFrom (_gL7DisclosurePursuantToTerrRiskInsuranceActOf2002.GL7FedShareTerrLossesA2Term.Value)
    _fedShareTerrorismLossesB = _cf.makeIntegerFrom (_gL7DisclosurePursuantToTerrRiskInsuranceActOf2002.GL7FedShareTerrLossesB2Term.Value)
    _yearA = _cf.makeIntegerFrom (_gL7DisclosurePursuantToTerrRiskInsuranceActOf2002.GL7YearA2Term.Value)
    _yearB = _cf.makeIntegerFrom (_gL7DisclosurePursuantToTerrRiskInsuranceActOf2002.GL7YearB2Term.Value)
    _displayName = _gL7DisclosurePursuantToTerrRiskInsuranceActOf2002.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDisclosurePursuantToTerrorismRiskInsuranceActOf2002DTO {
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
  protected var _coverageFormPartPolicy : java.lang.String as CoverageFormPartPolicy = ""

  @VisibleInRateflow
  protected var _additionalInformation : java.lang.String as AdditionalInformation = ""

  @VisibleInRateflow
  protected var _actualPremiumCertifiedActs : java.math.BigDecimal as ActualPremiumCertifiedActs = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7DisclosurePursuantToTerrRiskInsuranceActOf2002 {
   return _dataModel as GL7DisclosurePursuantToTerrRiskInsuranceActOf2002
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