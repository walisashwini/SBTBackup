package gw.sbt.loader.stateupdate.ratebook

uses gw.sbt.artifacts.ratebooks.RateBookXml
uses gw.sbt.loader.stateupdate.ratebook.rules.NewRateTableRule
uses gw.sbt.loader.stateupdate.ratebook.rules.NoChangeRateTableRule
uses gw.sbt.loader.stateupdate.ratebook.rules.RateTableMergingRule
uses gw.sbt.loader.stateupdate.ratebook.rules.RemoveRateTableRule
uses gw.sbt.loader.stateupdate.ratebook.rules.UpdateRateTableRule
uses gw.sbt.model.comparisons.RateTableComparison
uses org.slf4j.LoggerFactory

class RateTableRuleBook {

  var _pcaMergedCWRatebook: RateBookXml
  var _stateRateBookXmlInUpdate: RateBookXml
  var _cwRateBookXmlInUpdate: RateBookXml

  var _stateRateBookXmlInAdopted: RateBookXml
  var _cwRateBookXmlInAdopted: RateBookXml

  private static var _rules : List<RateTableMergingRule> = {
      new NewRateTableRule(),
      new RemoveRateTableRule(),
      new UpdateRateTableRule(),
      new NoChangeRateTableRule()
  }

  public construct(pcaMergedCWRatebook: RateBookXml,
                   stateRateBookXmlInUpdate: RateBookXml,
                   cwRateBookXmlInUpdate: RateBookXml,
                   stateRateBookXmlInAdopted: RateBookXml,
                   cwRateBookXmlInAdopted: RateBookXml) {
    _pcaMergedCWRatebook = pcaMergedCWRatebook
    _stateRateBookXmlInUpdate = stateRateBookXmlInUpdate
    _cwRateBookXmlInUpdate = cwRateBookXmlInUpdate
    _stateRateBookXmlInAdopted = stateRateBookXmlInAdopted
    _cwRateBookXmlInAdopted = cwRateBookXmlInAdopted
  }

  function getMatchingRule(rateTableComparison: RateTableComparison): RateTableMergingRule {
    return _rules.firstWhere(\mergingRule -> mergingRule.matches(rateTableComparison))
  }

  function applyRules(rateTableComparison: RateTableComparison) {
    var matchedRule = getMatchingRule(rateTableComparison)
    if (matchedRule != null) {
      matchedRule.apply(rateTableComparison, _pcaMergedCWRatebook, _stateRateBookXmlInUpdate, _cwRateBookXmlInUpdate, _stateRateBookXmlInAdopted, _cwRateBookXmlInAdopted)
    } else {
      LoggerFactory.getLogger("PCA").warn("The following rate table has been added/removed by the customer. This table needs to be manually added/removed into the PCA generated ratebook as required: ${rateTableComparison.CanonicalVersion.TableName}")
    }
  }
}