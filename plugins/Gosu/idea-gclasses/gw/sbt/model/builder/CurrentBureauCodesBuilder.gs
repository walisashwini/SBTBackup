package gw.sbt.model.builder

uses gw.sbt.config.TargetConfiguration
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.model.bureau.BureauCodes
uses gw.sbt.reader.content.bureau.BureauCodeReader

class CurrentBureauCodesBuilder {
  var _policyLinePatternCode : String
  var _productAbbreviation : String
  var _currentConfig : CurrentConfigContents
  var _adoptionDate : Date
  var _jurisdiction : String
  var _systemTablesToBeRead: Set<String>

  construct(policyLinePatternCode : String, productAbbreviation : String, config : TargetConfiguration,
            jurisdiction : String, adoptionDate : Date, systemTablesToBeRead: Set<String> = null) {
    _policyLinePatternCode = policyLinePatternCode
    _productAbbreviation = productAbbreviation
    _currentConfig = new CurrentConfigContents(policyLinePatternCode, productAbbreviation, config)
    _adoptionDate = adoptionDate
    _jurisdiction = jurisdiction
    _systemTablesToBeRead = systemTablesToBeRead
  }

  public function read() : List<BureauCodes> {
    final var bureauCodeReader= new BureauCodeReader ()
    var bureauCodesList = bureauCodeReader.readFromCurrent(_currentConfig, _jurisdiction, _policyLinePatternCode, _adoptionDate, _systemTablesToBeRead)
    return bureauCodesList
  }
}