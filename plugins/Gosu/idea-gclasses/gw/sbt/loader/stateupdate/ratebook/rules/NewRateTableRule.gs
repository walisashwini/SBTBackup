package gw.sbt.loader.stateupdate.ratebook.rules

uses gw.sbt.artifacts.ratebooks.RateBookXml
uses gw.sbt.model.comparisons.RateTableComparison

class NewRateTableRule implements RateTableMergingRule{

  override function matches(rateTableComparison: RateTableComparison) : boolean {
    return rateTableComparison.CompareAdoptedToNew.IsAdd    // ISO Added
  }

  override function apply(rateTableComparison: RateTableComparison,
                          pcaMergedCWRatebook: RateBookXml,
                          stateRateBookXmlInUpdate: RateBookXml,
                          cwRateBookXmlInUpdate: RateBookXml,
                          stateRateBookXmlInAdopted: RateBookXml,
                          cwRateBookXmlInAdopted: RateBookXml) {
    //ISO Added NewRate tables, its Decision has been set to 'Accept'.
    //Nothing necessary for loading.
  }
}