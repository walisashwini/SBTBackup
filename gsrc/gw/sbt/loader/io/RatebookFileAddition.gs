package gw.sbt.loader.io

uses gw.sbt.artifacts.ratebooks.RateBookXml
uses gw.sbt.config.ConfigurationFile
uses java.util.Date

class RatebookFileAddition extends FileAddition<RateBookXml> {
  construct(lineCode : String, jurisdiction : String, fileName : String, processedDate : Date, content : RateBookXml) {
    super(ConfigurationFile.rateBooksGeneratedFile(lineCode, jurisdiction, processedDate, fileName), content)
  }

  construct(fileName : String, content : RateBookXml) {
    super(ConfigurationFile.pcaMergedRatebook(fileName), content)
  }
}