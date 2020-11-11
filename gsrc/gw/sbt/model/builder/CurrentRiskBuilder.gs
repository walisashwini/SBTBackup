package gw.sbt.model.builder

uses gw.sbt.config.TargetConfiguration
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.model.Risk
uses gw.sbt.reader.content.RiskAttributeReader
uses gw.sbt.util.LoaderUtil

class CurrentRiskBuilder {
  var _currentConfig : CurrentConfigContents
  var _adoptionDate : Date
  var _jurisdiction : String
  var _policyLineCode : String
  var _risks: List<Risk> = {}

  construct(policyLinePatternCode : String, productAbbreviation : String, config : TargetConfiguration, jurisdiction:String, adoptionDate : Date) {
    _currentConfig = new CurrentConfigContents(policyLinePatternCode, productAbbreviation, config)
    _adoptionDate = adoptionDate
    _jurisdiction = jurisdiction
    _policyLineCode = policyLinePatternCode
  }

  public function toRiskModel(riskName : String) : Risk {
    if (_policyLineCode == "WC7Line") {
      return null
    }
    if (_risks.Empty) {
      //read Risks from current configuration
      _risks = new RiskAttributeReader().read(_currentConfig, _jurisdiction)
    }
    return _risks.firstWhere(\risk -> (risk.Name == riskName or risk.Entity == riskName))
  }
}