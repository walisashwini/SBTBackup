package gw.sbt.loader.stateupdate.ratebook.rules

uses gw.sbt.artifacts.ratebooks.DefaultRateFactorRowXml
uses gw.sbt.artifacts.ratebooks.RateBookXml
uses gw.sbt.loader.RateBookHelper
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.comparisons.RateTableComparison

class UpdateRateTableRule implements RateTableMergingRule {

  override function matches(rateTableComparison : RateTableComparison) : boolean {
    return rateTableComparison.CompareAdoptedToNew.IsChange    // ISO Updated
          or rateTableComparison.CompareCurrentToNew.IsChange  // Customer Updated
  }

  override function apply(rateTableComparison : RateTableComparison,
                          pcaMergedCWRatebook : RateBookXml,
                          stateRateBookXmlInUpdate : RateBookXml,
                          cwRateBookXmlInUpdate : RateBookXml,
                          stateRateBookXmlInAdopted : RateBookXml,
                          cwRateBookXmlInAdopted : RateBookXml) {
    var isStateTable = RateBookHelper.isStateTable(rateTableComparison)
    var targetRateBookXml = pcaMergedCWRatebook
    if (isStateTable) {
      targetRateBookXml = stateRateBookXmlInUpdate
    }
    var namespace = targetRateBookXml.NameSpace
    var factorRowsComparisonList = rateTableComparison.FactorRowComparisons
    var rateFactorRowsInUpdate = targetRateBookXml.AllRateFactorRows

    var factorRowsToBeAdded : List<DefaultRateFactorRowXml>= {}
    var factorRowsRemoved = false
    var factorPhysicalColumn = rateTableComparison.CanonicalVersion.FactorPhysicalColumnName

    factorRowsComparisonList.each(\factorRowComparison -> {
      if (factorRowComparison.Decision == UpdateDecision.REJECT) {  // User Reject - Keep current value
        if (RateBookHelper.isCustomerAddedFactorRow(factorRowComparison)) {
          //it is a customer added factor row. need to create the factor row on the fly.
          var rateFactorRowXmlTobeAdded = RateBookHelper.createCustomerAddedFactorRow(rateTableComparison, factorRowComparison, namespace)
          factorRowsToBeAdded.add(rateFactorRowXmlTobeAdded)
        } else {
          var twoWayCompare = factorRowComparison.CompareCurrentToNew // Compare current to new.
          if (twoWayCompare.IsAdd) {  // Added but user Reject, remove from the new book
            rateFactorRowsInUpdate.removeWhere(\factor -> factor.PublicId == factorRowComparison.New.PublicId)
            factorRowsRemoved = true
          } else if (twoWayCompare.IsChange) {  // Changed but user reject, update the rate with Current rate into the new book
            var rateFactorRow = rateFactorRowsInUpdate.firstWhere(\factor -> factor.PublicId == factorRowComparison.New.PublicId)
            if (rateFactorRow != null) {
              rateFactorRow.setElementValue(factorPhysicalColumn, factorRowComparison.Current.Rate) // update the rate in place only
            }
          } else if (twoWayCompare.IsRemove) { // Removed but user reject, copy from adopted, assign the rate from Current, and add back into the new book
            var bookXmlInAdopted = isStateTable ? stateRateBookXmlInAdopted : cwRateBookXmlInAdopted
            var rateFactorRowXmlInAdopted = bookXmlInAdopted.AllRateFactorRows.firstWhere(\row -> row.PublicId == factorRowComparison.Adopted.PublicId)
            if (rateFactorRowXmlInAdopted != null) {
              var rateFactorRowXmlToBeAdded = new DefaultRateFactorRowXml(rateFactorRowXmlInAdopted.Xml)  // make a copy from Adopted
              rateFactorRowXmlToBeAdded.setElementValue(factorPhysicalColumn, factorRowComparison.Current.Rate) // assign the rate from Current
              rateFactorRowXmlToBeAdded.RateTablePublicId = rateTableComparison.New.PublicId // assign the ratetable publicId from new (might have different public id)
              factorRowsToBeAdded.add(rateFactorRowXmlToBeAdded)
            }
          }
        }
      }
    })

    //removed rows
    if (factorRowsRemoved) { // if there is any row removed, all rows need to be removed and then add the eligible rows back
      targetRateBookXml.removeChildren("DefaultRateFactorRow")
      RateBookHelper.addFactorRows(rateFactorRowsInUpdate, targetRateBookXml)
    }
    //added rows
    RateBookHelper.addFactorRows(factorRowsToBeAdded, targetRateBookXml)

    // note:  updated factor rows already be modified in place.
  }
}