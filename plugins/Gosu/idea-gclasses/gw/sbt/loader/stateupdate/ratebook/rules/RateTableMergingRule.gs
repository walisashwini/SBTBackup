package gw.sbt.loader.stateupdate.ratebook.rules

uses gw.sbt.artifacts.ratebooks.RateBookXml
uses gw.sbt.model.comparisons.RateTableComparison

interface RateTableMergingRule {

  function matches(rateTableComparison: RateTableComparison) : boolean

  function apply(rateTableComparison: RateTableComparison,
                 pcaMergedCWRatebook: RateBookXml,
                 stateRateBookXmlInUpdate: RateBookXml,
                 cwRateBookXmlInUpdate: RateBookXml,
                 stateRateBookXmlInAdopted: RateBookXml,
                 cwRateBookXmlInAdopted: RateBookXml)
}