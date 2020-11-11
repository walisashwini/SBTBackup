package gw.sbt.loader.stateupdate

uses gw.sbt.artifacts.ratebooks.RateBookXml
uses gw.sbt.artifacts.ratebooks.RateBookXmlDigested
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.Load
uses gw.sbt.util.LoadHelper
uses gw.sbt.loader.RateBookHelper
uses gw.sbt.loader.io.RatebookFileAddition
uses gw.sbt.loader.stateupdate.ratebook.RateTableRuleBook
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.rating.RateBookContent

class RateBookLoadGenerator {

  function generateLoad(sbtUpdate : SBTUpdate,
                        rateBookInUpdate : RateBookContent,
                        rateBookInAdopted : RateBookContent,
                        rateBookInCurrent : RateBookContent,
                        currentContents : CurrentConfigContents,
                        updateContents : SBTUpdateContents,
                        adoptedContents : SBTUpdateContents,
                        lineCode : String, jurisdiction : String, adoptionDate : Date, processedDate : Date) : Load {
    var load = new Load<RateBookContent>(rateBookInUpdate)

    var pcaMergedCWRatebook : RateBookXml = null
    var updateCWRatebookName = updateContents.getRateBookFileName("CW")?.replaceAll(".xml", "")
    if (updateCWRatebookName != null){
      pcaMergedCWRatebook = currentContents.getPCAMergedCWRateBookXml(updateCWRatebookName)
    }

    // variable to check whether state is independent or not
    var isIndependentState = sbtUpdate.MetaData.isIndependentState

    //the PCA merged countrywide book - It will be null for independent state(s)
    if (isIndependentState) {
      pcaMergedCWRatebook = null
    } else if (pcaMergedCWRatebook == null) {  // it is null for first state update.
      pcaMergedCWRatebook = new RateBookXmlDigested(updateContents.getRateBookXml("CW"))
      RateBookHelper.setRatebookStatus(pcaMergedCWRatebook, adoptionDate)
    }

    //ratebooks from the update package
    var statetRateBookXmlInUpdate = new RateBookXmlDigested(updateContents.getRateBookXml(jurisdiction))
    RateBookHelper.setRatebookStatus(statetRateBookXmlInUpdate, adoptionDate)
    var countrywideRateBookXmlInUpdate = not isIndependentState ? new RateBookXmlDigested(updateContents.getRateBookXml("CW")) : null

    //ratebooks from the adopted package
    var stateRateBookXmlInAdopted = new RateBookXmlDigested(adoptedContents.getRateBookXml(jurisdiction))
    var countrywideRateBookXmlAdopted = not isIndependentState ? new RateBookXmlDigested(adoptedContents.getRateBookXml("CW")) : null

    var unionOfRateTables = LoadHelper.createUnion({rateBookInUpdate.RateTables*.TableCode.toList(), rateBookInCurrent.RateTables*.TableCode.toList(), rateBookInAdopted.RateTables*.TableCode.toList()})

    var ruleBook = new RateTableRuleBook(pcaMergedCWRatebook, statetRateBookXmlInUpdate, countrywideRateBookXmlInUpdate, stateRateBookXmlInAdopted, countrywideRateBookXmlAdopted)
    unionOfRateTables.each(\tableCode -> {
      var rateTableComparison = RateBookHelper.createRateTableComparison(tableCode, sbtUpdate, rateBookInUpdate, rateBookInCurrent, rateBookInAdopted)
      if (rateTableComparison.New != null or rateTableComparison.Adopted != null) { // skip customer added table
        ruleBook.applyRules(rateTableComparison)
      }
    })

    //merged countrywide book
    var pcaMergedCWRatebookFileName : String = null
    if (not isIndependentState) {
      pcaMergedCWRatebookFileName = RateBookHelper.generatePCAMergedRatebookFileName(updateContents.getRateBookFileName("CW"))
      load.add(new RatebookFileAddition(pcaMergedCWRatebookFileName, pcaMergedCWRatebook))
    }

    //merged state book
    var rateBookFileName = updateContents.getRateBookFileName(jurisdiction)
    load.add(new RatebookFileAddition(lineCode, jurisdiction, rateBookFileName, processedDate, statetRateBookXmlInUpdate))

    //configuration report message
    var generatedDirectoryName = ConfigurationFile.getGeneratedDirectoryName(lineCode, jurisdiction, processedDate)
    var message = new StringBuilder("Rate Book Decision: ")
    message.append("User has indicated that the Rate Book should be processed. Load file using Import Rate Book functionality. " +
        "State Ratebook file is named " + rateBookFileName + " and is located in the content directory " +
        "(...modules\\configuration\\config\\content\\" + generatedDirectoryName + "). " +
        "Countrywide Ratebook file is named " + pcaMergedCWRatebookFileName + " and is located in the content directory " +
        "(...modules\\configuration\\config\\content\\). "
    )
    load.addMessage(message.toString())
    return load
  }

}