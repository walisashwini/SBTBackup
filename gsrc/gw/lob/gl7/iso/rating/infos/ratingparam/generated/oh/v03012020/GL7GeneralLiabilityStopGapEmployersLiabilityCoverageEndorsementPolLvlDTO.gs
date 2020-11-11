package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityStopGapEmployersLiabilityCoverageEndorsementPolLvlDTO extends gw.rating.LineModelObject {

  public construct(_gL7StopGapEmployersLiabCovEndorsementPolLvl : GL7StopGapEmployersLiabCovEndorsementPolLvl, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7StopGapEmployersLiabCovEndorsementPolLvl
    _limitBodilyInjuryByAccident = (_cf.stateMatches(_gL7StopGapEmployersLiabCovEndorsementPolLvl.OwningCoverable, Parameters)) ? _gL7StopGapEmployersLiabCovEndorsementPolLvl.GL7LimitBIByAccidentTerm.OptionValue.DisplayName : _limitBodilyInjuryByAccident
    _limitBodilyInjuryByDiseaseAggregate = (_cf.stateMatches(_gL7StopGapEmployersLiabCovEndorsementPolLvl.OwningCoverable, Parameters)) ? _gL7StopGapEmployersLiabCovEndorsementPolLvl.GL7LimitBIByDiseaseAggTerm.OptionValue.DisplayName : _limitBodilyInjuryByDiseaseAggregate
    _limitBodilyInjuryByDiseaseEachEmployee = (_cf.stateMatches(_gL7StopGapEmployersLiabCovEndorsementPolLvl.OwningCoverable, Parameters)) ? _gL7StopGapEmployersLiabCovEndorsementPolLvl.GL7LimitBIByDiseaseEachEmplTerm.OptionValue.DisplayName : _limitBodilyInjuryByDiseaseEachEmployee
    _manualPremium = (_cf.stateMatches(_gL7StopGapEmployersLiabCovEndorsementPolLvl.OwningCoverable, Parameters)) ? _gL7StopGapEmployersLiabCovEndorsementPolLvl.GL7ManualPremium214Term.Value : _manualPremium
    _displayName = (_cf.stateMatches(_gL7StopGapEmployersLiabCovEndorsementPolLvl.OwningCoverable, Parameters)) ? _gL7StopGapEmployersLiabCovEndorsementPolLvl.DisplayName : _displayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityStopGapEmployersLiabilityCoverageEndorsementPolLvlDTO {
   return this
  }
  

  @VisibleInRateflow
  var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  @VisibleInRateflow
  var _limitBodilyInjuryByDiseaseEachEmployee : java.lang.String as LimitBodilyInjuryByDiseaseEachEmployee = ""

  @VisibleInRateflow
  var _limitBodilyInjuryByDiseaseAggregate : java.lang.String as LimitBodilyInjuryByDiseaseAggregate = ""

  @VisibleInRateflow
  var _limitBodilyInjuryByAccident : java.lang.String as LimitBodilyInjuryByAccident = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7StopGapEmployersLiabCovEndorsementPolLvl {
   return _dataModel as GL7StopGapEmployersLiabCovEndorsementPolLvl
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  var _parent : GL7GeneralLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent
  }
  

  
}