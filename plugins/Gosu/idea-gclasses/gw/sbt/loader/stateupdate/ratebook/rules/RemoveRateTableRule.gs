package gw.sbt.loader.stateupdate.ratebook.rules

uses gw.sbt.artifacts.ratebooks.DefaultRateFactorRowXml
uses gw.sbt.artifacts.ratebooks.RateBookXml
uses gw.sbt.loader.RateBookHelper
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.comparisons.RateTableComparison

class RemoveRateTableRule implements RateTableMergingRule {

  override function matches(rateTableComparison : RateTableComparison) : boolean {
    return rateTableComparison.CompareAdoptedToNew.IsRemove // ISO Removed
  }

  /**
   * if decision is Reject, the ratetable in current should be added
   * a countrywide change should be applied to countrywide ratebook,
   * a state change should be applied to state ratebook
   */
  override function apply(rateTableComparison : RateTableComparison,
                          pcaMergedCWRatebook : RateBookXml,
                          stateRateBookXmlInUpdate : RateBookXml,
                          cwRateBookXmlInUpdate : RateBookXml,
                          stateRateBookXmlInAdopted : RateBookXml,
                          cwRateBookXmlInAdopted : RateBookXml) {
    //ISO Removed rate tables, its Decision has been set to 'Accept'.
    //Nothing necessary for loading.

//    if (rateTableComparison.Decision == UpdateDecision.REJECT) {
//      // add the removed ratetable (table, definition, its factors and CalcRoutineParameterSet) into the update ratebook
//      var tableCode = rateTableComparison.CanonicalVersion.TableCode
//      var isStateTable = RateBookHelper.isStateTable(rateTableComparison)
//      if (isStateTable) {
//        addRateTableAndDependencies(rateTableComparison, tableCode, stateRateBookXmlInAdopted, stateRateBookXmlInUpdate)
//      } else {
//        addRateTableAndDependencies(rateTableComparison, tableCode, cwRateBookXmlInAdopted, pcaMergedCWRatebook)
//      }
//    }
  }

  //add table definition, table, its factor rows and CalcRoutineParameterSet
  //Note: keep this method for future.
  function addRateTableAndDependencies(rateTableComparison : RateTableComparison, rateTableCode : String, adoptedRatebookXml : RateBookXml, targetRateBookXml : RateBookXml) {
    //add ratetable definition from Adopted
    var tableDefinition = adoptedRatebookXml.AllTableDefinitions.firstWhere(\tableDefinition -> tableDefinition.TableCode == rateTableCode)
    RateBookHelper.addTableDefinition(tableDefinition, targetRateBookXml)

    //add CalcRoutineParameterSets - referred by ratetable definition,   from Adopted
    RateBookHelper.addCalcRoutineParameterSet(adoptedRatebookXml.AllCalcRoutineParameterSets, targetRateBookXml)

    //add ratetable from Adopted
    var table = adoptedRatebookXml.AllTables.firstWhere(\table -> table.DefinitionPublicId == tableDefinition.PublicId)
    RateBookHelper.addTable(table, targetRateBookXml)

    //add factor rows - referred by ratetable from Current!
    //Note:  get the factor rows from Current, not from adopted - the customer might have changes.
    var factorRowsComparisonList = rateTableComparison.FactorRowComparisons
    var factorRowsToBeAdded : List<DefaultRateFactorRowXml>= {}
    var factorPhysicalColumnName = rateTableComparison.CanonicalVersion.FactorPhysicalColumnName
    var namespace = targetRateBookXml.NameSpace
    factorRowsComparisonList.each(\factorRowComparison -> {
      if (RateBookHelper.isCustomerAddedFactorRow(factorRowComparison)) {
        //it is a customer added factor row, need to create the factor row on the fly.
        var rateFactorRowXmlTobeAdded = RateBookHelper.createCustomerAddedFactorRow(rateTableComparison, factorRowComparison, namespace)
        factorRowsToBeAdded.add(rateFactorRowXmlTobeAdded)
      } else {  // User Reject - Keep current value
        var rateFactorRowXmlInAdopted = adoptedRatebookXml.AllRateFactorRows.firstWhere(\row -> row.PublicId == factorRowComparison.Adopted.PublicId)
        var rateFactorRowXmlToBeAdded = new DefaultRateFactorRowXml(rateFactorRowXmlInAdopted.Xml)  // make a copy from Adopted
        rateFactorRowXmlToBeAdded.setElementValue(factorPhysicalColumnName, factorRowComparison.Current.Rate) // assign the rate from Current
        factorRowsToBeAdded.add(rateFactorRowXmlToBeAdded)
      }
    })

    RateBookHelper.addFactorRows(factorRowsToBeAdded, targetRateBookXml)
  }
}