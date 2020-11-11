package gw.sbt.loader.stateupdate.ratebook.rules

uses gw.sbt.artifacts.ratebooks.RateBookXml
uses gw.sbt.model.comparisons.RateTableComparison

class NoChangeRateTableRule implements RateTableMergingRule {

  override function matches(rateTableComparison : RateTableComparison) : boolean {
    return not rateTableComparison.CompareAdoptedToNew.IsDifferentOverall    // ISO no change
        and not rateTableComparison.CompareCurrentToNew.IsDifferentOverall  // Customer no change
  }

  override function apply(rateTableComparison: RateTableComparison,
                          pcaMergedCWRatebook: RateBookXml,
                          stateRateBookXmlInUpdate: RateBookXml,
                          cwRateBookXmlInUpdate: RateBookXml,
                          stateRateBookXmlInAdopted: RateBookXml,
                          cwRateBookXmlInAdopted: RateBookXml) {
    //Nothing necessary for loading.
  }
}