package gw.sbt.loader.stateadd

uses gw.sbt.artifacts.ratebooks.RateBookXml
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.Load
uses gw.sbt.loader.io.RatebookFileAddition
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.rating.RateBookContent

class RateBookLoadGenerator {

  function generateLoad(rateBook: RateBookContent, updateContents: SBTUpdateContents, lineCode: String, jurisdiction: String, adoptionDate: Date, processedDate : Date) : Load {
    var load = new Load<RateBookContent>(rateBook)

    var rateBookFileName = updateContents.getRateBookFileName(jurisdiction)
    var generatedDirectoryName = ConfigurationFile.getGeneratedDirectoryName(lineCode, jurisdiction, processedDate)

    var rateBookXml = new RateBookXml(updateContents.getRateBookXml(jurisdiction))
    rateBookXml.EffectiveDate = adoptionDate
    rateBookXml.RenewalEffectiveDate = adoptionDate
    rateBookXml.Status = typekey.RateBookStatus.TC_STAGE

    load.add(new RatebookFileAddition(lineCode, jurisdiction, rateBookFileName, processedDate, rateBookXml))

    var message = new StringBuilder("Rate Book Decision: ")
    if (rateBook.DecisionAndInstructions.Decision == UpdateDecision.REJECT) {
      message.append("User has indicated that the Rate Book should not be processed.")
    } else {
        message.append("User has indicated that the Rate Book should be processed. Load file using Import Rate Book functionality. " +
            "File is named " + rateBookFileName + " and is located in the content directory " +
            "(...modules\\configuration\\config\\content\\" + generatedDirectoryName + "). " +
            "Server must be restarted prior to loading Rate Book.")
    }
    load.addMessage(message.toString())
    return load
  }
}