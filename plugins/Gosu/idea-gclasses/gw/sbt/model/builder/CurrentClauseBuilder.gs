package gw.sbt.model.builder

uses gw.sbt.artifacts.clauses.PolicyClausePattern
uses gw.sbt.artifacts.lookups.ClausePatternLookups
uses gw.sbt.artifacts.lookups.Lookups
uses gw.sbt.config.TargetConfiguration
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.content.Content
uses gw.sbt.extractor.content.index.ClauseIndexCreator
uses gw.sbt.model.clause.Clause
uses gw.sbt.reader.content.ClauseReader
uses java.util.List

class CurrentClauseBuilder {
  var _policyLinePatternCode : String
  var _currentConfig : CurrentConfigContents
  var _adoptionDate : Date

  construct(policyLinePatternCode : String, productAbbreviation : String, config : TargetConfiguration, adoptionDate : Date) {
    _policyLinePatternCode = policyLinePatternCode
    _currentConfig = new CurrentConfigContents(policyLinePatternCode, productAbbreviation, config)
    _adoptionDate = adoptionDate
  }

  construct(policyLinePatternCode : String, currentConfig : CurrentConfigContents, adoptionDate : Date) {
    _policyLinePatternCode = policyLinePatternCode
    _currentConfig = currentConfig
    _adoptionDate = adoptionDate
  }

  function toClauseModel(jurisdiction : String,
                         clauseId : String) : Clause {
    var clausePattern = _currentConfig.getClausePattern(_policyLinePatternCode, clauseId)

    if (clausePattern == null) return null

    var cwLookups = _currentConfig.getClausePatternLookups(_policyLinePatternCode, "CW", clauseId)
    var stateLookups = _currentConfig.getClausePatternLookups(_policyLinePatternCode, jurisdiction, clauseId)
    var lookupsList = {cwLookups, stateLookups}.where(\lookups -> ((lookups != null) and (not lookups.EmptyElement)))
    var clauseConfigContents = clauseConfigContentsFor(clausePattern, ClausePatternLookups.withAllFrom(lookupsList))
    var sbtUpdateIndex = new ClauseIndexCreator(_adoptionDate).createIndex(clauseConfigContents, jurisdiction)

    return new ClauseReader().read(sbtUpdateIndex, _currentConfig, jurisdiction).first()
  }

  private function clauseConfigContentsFor(clausePattern : PolicyClausePattern, lookups : Lookups) : Set<Content> {
    var clauseId = clausePattern.PublicId
    return {
        new Content("clauses/${clauseId}/${clauseId}.xml", clausePattern.Bytes),
        new Content("clauses/${clauseId}/${clauseId}-lookups.xml", lookups.Bytes)
    }
  }
}
